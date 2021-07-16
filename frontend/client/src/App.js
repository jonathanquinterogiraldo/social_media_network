import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  Redirect,
  useHistory  
  //Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'

function ProtectedRoute(props){

  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token')

    if(!token){
      history.push('/login')
    } 
  }, [history])

  return(
    <Route {...props} />
  )
}

function App() {    
  
  return (
    <div className="App">
      <Switch>
        <Route exact path='/Login'>
          <Login />
        </Route>
        <ProtectedRoute path='/Home'>
          <Home />
        </ProtectedRoute>
        <Route exact path='/Register'>
          <Register/>
        </Route>
        <Route path='/'>
          <Login/>
        </Route>
      </Switch>    
    </div>
  );   
}

export default App;
