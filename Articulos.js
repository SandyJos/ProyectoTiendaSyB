//                  https://api.mercadolibre.com/sites/MLM/categories   TODAS LAS CATEGORIAS
//                  https://api.mercadolibre.com/categories/MLM189530   INFORMACIÓN DE LA CATEGORÍA ESPECÍFICA
//                  /sites/MLM/search?category=MLM1144                  CONTENIDO DE LA CATEGORÍA ESPECÍFICO
/*                  https://api.mercadolibre.com/items/MLM775866604/description
                    https://api.mercadolibre.com/sites/MLM/search?discount=5-100 */

let apiml = "https://api.mercadolibre.com/sites/MLM/search?category=";
let idCategoria = "MLM189530";


let titArt = document.getElementById("tituloArticulo1");
let imgArt = document.getElementById("imgArt1");
let precio = document.getElementById("precioArticulo1")

let maquinaria = document.getElementById("tema1");
let generadores = document.getElementById("tema2");
let insumos = document.getElementById("tema3");

let titArt1 = document.getElementById("tituloArticulo2");
let imgArt1 = document.getElementById("imgArt2");
let precio1 = document.getElementById("precioArticulo2")

let titArt2 = document.getElementById("tituloArticulo3");
let imgArt2 = document.getElementById("imgArt3");
let precio2 = document.getElementById("precioArticulo3")

async function getProductos (){
    let getApiml = apiml + idCategoria;
    let response = await fetch(getApiml);
    let datosApiml = await response.json();
    return datosApiml
}

async function getInfoProd(){
    let info = await getProductos();
    console.log(info)                   //Imprime el contenido de la categoría (c/ lista de artículos)
    let articulos = info.results;       //Información de todos los artículos de la categoría (array)
    console.log(articulos)              //Muestra la información de todos artículo
    console.log(articulos[16])          //Muestra la información de un artículo
    
    carrusel(info);
    showProducts(articulos);
}

getInfoProd();

const carrusel = (infoAgro) =>{
    let temaMaquinaria = infoAgro.available_filters[0].values[0].name;
    let temaGeneradores = infoAgro.available_filters[0].values[2].name;
    let temaInsumos = infoAgro.available_filters[0].values[3].name;
    maquinaria.textContent = (temaMaquinaria);
    generadores.textContent = (temaGeneradores);
    insumos.textContent = (temaInsumos);
}

const showProducts = (listArticulos) =>{
    for (let index = 0; index < 3; index++) {
        if(index === 0){
            let precioArt = listArticulos[index].installments.amount;
            let modenaArt = listArticulos[index].installments.currency_id;
            let precio1 = "$ " + precioArt + " " + modenaArt;

            console.log(precio1)

            titArt.textContent = (listArticulos[index].title)
            imgArt.setAttribute('src', listArticulos[index].thumbnail)
            precio.textContent = (precio1)
        }else if(index === 1){
            let precioArt1 = listArticulos[index].installments.amount;
            let modenaArt1 = listArticulos[index].installments.currency_id;
            let precio11 = "$ " + precioArt1 + " " + modenaArt1;

            console.log(precio11)

            titArt1.textContent = (listArticulos[index].title)
            imgArt1.setAttribute('src', listArticulos[index].thumbnail)
            precio1.textContent = (precio11)
        }else if(index === 2){
            let precioArt2 = listArticulos[index].installments.amount;
            let modenaArt2 = listArticulos[index].installments.currency_id;
            let precio111 = "$ " + precioArt2 + " " + modenaArt2;

            console.log(precio111)

            titArt2.textContent = (listArticulos[index].title)
            imgArt2.setAttribute('src', listArticulos[index].thumbnail)
            precio2.textContent = (precio111)
        }
        
    }
    
}

// CARRITO

/* class CarritoMl {
    contructor(obtenerProducto, quitarProducto){
        this.obtenerProducto = obtenerProducto;
        this.quitarProducto = quitarProducto;
    }

    informarListaProductos(mensaje){
        console.log(mensaje);
    };

    obtenerProducto(){
        this.obtenerProducto = this.obtenerProducto + 1;
        this.informarListaProductos('Ya guardé tu producto');
    }

    quitarProducto(){
        this.quitarProducto = this.quitarProducto - 1;
        this.informarListaProductos('Ya quité tu producto');
    }
    
}

let Carrito = new CarritoMl();

Carrito.obtenerProducto();
Carrito.quitarProducto(); */

 

/* class FabricaBicicletas {
    constructor (armado, pintado, materiPrima, pintura){
        this.armado = armado || false;
        this.pintado = pintado || false;
        this.materiPrima = materiPrima;
        this.pintura = pintura;
    }

    informar (mensaje) {
        console.log(mensaje);
    };
    armar () {
        this.materiPrima = this.materiPrima - 1;
        this.informar('La Bicicleta fue ensamblada correctamente');
        this.armado = true;
    };
    pintar () {
        if (this.armado){
            this.pintura = this.pintura - 1;
            this.informar('La Bicicleta fue pintada correctamente');
            this.pintado = true;
        }else {
            this.informar('Para pintar una Bicicleta primero debe armarla');
        }
        this.finalizado();
    };
    finalizado () {
        if (this.armado & this.pintado){
            this.informar('La Bicicleta quedo terminada correctamente')
	    this.pintado = false
            this.armado = false
        }else {
            this.informar('Alguno de los pasos requeridos no se finalizó')
        }
    }
}

let Fabrica = new FabricaBicicletas (false, false, 10, 20)

Fabrica.armar();
Fabrica.pintar(); */

// CARRITO

class CarritoMl {

    contructor(obtenerProducto, quitarProducto){
        this.obtenerProducto = obtenerProducto;
        this.quitarProducto = quitarProducto;
    }

    informarListaProductos(mensaje){
        console.log(mensaje);
    };

    obtenerProducto(){
        this.obtenerProducto = this.obtenerProducto + 1;
        this.informarListaProductos('Ya guardé tu producto');
    }

    quitarProducto(){
        this.quitarProducto = this.quitarProducto - 1;
        this.informarListaProductos('Ya quité tu producto');
    }
    
}

let Carrito = new CarritoMl();

Carrito.obtenerProducto();
Carrito.quitarProducto();