const express = require('express')
const bodyParser = require('body-parser');
const app = express();


app.listen(3000, ()=>{
  console.log("Servidor corriendo en 3000")
})

app.use(express.static(__dirname))

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res)=>{
  res.sendFile(__dirname + "/index.html")
})

app.post("/", (req,res)=>{
  const suma = parseInt(req.body.num1)+ parseInt(req.body.num2);
  res.send("<html>"+ req.body.num1 + " + "+ req.body.num2 + " = "+ suma + "<br><a href= 'http://localhost:3000'>Volver</html>")
})