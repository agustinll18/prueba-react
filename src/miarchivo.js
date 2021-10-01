//CLASS DE PRODUCTOS
class Producto  {
    constructor(marca,modelo,precio){
        this.marca=marca;
        this.modelo=modelo;
        this.precio=precio;
    }
    
    comunicado(){
        console.log("El producto "+this.marca+" "+this.modelo+ " esta al precio de $ "+this.precio);
    }
    confirmacion(){prompt("Desea comprarlo?");}  
};
const producto_cpu=new Producto("AMD","Ryzen 5 3600xt",20000);
const producto_ram=new Producto("HP","DDR4 8GB 3000MHz V6 Series Blue",7500);
const producto_mother=new Producto("Gigabyte","B550",1000);

const producto_futuro1=new Producto("AMD","Ryzen 7 7900xt",60000);
const producto_futuro2=new Producto("HP","laptop 27 pulgadas",127500);
const producto_futuro3=new Producto("Corsair ","Refrigeracion liquida",10000);

const productos_descontinuos=[{marca: "Apple",  modelo: "Iphone 12", precio: 125000 },
{  marca: "Samsung",  modelo: "Galaxy S20", precio: 120000 },
{  marca: "Xiaomi",  modelo: "MI 9"  , precio: 85000},
{  marca: "Sony",  modelo: "PS5" , precio: 100000}];

//JSON Y STORAGE
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };


for (const producto of productos_descontinuos) {
    guardarLocal(producto.marca, JSON.stringify(producto));
}
//FORMULARIO
 
  let miFormulario = document.getElementById("formulario");
  miFormulario.addEventListener("submit", validarFormulario);

  function validarFormulario(e){

      e.preventDefault();

      let formulario = e.target

      console.log("EL NOMBRE DE SU PRODUCTO ES :"+JSON.stringify(miFormulario));  

      for (let i = 0; i < 1; i++) {
        "..."  + i + "<br>";
      }
     }
      
//POST
const URLGET   = "https://raw.githubusercontent.com/agustinll18/Agustin-LLados/main/post.json"
const infoPost =  { nombre: "Agustin", profesion: "Intento de Programador" }
$("body").prepend('<form id="formulario"><p class="user_input">Usuario: </p><input type="text"id="nombre"></input>,<button id="btn1">Enviar</button>');
$("#btn1").click(() => { 
    $.post(URLGET, infoPost ,(respuesta, estado) => {
        if(estado === "success"){
          console.log("EXITO")
            $("body").prepend(`<div style="width:300px;height:150px">
Guardado:${respuesta.nombre}
</div>`);
        }  
    });
});
fetch('https://raw.githubusercontent.com/agustinll18/Agustin-LLados/main/post.json')
  .then(response => response.json())
  .then(json => console.log(json))
    //jQuery del formulario

$(document).ready(function(){
  $("input").focus(function(){
    $(this).css("background-color", "yellow");
  });
  $("input").blur(function(){
    $(this).css("background-color", "green");
  });
});                                                                                                       

//ANUNCIOS

let anuncio="Estos son los productos que traeremos en un futuro..."
let anuncio_producto_1   = `Marca: ${producto_futuro1.marca} - Producto ${producto_futuro1.modelo} $ ${producto_futuro1.precio}`;
let anuncio_producto_2   = `Marca: ${producto_futuro2.marca} - Producto ${producto_futuro2.modelo} $ ${producto_futuro2.precio}`;
let anuncio_producto_3   = `Marca: ${producto_futuro3.marca} - Producto ${producto_futuro3.modelo} $ ${producto_futuro3.precio}`;

console.log(anuncio);

console.log(anuncio_producto_1);
console.log(anuncio_producto_2);
console.log(anuncio_producto_3);

