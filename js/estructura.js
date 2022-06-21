class prendas {
    constructor(pack, nombre, talle, color, precio) {
        this.pack = pack;
        this.nombre = nombre;
        this.talle = talle;
        this.color = color;
        this.precio = precio;
    }
    mostrarProducto() {
        let contenedorImagenes = document.createElement(`div`);
        contenedorImagenes.className = `products`
        contenedorImagenes.innerHTML = `
        <h4 class="nombre">${this.pack}<h4/></br>
        <img src="img/caja.jpg" class ="imagen"></img>
        <p>Contiene:</p>
        <p>Producto: ${this.nombre}</br> Talles: ${this.talle}</br> Colores: ${this.color}</br></p>
        <h4 class = "precio" >Precio: $${this.precio}</h4> 
        <button class= "btn" >Lo Quiero</button>
        `;
        document.body.appendChild(contenedorImagenes);
    }
    alerta() {
        alert(`Pack de ${this.nombre}\n incluye\n 5 ${this.nombre}\n Talles: ${this.talle}\n Colores: ${this.color}\n Su precio es de: $${this.precio} `)
    }
}

const pack1 = new prendas(`pack1`, `remeras`, `S-XL`, `rojo-negro-blanco`, 2500);
const pack2 = new prendas(`pack2`, `camisas`, `S-XL`, `diversas estampas`, 3500);
const pack3 = new prendas(`pack3`, `pantalones`, `40-58`, `azul-negro-gris`, 5000);
const pack4 = new prendas(`pack4`, `camperas`, `S-XXL`, `consultar motivos`, 8000);

function pedirNombre() {
    let nombre = prompt("ingresa tu nombre");
    while (nombre === "" || !isNaN(nombre)) {
        nombre = prompt("ingresa tu nombre");
    }
    let usuario = document.createElement(`h1`);
    usuario.innerHTML =`Usuario: ${nombre}`
    document.body.appendChild(usuario);
}

// pedirNombre();

let titulo = document.createElement(`h1`);
titulo.innerHTML = `<h1>Bienvenido a nuestra tienda</h1>`;
titulo.className = `titulos`
document.body.appendChild(titulo);


let subtitulo = document.createElement(`h2`);
subtitulo.innerHTML = `<h2>Nuestros packs son:</h2>`;
subtitulo.className = `subtitulos`
document.body.appendChild(subtitulo);



pack1.mostrarProducto();
pack2.mostrarProducto();
pack3.mostrarProducto();
pack4.mostrarProducto();


let compras =  document.createElement('h2');
compras.innerHTML = `Tu Carrito:`
document.body.appendChild(compras);


let mostrarCarrito = document.createElement('div');
mostrarCarrito.className = `contenedorCompras`;
document.body.appendChild(mostrarCarrito);




function confirmarCompra(event){
    teclaEnter = event.keycode;
    let opcion = confirm("Pulsa enter para confirmar el pedido");
    if (opcion == true || teclaEnter == 13){
        alert("En breve nos pondremos en contacto para coordinar la entrega");
    }else{
        alert ("pedido cancelado");
    }
  
}


let finalizarCompra = document.createElement(`button`)
finalizarCompra.innerHTML = "Pagar"
finalizarCompra.id = "confirmarCompra"
document.body.appendChild(finalizarCompra)
finalizarCompra.addEventListener("click", confirmarCompra);


const botonesaniadir = document.querySelectorAll(`.btn`);
botonesaniadir.forEach((event) => {
    event.addEventListener('click', aniadirItems);
});


const contenedorCompras = document.querySelector('.contenedorCompras');


function aniadirItems(evento){
    const buttom = evento.target;
    const item = buttom.closest(`.products`);
    const itemPrecio = item.querySelector(`.precio`).textContent;
    const itemImg = item.querySelector(`.imagen`).src;
    const itemNombre = item.querySelector(`.nombre`).textContent;
    mostrarEnCarrito(itemNombre, itemPrecio, itemImg);
}

function mostrarEnCarrito(itemNombre, itemPrecio, itemImg){
    const carritoDiv = document.createElement('div');
    carritoDiv.className = 'compra'
    const miCarrito = `
    <h3>Tu compra: ${itemNombre}</h3></br>
    <img src="${itemImg}" class="pequeña"></img></br>
    <h3>valor: ${itemPrecio}</h3></br>
    `;
    carritoDiv.innerHTML = miCarrito;
    contenedorCompras.append(carritoDiv);
}

