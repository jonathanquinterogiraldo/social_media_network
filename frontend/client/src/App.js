import React, { Component } from 'react';
import {
  Switch,
  Route,
  //Redirect,
  //Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register';
export class App extends Component {
  // constructor(props){
  //   super(props);  //  
  // }  

   render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path='/Login'>
            <Login/>
          </Route>
          <Route exact path='/Home'>
            <Home/>
          </Route>
          <Route exact path='/Register'>
            <Register/>
          </Route>
        </Switch>    
      </div>
    );
   } 
}

export default App;
