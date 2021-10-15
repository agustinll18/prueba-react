import React from 'react'
import Item from '../Item/Item';


export default function ItemList({items}) {
        
    return (
        <div>
            {items.map(item => (
              <Item
              mode={item.modelo}
              precio={item.precio}/>
              ))}
        </div>
    )
}
/*import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';*/

/*const [ clicks, setClicks] = useState(0)
        const [contador, setContador] = useState(initial)
        const addClick = () =>{
            if(clicks< stock)
          setClicks(clicks+1)
        
        }
        const removeClick = () =>{
          if(clicks>0)
        setClicks(clicks-1)
        }
        const [item, setItem] = useState()
        const Item = [
                        [
                            {
                              modelo: " B550M-DS3H-rev-1x",
                              marca: "Gigabyte",
                              precio: 10000,
                               },
                            { modelo: " Rx-580",
                              marca: "Asrock",
                              precio: 10000,
                            },
                        
                            { modelo: "Ryzen 5 3600xt",
                              marca: "AMD",
                              precio: 20000,
                              }
                            ]
                        ];
                        
        const getItem = new Promise((resolve, reject) => {
            setTimeout(() =>resolve(Item),2000)
        });
        getItem.then((resolve) =>setItems(resolve));
        */
        

/*<Container>
              <Row>
                <Col sm>
                  <Card style={{ width: '18rem',height:'360px', justifyContent:'center' }}>
                    <Card.Img variant="top" src="https://acortar.link/gaYY0u" style={{ position: 'relative',width: '180px',height:'160px', justifyContent:'center',top:'35px' }}/>
                    <Card.Body>
                      <Card.Title style={{ position: 'relative', justifyContent:'center',top:'35px'}}>Motherboard Gigabyte B550M-DS3H-rev-1x</Card.Title>
                      <Card.Text style={{ position: 'relative', justifyContent:'center',top:'35px'}}>Precio: $10.000</Card.Text>
                      <div>
                        <Button  onClick={()=>addClick()} variant="primary" style={{ position: 'relative',width: '32px',height:'45px', justifyContent:'center',top:'35px' }}>+</Button>
                        <h1 style={{ position: 'relative',left: '100px',top: '-10px',}}>{clicks}</h1>
                        <Button onClick={()=>removeClick()} variant="danger" style={{ position: 'relative',width: '32px',height:'45px',left: '200px',top: '-66px',}}> - </Button>
                        <Button variant="primary" style={{ position: 'relative',width: '255px',height:'45px', justifyContent:'center',top:'-55px' }}>Comprar</Button>
                      </div>
                      
                    </Card.Body>
                  </Card>  
                </Col>
              </Row>
            </Container>*/