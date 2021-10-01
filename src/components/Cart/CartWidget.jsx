import React from 'react'

export default function CartWidget() {
    return (
        <div>
            <nav class="navbar navbar-inverse bg-inverse fixed-top bg-faded" id="cart">
                <div class="row">
                    <div class="col">
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#cart"><img src="https://img.icons8.com/metro/25/000000/add-shopping-cart.png"/> (<span class="total-count"></span>)</button><button class="clear-cart btn btn-danger" width="30px">Vaciar Carrito</button></div>
                    <form id="formulario"></form>
                </div>
            </nav>   
        </div>     
    )
}
