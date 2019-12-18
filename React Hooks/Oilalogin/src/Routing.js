import React, { useState } from 'react';
import Home from './components/home/Home'
import Login from './components/login/Login'
/* import CreateAccount from './components/createAccount/CreateAccount' */
import './App.css';

import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import { UserConsumer } from './context/UserContext';

function Routing(props) {
    let lg;

    return (

        <UserConsumer >
            {
                (context) => {
                    if(context.login===true){
                        lg=1
                    }
                    return (
                        <Router>
                            <div >

                                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                                    <h1 className="navbar-brand" href="#">Recipe App</h1>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav ">
                                            <li className="nav-item active">
                                                <Link to="/" className="nav-link">Home</Link>
                                            </li>
                                            <li className="nav-item active">{lg?<Link to='./Login' className="nav-link" onClick={() => { context.setLog(false) }} >Logout</Link>:<Link to='./Login' className="nav-link" onClick={() => { context.setLog(true) }} >Login</Link>}
                                                {/* <Link to='./Login' className="nav-link" onClick={() => { context.setLog(true) }} >Login</Link> */}
                                            </li>
                                            {/*  <li className="nav-item active">
                                        <Link to='./CreateAccount' className="nav-link">CreateAccount</Link>
                                    </li>  */}


                                        </ul>
                                    </div>
                                </nav>



                            </div>
                            <Route exact path='/' component={Home} />
                            <Route path='/Login' component={Login} />
                            {/* <Route path='/CreateAccount' component={CreateAccount} /> */}


                        </Router>
                    )

                }

            }

        </UserConsumer>


    )
}




export default Routing;
