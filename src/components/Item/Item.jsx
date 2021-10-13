import React from 'react'

export default function Item() {
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
getItem.then((resolve) =>console.log(resolve));
    return (
        <div classname="col col-xs-12 col-sm-12 col-md-4 col-lg-3">
            
        </div>
    )
}
