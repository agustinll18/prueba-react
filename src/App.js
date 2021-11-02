import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar.jsx'; 
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ItemDetailContainer from '../src/components/Main/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (<div className="App">
	     <Router>
			<NavBar/>   
			<Switch>
             <Route exact path="/productos/:id">
               <ItemDetailContainer/>
             </Route>
			 <Route exact path="/">
               <Main/>
             </Route>
           </Switch>		
        </Router>
        <Footer/>
</div>
	);
}
export default App;
