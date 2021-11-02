import React, {useState} from 'react'
import ItemList from '../ItemList/ItemList';


export default function ItemListContainer() {
    const [items, setItems] = useState();
    var productos = [
                        {
                          modelo: " B550M-DS3H-rev-1x",
                          marca: "Gigabyte",
                          precio: "$10.000",
                          id: 1
                           },
                        { modelo: " Rx-580",
                          marca: "Asrock",
                          precio: 10000,
                          id: 2
                        },
                    
                        { modelo: "Ryzen 5 3600xt",
                          marca: "AMD",
                          precio: 20000,
                          id: 3
                          }
                        ]
                    ;
                    
    const getItem = new Promise((resolve, reject) => {
        setTimeout(() =>resolve(items),2000)
    });
    getItem.then((resolve) =>setItems(resolve));
    

    return (
        <div>
             <ItemList items={productos}/>
        </div>
    )
}
