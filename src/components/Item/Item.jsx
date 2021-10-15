import React from 'react'


export default function Item(props) {
    return (
        <div classname="col col-xs-12 col-sm-12 col-md-4 col-lg-3">
           <h1>{props.modelo}</h1>
           <h1>{props.precio}</h1>
           <h1>{props.marca}</h1>
        </div>
    )
}
