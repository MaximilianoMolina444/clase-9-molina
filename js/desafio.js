
let total = 0;
let precio = 0;
let cantidad = 0;
function pedirNombre() {
    let nombre = prompt("ingresa tu nombre");
    while (nombre === "" || !isNaN(nombre)) {
        nombre = prompt("ingresa tu nombre");
    }
    let usuario = document.createElement(`h1`);
    usuario.innerHTML =`Usuario: ${nombre}`
    document.body.appendChild(usuario);
}

function elegirProducto() {
    let prenda = "";
    do {
        prenda = prompt("¿Que pack desea llevar?\n ingrese el numero correspondiente al producto\n (1)pantalones:\n (2)remeras\n (3)camisas:\n (4)camperas:\n ");
        switch (prenda.toLowerCase()) {
            case "1":
                precio = 5000;
                break;
            case "2":
                precio = 2500;
                break;
            case "3":
                precio = 3500;
                break;
            case "4":
                precio = 8000;
                break;
            default:
                prenda = "C"
                alert("No ingreso un producto valido");
                break;
        }
    } while (prenda == "")

}

function pedirCantidad() {
    cantidad = parseInt(prompt("ingrese la cantidad de packs que sea comprar"));
    while (isNaN(cantidad)) {
        cantidad = parseInt(prompt("ingrese la cantidad de packs que sea comprar"));
    }
    total += total + cantidad * precio;
}





// funcionalidad-----------------------------------------------------------------------------------
// pedirNombre();
// const arrayLista = [];
// arrayLista.push(pack1.nombre);
// arrayLista.push(pack2.nombre);
// arrayLista.push(pack3.nombre);
// arrayLista.push(pack4.nombre);
// console.log(arrayLista);

// for (let i = 0; i < arrayLista.length; i++) {
//     document.write(`Tenemos packs de ` + arrayLista[i] +`<br>`);
// }

// do {
//     elegirProducto();
//     pedirCantidad();
//     var respuesta = prompt("te gustaria agregar algun otro producto? ingresa: s para si o n para no");
//     respuesta = respuesta.toLowerCase()
// } while (respuesta == "s")

// alert("el precio total es: $" + total);
// alert("Gracias por su compra, en breve nos estaremos comunicando para la entrega")


// arrayLista.forEach((find)=>{
//     console.log(find)
// })


// const buscador = arrayLista.find(producto => producto == `remeras`)
// document.write(`Tenemos stock de: ` + buscador + `<br>`);

// const filtro = arrayLista.filter(elemento => elemento == `camperas`)
// document.write(`Si hay ${filtro} en el deposito`)


// funcionalidad-----------------------------------------------------------------------------------



const botonesaniadir = document.querySelectorAll(`.btn`);
botonesaniadir.forEach((event) => {
    event.addEventListener('click', () => console.log(`click`));
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
    const miCarrito = `
    <h1>Tu compra: ${itemNombre}</h1>
    <img src="${itemImg}" class="pequeña"></img>
    <h2>valor: ${itemPrecio}</h2>
    `;
    carritoDiv.innerHTML = miCarrito;
    contenedorCompras.append(carritoDiv);
}

