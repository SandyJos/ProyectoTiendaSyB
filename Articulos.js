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

let apiml = "https://api.mercadolibre.com/sites/MLM/search?category=";
let idCategoria = "MLM189530";

let titArt = document.getElementById("tituloArticulo");
let imgArt = document.getElementById("imgArt");

async function getProductos (){
    let getApiml = apiml + idCategoria;
    let response = await fetch(getApiml);
    let datosApiml = await response.json();
    return datosApiml
}

async function getInfoProd(){
    let info = await getProductos();
    console.log(info)                   //Trae el contenido de la categoría (c/ lista de artículos)
    let articulos = info.results;       //Información de todos los artículos de la categoría (array)
    console.log(articulos)              //Muestra la información de todos artículo
    console.log(articulos[16])           //Muestra la información de un artículo
    
    showProducts(articulos);
}

getInfoProd();

const showProducts = (listArticulos) =>{
    titArt.textContent = (listArticulos[16].title)
    imgArt.setAttribute('src', listArticulos[16].thumbnail)
}