import React, { useState } from 'react'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import HomeR from '../home-r/HomeR'
import Login from '../login/Login'
import { UserConsumer } from '../../context/UserContext'
export default function Nav() {



    return (
        <div>
            <UserConsumer>
                {
                    (parentData) => {

                        return (
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
                                                    <Link to="/" className="nav-link">Home</Link>
                                                </li>
                                                <li className="nav-item active">
                                                    <Link to='./Login ' onClick={() => { parentData.setLog(false) }} className="nav-link">Login</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>



                                </div>
                                <Route exact path='/' component={HomeR} />
                                <Route path='/Login' component={Login} />



                            </Router>
                        )
                    }
                }
            </UserConsumer>


        </div>
    )
}
