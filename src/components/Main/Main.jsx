import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const Main = () => {

  return (   
        <div style={{ paddingTop:'15px' }}>
           <ItemListContainer stock={19}/>               
        </div>
    )
}


export default Main
