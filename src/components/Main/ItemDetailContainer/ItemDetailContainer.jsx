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
        pic:"https://acortar.link/TLsfsM"
      },
  
      { modelo: "Ryzen 5 3600xt",
        marca: "AMD",
        precio: "20.000",
        id: 3,
        pic:"https://acortar.link/xpjXYm"
        },
      { modelo:"M.2 2280 240gb Western Digital Green",
        marca:"Western Digital Green",
        precio: "$5.000",
        id: 4,
        pic:"https://http2.mlstatic.com/D_NQ_NP_704704-MLA40381713328_012020-O.webp"
      }  
      ];        
                    
    const getItem = new Promise((resolve, reject) => {
        setTimeout(() =>resolve(productos),1000)
    });
    getItem.then((resolve) =>setItems(resolve[id-1]));
    return (
        <div>
            {(productos-1)?
              <div><h1>La marca de su producto es :{productos.precio}</h1>
              <Container>
              <Row>
                <Col sm>
                <div/>
                
                  <Card style={{ width: '18rem',height:'360px', justifyContent:'center' }}>
                    <Card.Img variant="top"style={{ position: 'relative',width: '180px',height:'160px', justifyContent:'center',top:'35px' }}/><img src={productos.pic}/>
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
