import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Paypal from './Pages/Paypal';
import Home from './Pages/Home';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login, logout} from './features/UserSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/UserSlice';






function App() {
  
  const user = useSelector(selectUser);
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = getAuth();


  useEffect(() => { 
     const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(login({
          uid: user.uid,
          email: user.email,
        }))  
      } else {
        dispatch(logout);
      }
    })
    return unsubscribe;
  },[dispatch])

  /* useAuth(); */



  return (
    <div className={classes.root}>
      <Router>
            <Routes>
              <Route exact path='/login' element = {<Login />} />
              <Route exact path='/profile' element = {<Profile />} />
              <Route exact path='/checkout' element = {<Paypal/>} />
              <Route exact path='/' element = {<Home/>} />
            </Routes>
      </Router>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({

  root: {
    minHeight: '100vh',
    backgroundColor: '#111'

  },
}));

export default App;
