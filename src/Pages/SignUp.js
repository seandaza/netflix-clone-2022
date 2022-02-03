import { makeStyles, Typography } from '@material-ui/core';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../firebase';
import { login } from '../firebase';



import { NetflixButton, NetflixInput } from '../styled/styledcomponents';

const SignUp = () => { 
    const classes = useStyles();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

  
   
    const register  = (e) => {
        e.preventDefault();
        signup(email,password)
        .then(authUser => console.log(authUser))
        .then(authUser => navigate('/'))
        .catch(err => alert(err.message));
     }

    const signIn  = (e) => {
        e.preventDefault();
        login(email,password)
        .then(authUser => console.log(authUser))
        .then(authUser => navigate('/'))
        .catch(err => alert(err.message));
     }


    return (
        <div className={classes.root}>
            <Typography variant='h5' align='left'>
                Sign In
            </Typography>
            <form className={classes.form}>
                <NetflixInput 
                    value={ email } 
                    onChange={(e) => setEmail(e.target.value)} 
                    type='email' 
                    placeholder='Email' 
                    className={classes.email} />
                <NetflixInput 
                    value={ password }
                    onChange={(e) => setPassword(e.target.value)} 
                    type='password' 
                    placeholder='Password' 
                    className={classes.password}/>
                <NetflixButton 
                    onClick={ signIn }
                    type='submit' 
                    wide='medium'
                    radius='true'
                >Sign In
                </NetflixButton>
                <Typography variant='subtitle2'>
                    New to Netflix ?{" "}
                    <span className={classes.signupLink}
                    onClick={register}
                    >
                        
                        Sign Up Now.{" "}
                        </span>
                </Typography>
            </form>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({

    root: {
        maxWidth: '350px',
        width: '20rem',
        height: '25rem',
        backgroud: 'rgba(0,0,0,0.65)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    form: {
        width: '80%',
    },
    email: {
        marginBottom: theme.spacing(2),
    },
    password: {
        marginBottom: theme.spacing(4),
    },
    signupLink: {
        color: '#fff',
        cursor: 'pointer',
        "&:hover": {
            textDecoration: 'underline',
        },
    },

  }));

export default SignUp
