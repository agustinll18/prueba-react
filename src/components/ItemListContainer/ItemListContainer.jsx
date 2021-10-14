import React from 'react'
import ItemList from '../ItemList/ItemList'


export default function ItemListContainer() { 
    return (
        <div>
             <ItemList stock={19} initial={0}/>
        </div>
    )
}
