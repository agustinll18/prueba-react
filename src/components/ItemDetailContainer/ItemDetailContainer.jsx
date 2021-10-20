import React, {useState} from 'react'

export default function ItemDetailContainer  ()  {
    const [items, setItems] = useState();
    var item = 
                    /*[*/
                        [ 
                          " B550M-DS3H-rev-1x","Gigabyte",10000,
                        ];
                        /*{ modelo: " Rx-580",
                          marca: "Asrock",
                          precio: 10000,
                        },
                    
                        { modelo: "Ryzen 5 3600xt",
                          marca: "AMD",
                          precio: 20000,
                          }
                        ]*/
                    
                    
    const getItem = new Promise((resolve, reject) => {
        setTimeout(() =>resolve(item),2000)
    });
    getItem.then((resolve) =>setItems(resolve[2]));
    return (
        <div>
            <h1>La marca de su producto es :{item[1]}</h1>
            <p>modelo: {item[0]}</p>
            <p>Y su precio es de {item[2]}</p>
        </div>
    )
}
