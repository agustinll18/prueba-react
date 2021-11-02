import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../Main/Cart/CartWidget';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from '../Main/Main.jsx';

import Contacto from '../Contacto/Contacto'
export default function NavBar() {
    return (
        <div>
            <header  class="header" >
        	<nav class="navbar navbar-expand-lg navbar-dark">
        		<div class="container-fluid">
        		  <Router>
				    <Link to="/" style={{ color:'white',textDecoration:'none',padding:'5px',fontSize:'32px',marginRight:'55px' }}>Shop</Link>
        		  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        			<span class="navbar-toggler-icon"></span>
        		  </button>
        		  <div class="collapse navbar-collapse" id="navbarNav">
        			<ul class="navbar-nav">
        			  <li class="nav-item">
					  <Link to="/" style={{ color:'white',textDecoration:'none',padding:'5px' }}>Home</Link>
        			  </li>
        			  <li class="nav-item">
        				<Link to="/main/id:1" style={{ color:'white',textDecoration:'none',padding:'5px' }}>Main</Link>
        			  </li>
        			  <li class="nav-item">
					  <Link to="/Contacto/id:2" style={{ color:'white',textDecoration:'none',padding:'5px' }}>Contacto</Link>
        			  </li>
        			  <li class="nav-item">
					  <Link to="/Jobs/id:3" style={{ color:'white',textDecoration:'none',padding:'5px' }}>Trabaja con nosotros</Link>
        			  </li>
        			</ul>
        		  </div>
				  <Switch>
                    <Route path="/Main/id:1">
                      <Main/>
                    </Route>
					<Route path="/Contacto/id:2">
                      <Contacto/>
                    </Route>
					<Route path="/Jobs/id:3">
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
