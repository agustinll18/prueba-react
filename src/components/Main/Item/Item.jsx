import React , {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Link } from "react-router-dom";



export default function Item(productos) {

    const [ clicks, setClicks] = useState(0)
        const stock=19
        const addClick = () =>{
            if(clicks< stock)
          setClicks(clicks+1)
        
        }
        const removeClick = () =>{
          if(clicks>0)
        setClicks(clicks-1)
        }


  const share = () => {
    alert("Gracias por compartir nuestra pagina!");
  }
    
    return (
        
        <div classname="col col-xs-12 col-sm-12 col-md-4 col-lg-3">
           
            
            <Container>
              <Row>
                <Col sm>
                <div/>
                
                  <Card style={{ width: '18rem',height:'360px', justifyContent:'center' }}>
                    <Card.Img variant="top" src="https://acortar.link/gaYY0u" style={{ position: 'relative',width: '180px',height:'160px', justifyContent:'center',top:'35px' }}/>
                    <Card.Body>
                      <Card.Title style={{ position: 'relative', justifyContent:'center',top:'35px', fontSize: '12px'}}> <h1 style={{  fontSize: '22px'}}>{productos.modelo}</h1></Card.Title>
                      <Card.Text style={{ position: 'relative', justifyContent:'center',top:'35px'}}><h2>{productos.precio}</h2></Card.Text>
                <div/>
                <div>
                        <Button  onClick={()=>addClick()} variant="primary" style={{ position: 'relative',width: '32px',height:'45px', justifyContent:'center',top:'35px' }}>+</Button>
                        <h1 style={{ position: 'relative',left: '100px',top: '-10px',}}>{clicks}</h1>
                        <Button onClick={()=>removeClick()} variant="danger" style={{ position: 'relative',width: '32px',height:'45px',left: '200px',top: '-66px',}}> - </Button>
                        <Button variant="outline-secondary" style={{ position: 'relative',width: '255px',height:'45px', justifyContent:'center',top:'-55px',textDecoration:'none',color: 'red',fontWeight:'bolder' }}><Link to="/ItemDetailContainer">COMPRAR</Link></Button>
                </div>
                      
                    </Card.Body>
                  </Card>  
                </Col>
              </Row>
            </Container>
            <Button onClick={share} style={{width: '255px',height:'45px' }}>Compartir pagina</Button>
            {/* <h1>{productos.modelo}</h1>
           <h1>{productos.precio}</h1>
           <h1>{productos.marca}</h1>
           <h1>{productos.id}</h1> */}
           
        </div>
        
    )}

