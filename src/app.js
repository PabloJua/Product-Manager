
const express = require ('express');
const {ProductManager} = require('./ProductManager')

const app = express();
const puerto = 8080;
const cargaProducto = new ProductManager;

app.use(express.urlencoded({ extended: true }));
 
app.get('/products', (req, res)=>{
 const productos = cargaProducto.getProducts();
    let limit = parseInt(req.query.limit)
 const productosLimitados = productos.slice(0,limit);
 limit ? res.send(productosLimitados ) : res.send(productos)})

 app.get('/products/:id', (req,res)=>{
    let id = parseInt(req.params.id);
    const producto = cargaProducto.getProductsById(id);
    res.send(producto);

 })
app.listen(puerto , ()=>console.log("servidor local Express"));