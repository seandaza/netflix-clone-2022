import { AppBar, Avatar, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from "../images/netflix-logo.png";
import avatar from "../images/avatar.jpg";

const Header = () => {
    const classes = useStyles();
    const [show, setShow] = useState(false); 
    const navigate = useNavigate();

    const hideHeader = () => {
        if (window.scrollY > 66) {
            setShow(true);
        } else {
            setShow(false);
        }
    }
 
    useEffect(() => { 
        window.addEventListener("scroll",hideHeader);
        return () => {
            window.removeEventListener("scroll",hideHeader);
        }
    }, [])

    return (
        <AppBar position="sticky" elevation={0} className={ ` ${classes.root} ${show && classes.transparent} ` } >
            <Toolbar className={classes.toolbar}>
                <IconButton onClick={() => navigate("/")}>  
                    <img src={logo} alt="logo" className={classes.logo}  />
                </IconButton>
                
                <Avatar variant="square" style={{cursor:"pointer", height:"50px", width:"50px", borderRadius:"15%", marginRight:"88px" }} 
                onClick={() => navigate("/profile")}
                img src={avatar} alt="logo" className={classes.logo}  
                />  
            </Toolbar>
        </AppBar>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#111',
        top: 0,
        left: 0,
        right: 0,
        height: '100px',
    },
    transparent: {
        backgroundColor: 'transparent',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        width: '396px',
        cursor: 'pointer',
        marginLeft: '-68px',
    },
  }));

export default Header
