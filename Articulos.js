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
         console.log(Tendencia)s

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
//console.log()   https://api.mercadolibre.com/categories/MLM189530
//                  /sites/MLA/search?category=MLM1144

let getApiml = "https://api.mercadolibre.com/sites/MLM/search?category=MLM189530";

async function getProductos (){
    let response = await fetch(getApiml);
    let datos = await response.json();
    return datos
}

async function getInfoProd(){
    let info = await getProductos();
    console.log(info)
}

getInfoProd();