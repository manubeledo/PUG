const express = require('express');
const app = express();
const handlebars = require("express-handlebars");
const cors = require('cors')
app.engine('pug', require('pug').__express)
const path = require("path")
const PORT = 8080;
const {productos} = require('./productos')

app.use("/", express.static(path.join(__dirname,"public")));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.set("view engine", "pug");
app.set("views", "./views/layouts");

app.post("/productos", (req, res, next)=>{
    productos.push(req.body);
    res.redirect('/')
})

app.get("/productos", (req, res, next)=>{
    console.log(productos);
    res.render('index', {products: productos, title:"Productos en PUG"});
})

const server = app.listen(PORT, () => {
    console.log(`Servidor funcionando en la URL http://localhost:${PORT}`);
})














