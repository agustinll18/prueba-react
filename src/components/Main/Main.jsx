import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemList from '../ItemList/ItemList'

const Main = () => {

  return (   
        <div style={{ paddingTop:'15px' }}>
           <ItemListContainer/>
           <ItemList stock={19} initial={0}/>               
        </div>
    )
}


export default Main
