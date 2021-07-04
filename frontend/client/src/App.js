import React, { Component } from 'react';
import {
  Switch,
  Route,
  //Redirect,
  //Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
export class App extends Component {
  // constructor(props){
  //   super(props);  //  
  // }  

   render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Login/>
          </Route> 
        </Switch>    
      </div>
    );
   } 
}

export default App;
