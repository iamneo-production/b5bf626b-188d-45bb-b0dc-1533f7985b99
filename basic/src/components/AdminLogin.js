import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from "./home.component"
import React, { Component } from 'react'
import addprod from "./addprod";

export default class AdminLogin extends Component {
    render() {
      return (
<Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/'}>
             <b>Welcome Admin!</b>
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <Link className="nav-link" to={'/add-prod'}>
                    Add Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/Mod-Prod'}>
                    Modify Product
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
              <Route path="/home-admin" element={<hadmin />}/>
              <Route path="/add-prod" element={<addprod/>} />
              <Route path="/mod-prod" element={<modprod/>} />
              
            </Routes>
          </div>
        </div>
      </div>
    </Router>
      )
    }
}