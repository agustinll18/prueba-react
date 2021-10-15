import React, {useState} from 'react'
import ItemList from '../ItemList/ItemList'


export default function ItemListContainer() {
   /* const [ clicks, setClicks] = useState(0)
    const [contador, setContador] = useState(initial)
    const addClick = () =>{
        if(clicks< stock)
      setClicks(clicks+1)
    
    }
    const removeClick = () =>{
      if(clicks>0)
    setClicks(clicks-1)
    }*/
    const [items, setItems] = useState();
    const item = [
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
        setTimeout(() =>resolve(item),2000)
    });
    getItem.then((resolve) =>setItems(resolve));
    
    
    return (
        <div>
             <ItemList Item={items} stock={19} initial={0}/>
        </div>
    )
}
