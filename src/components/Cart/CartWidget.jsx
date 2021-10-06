import React from 'react'

const CartWidget = ({clicks}) => {
    return (
        <div>
            <nav class="navbar navbar-inverse bg-inverse fixed-top bg-faded" id="cart">
                <div class="row">
                    <div class="col">
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#cart">
                            <img src="https://img.icons8.com/metro/25/000000/add-shopping-cart.png"/>
                            <h1>{clicks}</h1></button>
                        <button class="clear-cart btn btn-danger" width="300px">Vaciar Carrito</button>
                    </div>
                </div>
            </nav> 
        </div>
    )
}

export default CartWidget
