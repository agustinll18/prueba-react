import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar.jsx'; 
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';
import Item from './components/Item/Item.jsx';


function App() {
  return (
    <div className="App">
		<NavBar/>
		<Item/>
		<Main/>
        <Footer/>
	</div>
    
	);
}
/*javascript del curso de JS de coderhouse*/



export default App;
