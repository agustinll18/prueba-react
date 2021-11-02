import React, {useState} from 'react'
import { useParams } from 'react-router';
import Contador from '../Contador/Contador';

// para la carta
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function ItemDetailContainer  (productos)  {
    const [items, setItems] = useState();
    const {id}=useParams()
    var productos = [
      {
        modelo: " B550M-DS3H-rev-1x",
        marca: "Gigabyte",
        precio: "$10.000",
        id: 1,
        pic:"https://acortar.link/gaYY0u"
         },
      { modelo: " Rx-580",
        marca: "Asrock",
        precio: "10.000",
        id: 2,
      },
  
      { modelo: "Ryzen 5 3600xt",
        marca: "AMD",
        precio: "20.000",
        id: 3
        }
      ]
  ;         
                    
    const getItem = new Promise((resolve, reject) => {
        setTimeout(() =>resolve(productos),2000)
    });
    getItem.then((resolve) =>setItems(resolve[id-1]));
    return (
        <div>
            {(items)?
              <div><h1>La marca de su producto es :{items.precio}</h1>
              <Container>
              <Row>
                <Col sm>
                <div/>
                
                  <Card style={{ width: '18rem',height:'360px', justifyContent:'center' }}>
                    <Card.Img variant="top" src="https://acortar.link/gaYY0u" style={{ position: 'relative',width: '180px',height:'160px', justifyContent:'center',top:'35px' }}/>
                    <Card.Body>
                      <Card.Title style={{ position: 'relative', justifyContent:'center',top:'35px', fontSize: '12px'}}> <h1 style={{  fontSize: '22px'}}>{productos.modelo}</h1></Card.Title>
                      <Card.Text style={{ position: 'relative', justifyContent:'center',top:'35px'}}><h2>{productos.precio}</h2></Card.Text>
                      </Card.Body>
                  </Card>  
                </Col>
              </Row>
            </Container></div>
              :<h2>Cargando</h2>
            }
            <Contador stock={19} initial={0}/>
        </div>
    )
}
