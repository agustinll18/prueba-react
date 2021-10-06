import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function ItemListContainer({stock}) {
    const [ clicks, setClicks] = useState(0)
  
    const addClick = () =>{
        if(clicks< stock)
      setClicks(clicks+1)
    
    }
    return (
        <div>
            <nav class="navbar navbar-inverse bg-inverse fixed-top bg-faded" id="cart">
                <div class="row">
                    <div class="col">
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#cart">
                            <img src="https://img.icons8.com/metro/25/000000/add-shopping-cart.png"/>
                            <h1>{clicks}</h1>
                        </button>
                        
                        <button class="clear-cart btn btn-danger" width="300px">Vaciar Carrito</button>
                    </div>
                </div>
            </nav> 
            <Container>
              <Row>
                <Col sm>
                  <Card style={{ width: '18rem',height:'360px', justifyContent:'center' }}>
                    <Card.Img variant="top" src="https://acortar.link/gaYY0u" style={{ width: '180px',height:'160px', justifyContent:'center' }}/>
                    <Card.Body>
                      <Card.Title>Motherboard Gigabyte B550M-DS3H-rev-1x</Card.Title>
                      <Card.Text>Precio: $10.000</Card.Text>
                      <Button onClick={()=>addClick()} variant="primary" style={{ width: '120px',height:'45px', justifyContent:'center' }}>Comprar</Button>
                    </Card.Body>
                  </Card>  
                </Col>
                <Col sm>
                  <Card style={{ width: '18rem',height:'360px', justifyContent:'center' }}>
                    <Card.Img variant="top" src="https://acortar.link/TLsfsM" style={{ width: '180px',height:'160px', justifyContent:'center' }}/>
                    <Card.Body>
                      <Card.Title>Tarjeta de video Asrock rx-580</Card.Title>
                      <Card.Text>Precio: $10.000</Card.Text>
                      <Button  onClick={()=>addClick()} variant="primary" style={{ width: '120px',height:'45px', justifyContent:'center' }}>Comprar</Button>
                    </Card.Body>
                  </Card> 
                </Col>
                <Col sm>
                  <Card style={{ width: '18rem',height:'360px', justifyContent:'center' }}>
                    <Card.Img variant="top" src="https://acortar.link/xpjXYm" style={{ width: '180px',height:'160px', justifyContent:'center' }}/>
                    <Card.Body>
                      <Card.Title>Procesador Ryzen 5 3600xt</Card.Title>
                      <Card.Text>Precio: $20.000</Card.Text>
                      <Button  onClick={()=>addClick()} variant="primary" style={{ width: '120px',height:'45px', justifyContent:'center' }}>Comprar</Button>
                    </Card.Body>
                  </Card> 
                </Col>
              </Row>
            </Container>
            
        </div>
    )
}
