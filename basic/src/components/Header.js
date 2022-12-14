import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './login.component'
import SignUp from './signup.component'
import Home from "./home.component"
import React, { Component } from 'react'

export default class Header extends Component {
    render() {
      return (
<Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/home-comp'}>
             <b>FoodFox</b>
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <Link className="nav-link" to={'/home-comp'}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/home-comp" element={<Home />}/>
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp/>} />
              
            </Routes>
          </div>
        </div>
      </div>
    </Router>
      )
    }
}