import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'; 
import Main from './components/Main/Main.jsx';
import CartWidget from './components/Cart/CartWidget.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
		<NavBar/>
		<ItemListContainer greeting="Hola usuario"/>
		<Main/>
        <Footer/>
	</div>
    
	);
}
/*javascript del curso de JS de coderhouse*/



export default App;
