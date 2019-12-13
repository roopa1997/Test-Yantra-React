import React from 'react';
import Home from './components/home/Home'
import Login from './components/login/Login'
import CreateAccount from './components/createAccount/CreateAccount'
import Footer from './components/footer/Footer'
import './App.css';

import { Link, BrowserRouter as Router , Route} from 'react-router-dom'

    function Routing(props){

      return(

        <Router>
        <div >
          <ul className="topnav">
            <li><Link to = "/" className="active">Home</Link></li>
            <li><Link to='./Login' className="right">Login</Link></li>
            <li><Link to='./CreateAccount' className="right">CreateAccount</Link></li>
  
          </ul>
        </div>
        <Route exact path='/' component={Home} />
        <Route path='/Login' component={Login} />
        <Route path='/CreateAccount' component={CreateAccount} />
  
  <Footer />
      </Router>
    
      )
    }
    

   

export default Routing;