//PARA LA COMPRA 
class Compra  {
    constructor(marca,modelo,precio){
        this.marca=marca;
        this.modelo=modelo;
        this.precio=precio;
    }
    preguntas(){
        prompt("Introduzca el nombre del producto que desea");
        parseInt(prompt("ingrese el numero del precio del producto que desea comprar"));
        Math.round(parseInt(prompt("ingrese el numero de cuotas a la cual prefiera pagar la compra")));
    };

    comunicado(){
        console.log("El producto "+this.marca+" "+this.modelo+ " esta al precio de $ "+this.precio);
    }
    confirmacion(){prompt("Desea comprarlo?");}  
};
//ShoppingCart
var shoppingCart = (function() {
  cart = [];
  
  // Constructor
  function Item(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }
  
  // Save cart
  function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }
  
    // Load cart
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  }
  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }
  var obj = {};
  
  // Add to cart
  obj.addItemToCart = function(name, price, count) {
    for(var item in cart) {
      if(cart[item].name === name) {
        cart[item].count ++;
        saveCart();
        return;
      }
    }
    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();
  }
  // Set count from item
  obj.setCountForItem = function(name, count) {
    for(var i in cart) {
      if (cart[i].name === name) {
        cart[i].count = count;
        break;
      }
    }
  };
  // Remove item from cart
  obj.removeItemFromCart = function(name) {
      for(var item in cart) {
        if(cart[item].name === name) {
          cart[item].count --;
          if(cart[item].count === 0) {
            cart.splice(item, 1);
          }
          break;
        }
    }
    saveCart();
  }

  // Remove all items from cart
  obj.removeItemFromCartAll = function(name) {
    for(var item in cart) {
      if(cart[item].name === name) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  }

  // Clear cart
  obj.clearCart = function() {
    cart = [];
    saveCart();
  }

  // Count cart 
  obj.totalCount = function() {
    var totalCount = 0;
    for(var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }

  // Total cart
  obj.totalCart = function() {
    var totalCart = 0;
    for(var item in cart) {
      totalCart += (cart[item].price * cart[item].count)*1.21;
    }
    return Number(totalCart.toFixed(2));
  }

  // List cart
  obj.listCart = function() {
    var cartCopy = [];
    for(i in cart) {
      item = cart[i];
      itemCopy = {};
      for(p in item) {
        itemCopy[p] = item[p];

      }
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy)
    }
    return cartCopy;
  }


  return obj;
})();


// Add item
$('.add-to-cart').click(function(event) {
  event.preventDefault();
  var name = $(this).data('name');
  var price = Number($(this).data('price'));
  shoppingCart.addItemToCart(name, price, 1);
  displayCart();
});

// Clear items
$('.clear-cart').click(function() {
  shoppingCart.clearCart();
  displayCart();
});


function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "";
  for(var i in cartArray) {
    output += "<tr>"
      + "<td>" + cartArray[i].name + "</td>" 
      + "<td>(" + cartArray[i].price + ")</td>"
      + "<td><div class='input-group'>"
      + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
      + " = " 
      + "<td>" + cartArray[i].total + "</td>" 
      +  "</tr>"
      + "<p>" + "I.V.A = 21%" + "</p>";
  }
  $('.show-cart').html(output);
  $('.total-cart').html(shoppingCart.totalCart());
  $('.total-count').html(shoppingCart.totalCount());
  console.log("El monto es de $ "+shoppingCart.totalCart());
  
}

// Delete item button

$('.show-cart').on("click", ".delete-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.removeItemFromCartAll(name);
  displayCart();
})


// -1
$('.show-cart').on("click", ".minus-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.removeItemFromCart(name);
  displayCart();
})
// +1
$('.show-cart').on("click", ".plus-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.addItemToCart(name);
  displayCart();
})

// Item count input
$('.show-cart').on("change", ".item-count", function(event) {
   var name = $(this).data('name');
   var count = Number($(this).val());
  shoppingCart.setCountForItem(name, count);
  displayCart();
});

