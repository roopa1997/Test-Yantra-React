import React from 'react';
import Home from './components/home/Home'
import Login from './components/login/Login'
import CreateAccount from './components/createAccount/CreateAccount'
import './App.css';
import { Link, BrowserRouter as Router , Route} from 'react-router-dom'

    const routing = <Router>
      <div >
        <ul>
          <li><Link to = "/">Home</Link></li>
          <li><Link to='./Login'>Login</Link></li>
          <li><Link to='./CreateAccount'>CreateAccount</Link></li>

        </ul>
      </div>
      <Route exact path='/' component={Home} />
      <Route path='/Login' component={Login} />
      <Route path='/CreateAccount' component={CreateAccount} />


    </Router>
  

export default routing;
