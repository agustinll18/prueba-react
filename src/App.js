import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar.jsx'; 
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';
//import Item from './components/Item/Item.jsx';
import  Container  from '../src/components/Container/Container';

function App() {
  return (
    <div className="App">
		<NavBar/>
		
		<Main/>
		<Container/>
        <Footer/>
	</div>
    
	);
}
/*javascript del curso de JS de coderhouse*/



export default App;
/*Mira de nuevo la consigna del desafio. Te estan faltando unos detalles:

al estado del componente tenemos que iniciarlizarlo mediante una prop "initial".
 El valor inicial seteamos cuando llamamos al hook useState(valor).
Implementaste bien la funcion de suma, pero estaria faltando tambien quitar elementos. 
Fijate en el manual de desafios hay un ejemplo visual del componente para que entiendas cual es la idea. 
Deberias tener dos botones para quitar y agregar elementos, y uno tercero de Comprar/Agregar al carrito. 
A la funcion de suma tendriamos que agregarle otra que sirva para restar y asignarla al onClick del boton correspondiente (no te olvides de hacer un IF para que el valor no baje de cero!)



Otro problema es que tenes muchos elementos (cards) que usan el mismo state del componente.
 De todas formas esto no te preocupes porque mas adelante le vamos a dar otro uso al contador dentro de otro componente,
  y de la misma forma todas esas "cards" que usas dentro de ItemListContainer las tenemos que separar en componentes <Item> individuales*/