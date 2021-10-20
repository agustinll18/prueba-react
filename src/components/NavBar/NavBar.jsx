import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../Cart/CartWidget.jsx';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer';
export default function NavBar() {
    return (
        <div>
            <header  class="header" >
        	<nav class="navbar navbar-expand-lg navbar-dark">
        		<div class="container-fluid">
        		  <Router>
					  <a class="navbar-brand" href="../index.html">Portfolio</a>
        		  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        			<span class="navbar-toggler-icon"></span>
        		  </button>
        		  <div class="collapse navbar-collapse" id="navbarNav">
        			<ul class="navbar-nav">
        			  <li class="nav-item">
        				<a class="nav-link"href="../index.html">Home</a>
        			  </li>
        			  <li class="nav-item">
        				<Link to="/main">Main</Link>
        			  </li>
        			  <li class="nav-item">
        				<a class="nav-link" href="contacto.html">Contacto</a>
        			  </li>
        			  <li class="nav-item">
        				<a class="nav-link" href="quien_soy.html" >Trabaja con nosotros</a>
        			  </li>
        			</ul>
        		  </div>
				  <Switch>
                    <Route path="/Main">
                      <Main/>
                    </Route>
                  </Switch>
                </Router>
        		</div>
        	  </nav>
        </header>
		<CartWidget/>
        </div>
    )
}
