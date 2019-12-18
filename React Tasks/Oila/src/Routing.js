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

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <h1 className="navbar-brand" href="#">Employee Form</h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item active">
                        <Link to = "/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item active">
                        <Link to='./Login' className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item active">
                        <Link to='./CreateAccount' className="nav-link">CreateAccount</Link>
                        </li>
                        
                        
                    </ul>
                </div>
            </nav>


         
        </div>
        <Route exact path='/' component={Home} />
        <Route path='/Login' component={Login} />
        <Route path='/CreateAccount' component={CreateAccount} />
  
 {/*  <Footer /> */}
      </Router>
    
      )
    }
    

   

export default Routing;
