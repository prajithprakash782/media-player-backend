//import json server library in index.js file
const jsonServer = require('json-server')

//create json-server
const mediaplayerServer = jsonServer.create()

//create path to JSON file
const router = jsonServer.router('db.json')

//To convert json to js (Middleware)
 const middleware = jsonServer.defaults()

 //use middleware and router in server
 mediaplayerServer.use(middleware)
 mediaplayerServer.use(router)

 //setup port for running server
 const port = 5000 || process.env.PORT

 //to listen server for resolved request from client
 mediaplayerServer.listen(port,()=>{
    console.log(`mediaplayer started at ${port} and waiting for the request`);
 })
