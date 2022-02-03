import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import Header from '../components/Header';
import avatar from '../images/avatar.jpg';
import Plans from '../components/Plans';
import { NetflixButton } from '../styled/styledcomponents';
import { useNavigate } from 'react-router-dom';
import { logout } from '../firebase';

const Profile = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const signout = () => {
        logout();
        navigate('/login');
    }

    return (
        <div className={classes.root}>
            <Header />
            <Typography variant="h3">Edit Profile</Typography>
                <div className={classes.info}>
                    <img src={avatar} alt="avatar" />
                    <div className={classes.details}>
                            <div className={classes.plans}>
                                <Typography variant="h6">email usuario</Typography>
                                <Typography className={classes.plansText} variant="h5" gutterBottom>Plans</Typography>
                                <Plans cost={7.99}>Netflix Standard<p style={{color:'green'}}>$7.99</p></Plans>
                                <Plans cost={11.99}>Netflix Basic<p style={{color:'green'}}>$11.99</p></Plans>
                                <Plans wide="medium"  color="gray" cost={15.99}>Netflix Premium<p style={{color:'green'}}>$15.99</p></Plans>
                                <NetflixButton onClick={signout} wide="fullwidth">Sign out</NetflixButton>
                            </div>
                    </div>

                </div>
        </div>
    )

}

const useStyles = makeStyles((theme) => ({

    root: {
        color: '#fff',
        maxWidth: '800px',
        width: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    info: {
        width: '80%',
        display: 'flex',
        "& img": {
            height: '100px',
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            }
        }
    },
    details: {
        width: '100%',
        marginLeft: theme.spacing(3),
        " & h6": {
            backgroundColor: '#fff',
            padding: theme.spacing(1),
            marginBottom: theme.spacing(1),
            fontSize: '18px',
        }
    },
    plans: {
        width: '100%',
    },
    plansText: {
        borderBottom: '1px solid lightgray',
    }
}));

export default Profile
