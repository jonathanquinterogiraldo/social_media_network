import logo from './logo.svg';
import './App.css';
import {
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import Login from './components/Login'

function App() {
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

export default App;
