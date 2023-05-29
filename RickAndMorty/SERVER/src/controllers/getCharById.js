const axios = require("axios");


let getId =  axios('https://rickandmortyapi.com/api/character/5').
        then((info)=> info.data).
         then((data) => data).then((info)=> info)
         //console.log(getId);

 function getCharById(res, id){

    
     axios(`https://rickandmortyapi.com/api/character/${id}`).
        then((info)=> info.data).
        then((data) => {
            let character ={
                id: id,
                name: data.name,
                species: data.species,
                gender: data.gender,
                origin: data.origin.name,
                status: data.status,
                image: data.image
            };
            
            res
            .writeHead(200, {"Content-type": "application/json"})
            .end(JSON.stringify(character))
            })
            .catch(error => res
                .writeHead(500,{"Content-type": "text/plain"})
                .end(error.message))
  
 };

module.exports = getCharById;

//Dentro de él deberás devolver una respuesta con status 500, un Content-Type igual a text/plain, y finalmente responder con la propiedad message del error.