//Order
function ordenar() {
  var pago= prompt("ingrese el numero de cuotas a la cual prefiera pagar la compra");
  let cupon =prompt ("Ingrese un cupon de descuento")
  if(cupon == "Coderjaus2022"){
    alert("El monto a pagar por cuota de su compra es de : $ " +((shoppingCart.totalCart()*0.8)/pago).toFixed(2)+ " . Con un total de "+pago+" cuotas" );}
    else{ 
    alert("El monto a pagar por cuota de su compra es de : $ " +(shoppingCart.totalCart()/pago).toFixed(2)+ " . Con un total de "+pago+" cuotas" );
  }
  displayCart();
}




//PRODUCTOS DISCONTINUOS

for (const producto of productos_descontinuos) {
    let contenedor = document.createElement("footer");
    contenedor.innerHTML = `<h3> ID: ${producto.marca}</h3>
                            <p>  Producto: ${producto.modelo}</p>
                            <b> $ ${producto.precio}</b>`;
    document.body.appendChild(contenedor);
}


//Funcion descuento 
function mOver(obj) {
    obj.innerHTML = "Codigo:Coderjaus2022"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Pon el mouse aqui para descubrir un asombroso descuento"
  }
//Hora de compra
document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}


//COSAS PARA ARREGLAR 

//Estos 2 amantes que no pudieron gozar del amor,inmersos en las mas profundas de las tristezas.
//Se tuvieron que despedir con una ultima mirada melancolica, bajo un cielo de lagrimas que presenciaba como otra pareja fallida pasaria otro invierno en soledad

//let entrada1=prompt("ingrese una de las siguientes OPCIONES: CPU,RAM,MOTHER O ESC para no realizar la compra");

/*
if (entrada1.toUpperCase()==="CPU"){
    alert("Le ofrecemos el siguiente producto : "+ producto_cpu)/*NO SE COMO PASAR EL OBJECT A STRING, ME ACUERDO QUE ERA ALGO DEL .TOSTRING PERO TENGO QUE INVESTIGARLO*//*
}else if (entrada1.toUpperCase()==="RAM") {
    alert("Le ofrecemos el siguiente producto : "+ producto_ram)
}else if (entrada1.toUpperCase()==="MOTHER") {
    alert("Le ofrecemos el siguiente producto : "+ producto_mother)
}else{
    alert("Por favor ,seleccione una de las opciones")
}*/
//En un futuro agregare mas productos asi el el codigo tenga mas utilidad

/*let producto=prompt("Ingrese el nombre del producto");
let precio=parseInt(prompt("ingrese el numero del precio del producto que desea comprar"));
let cuotas=Math.round(parseInt(prompt("ingrese el numero de cuotas a la cual prefiera pagar la compra")));
function compra(){
      alert("El producto "+producto+" con un precio de = $"+precio+ " con el precio a pagar por mes de $"+(precio / cuotas).toFixed(2))
}
compra();*/



//AVERIGUAR PARA DARLE UTILIDAD A ESTE CODIGO CON LO QUE ME DIJO DIEGO (ORDENAR PRODUCTOS DE MENOR A MAYOR PRECIO. )

/*const lista_datos = [];
do{
   let entrada_nombre = prompt("Ingresar nombre del producto deseado");
   lista_datos.push(entrada_nombre.toUpperCase());
   let entrada_marca = prompt("Ingresar marca del producto deseado");
   lista_datos.push(entrada_marca.toUpperCase());
   let entrada_precio = parseInt(prompt("Ingresar precio del producto deseado"));
   lista_datos.push(entrada_precio);
   let cuotas=Math.round(parseInt(prompt("ingrese el numero de cuotas a la cual prefiera pagar la compra")));
   console.log("Se ingresaron el total de "+lista_datos.length+ " valores mediante la herramienta prompt");

}while(lista_datos.length != 3)

const nuevaLista = lista_datos.concat(["Estos son los datos ingresados"]);
alert(nuevaLista.join("\n"));
console.log(lista_datos)*/
