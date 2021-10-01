import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'; 
import Main from './components/Main/Main.jsx';
import Cart from './components/Cart/Cart.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
		<NavBar/>
		<ItemListContainer greeting="Su pedido son: 0 productos"/>
		<Main/>
		<Cart/>
        <Footer/>
	</div>
    
	);
}



export default App;
