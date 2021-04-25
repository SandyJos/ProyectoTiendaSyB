 //fech se utiliza para llamar a la api 
        //fech es una promesa 
        //se le pasa como parametro el link de la api a buscar
        //fetch (´el link a buscar ${id}´) se pone el id para busacra cualquier articulo 


/*function ConsultarTendencia(){
    fetch ("https://api.mercadolibre.com/sites/MLM/categories")  //se le pasa como parametro el link de la api a buscar
.then(function(response){
    console.log(response)
     response.json()
     .then(function (tendencia){
         console.log(Tendencia)

     })

})

}

ConsultarTendencia();

function ConsultarTendencias(){
    let primeraId= Math.round(Math.round() * 10)
    let segundoId = Math.round(Math.round() * 10)

    ConsultarTendencias(primeraId,1)
    ConsultarTendencias(segundaId,2)

}*/
//                  https://api.mercadolibre.com/sites/MLM/categories   TODAS LAS CATEGORIAS
//                  https://api.mercadolibre.com/categories/MLM189530   INFORMACIÓN DE LA CATEGORÍA ESPECÍFICA
//                  /sites/MLM/search?category=MLM1144                  CONTENIDO DE LA CATEGORÍA ESPECÍFICA 
                    /* https://api.mercadolibre.com/items/MLM775866604/description
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