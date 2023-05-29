const http = require("http");
//const character = require("./utils/data")
const getCharById = require("./controllers/getCharById")


const PORT = 3001;




http.createServer((req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(`Server raised on port ${PORT}`);
   
    if(req.url.includes("/rickandmorty/character")){
        
      let id = req.url.split('/').pop();
       getCharById(res, id);

       



    }
  
    
  }).listen(PORT, "localhost");
