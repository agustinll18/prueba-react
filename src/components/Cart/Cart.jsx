import React from 'react'

export default function Cart() {
    return (
        <div>
            <div class="container">                                 
                <div class="row">
                    <div class="col-md-12 col-lg-12 col-xl-12">
                        <div class="card m-b-30">
                            <div class="card-header">
                                <h5 class="card-title">Carrito</h5>
                            </div>
                            <div class="card-body">
                                <div class="row justify-content-center">
                                    <div class="col-lg-10 col-xl-8">
                                        <div class="cart-container">
                                            <div class="cart-head">
                                                <div class="table-responsive">
                                                    <table class="table table-borderless">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">Accion</th>                                               
                                                                <th scope="col">Foto</th>
                                                                <th scope="col">Producto</th>
                                                                <th scope="col">Cantidad</th>
                                                                <th scope="col">Precio</th>
                                                                <th scope="col" class="text-right">Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>...</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="cart-body">
                                                <div class="row">
                                                    <div class="col-md-12 order-2 order-lg-1 col-lg-5 col-xl-6">
                                                        <div class="order-note">
                                                            <form>
                                                                <div class="form-group">
                                                                    <div class="input-group">
                                                                        <input type="search" class="form-control" placeholder="Cupon de descuento" aria-label="Search" aria-describedby="button-addonTags"/>
                                                                        <div class="input-group-append">
                                                                            <button class="input-group-text" type="submit" id="button-addonTags">Enviar</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group">
                                                                    <label for="specialNotes">Observaciones:</label>
                                                                    <textarea class="form-control" name="specialNotes" id="specialNotes" rows="3" placeholder="Escriba un mensaje"></textarea>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 order-1 order-lg-2 col-lg-7 col-xl-6">
                                                        <div class="order-total table-responsive ">
                                                            <table class="table table-borderless text-right">
                                                                <tbody>
                                                                    <tr>
                                                                        <td>SubTotal :</td>
                                                                        <td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Envio:</td>
                                                                        <td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>I.V.A(21%) :</td>
                                                                        
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="f-w-7 font-18"><h4>TOTAL :</h4></td>
                                                                        <td class="f-w-7 font-18"><h4></h4></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cart-footer text-right">
                                                <button type="button" class="btn btn-info my-10"><i class="ri-save-line mr-2"></i>Actualizar carrito</button>
                                                <a href="page-checkout.html" class="btn btn-success my-1">Realizar Compra<i class="ri-arrow-right-line ml-2"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
