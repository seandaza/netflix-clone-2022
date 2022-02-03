
import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import logo from "../images/netflix-logo.png";
import banner from "../images/banner.jpg";
import { NetflixButton, NetflixInput } from '../styled/styledcomponents';
import SignUp from './SignUp';


const Login = () => {
    const classes = useStyles();
    const [signIn, setSignIn] = React.useState(false);
    return (
        <div className={classes.root}>
            <img src={logo} alt="logo" className={classes.logo} />
        <NetflixButton className={classes.session}> Iniciar sesion</NetflixButton>
            <div className={classes.info}>
                {!signIn ? (
                        <SignUp />
                    ) : (
                        <>
                            <Typography variant='h4' gutterBottom>
                                Unlimited movies, TV shows, and more.
                            </Typography>
                            <Typography variant='h5'>
                                Watch anywhere. Cancel anytime.
                            </Typography>
                            <Typography variant='h6' gutterBottom>
                                Ready to watch? Enter your email to create or restart your membership.
                            </Typography>
                            <div className={classes.inputBlock}>
                                <NetflixInput placeholder="Email address" />
                                <NetflixButton wide='medium' onClick={() => setSignIn(true)}>GET STARTED</NetflixButton>
                            </div>
                        </>
                    )
                }

            </div>
        </div>  
    )
}

const useStyles = makeStyles((theme) => ({

    root: { 
        position: "relative",
        height: "100vh",
        backgroundImage: `url(${banner})`,
        objectFit: "contain",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        position: "fixed",
        top: -110,
        left: -70,
        width: "300px",
        cursor: "pointer"
    },
    session: {
        position: "fixed",
        zIndex: 15,
        right: 20,
        top: 20,
    },
    info: {
        color: "#fff",
        zIndex: 15,
        textAlign: "center",
        "& h4": {
            fontWeight: 800,
        },
        "& h5": {
            fontWeight: 400,
        },
    },
  }));

export default Login
