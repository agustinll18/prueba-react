import React , {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'


export default function Item(props) {
    const [ clicks, setClicks] = useState(0)
        /*const [contador, setContador] = useState(initial)*/
        const stock=19
        const addClick = () =>{
            if(clicks< stock)
          setClicks(clicks+1)
        
        }
        const removeClick = () =>{
          if(clicks>0)
        setClicks(clicks-1)
        }


  const eliminate = () => {
    alert("Gracias por compartir nuestra pagina!");
  }
    
    return (
        
        <div classname="col col-xs-12 col-sm-12 col-md-4 col-lg-3">
           
            <Router>
            <Container>
              <Row>
                <Col sm>
                <div/>
                
                  <Card style={{ width: '18rem',height:'360px', justifyContent:'center' }}>
                    <Card.Img variant="top" src="https://acortar.link/gaYY0u" style={{ position: 'relative',width: '180px',height:'160px', justifyContent:'center',top:'35px' }}/>
                    <Card.Body>
                      <Card.Title style={{ position: 'relative', justifyContent:'center',top:'35px'}}> <h1>{props.modelo}</h1></Card.Title>
                      <Card.Text style={{ position: 'relative', justifyContent:'center',top:'35px'}}>Precio: $10.000</Card.Text>
                <div/>
                <div>
                        <Button  onClick={()=>addClick()} variant="primary" style={{ position: 'relative',width: '32px',height:'45px', justifyContent:'center',top:'35px' }}>+</Button>
                        <h1 style={{ position: 'relative',left: '100px',top: '-10px',}}>{clicks}</h1>
                        <Button onClick={()=>removeClick()} variant="danger" style={{ position: 'relative',width: '32px',height:'45px',left: '200px',top: '-66px',}}> - </Button>
                        <Button variant="outline-secondary" style={{ position: 'relative',width: '255px',height:'45px', justifyContent:'center',top:'-55px',textDecoration:'none',color: 'white' }}><Link to="/ItemDetailContainer">Comprar</Link></Button>
                </div>
                      
                    </Card.Body>
                  </Card>  
                </Col>
              </Row>
            </Container>
            <Button onClick={eliminate} style={{width: '255px',height:'45px' }}>Compartir pagina</Button>
            <h1>{props.modelo}</h1>
           <h1>{props.precio}</h1>
           <h1>{props.marca}</h1>
           <Switch>
             <Route path="/ItemDetailContainer">
               <ItemDetailContainer />
             </Route>
           </Switch>
         </Router>
        </div>
        
    )}

