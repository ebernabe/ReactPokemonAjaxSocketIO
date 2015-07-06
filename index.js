
import express from   "express";
import http from "http";
import engine from "socket.io";
const port = 3000;
const app  = express();
import dbapi from "./db-api"

//configurar la ruta de archivos estaticos
app.use("/",express.static(__dirname + "/public"));

app.get("/pokemons",(req,res)=>{
		dbapi.pokemons.find((pokemons)=>{
			res.json(pokemons);
		})
});


app.get("/",(req,res)=>{ res.sendFiles(__dirname+"/index.html")});

let server = http.createServer(app).listen(port,()=>{
	console.log("escuchando en el puerto ${port}");
});

const io = engine.listen(server);

io.on("connection",(socket)=>{
	socket.on("message",(msg)=>{
		io.emit("message",msg)
	})
})