
import express from 'express';
import products from './routes/products.js';
import carts from './routes/carts.js';
const app = express();
const puerto = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 app.use('/api', products);
 app.use('/api', carts);

/*app.get('/products', (req, res)=>{
 const productos = cargaProducto.getProducts();
    let limit = parseInt(req.query.limit)
 const productosLimitados = productos.slice(0,limit);
 limit ? res.send(productosLimitados ) : res.send(productos)})

 app.get('/products/:id', (req,res)=>{
    let id = parseInt(req.params.id);
    const producto = cargaProducto.getProductsById(id);
    res.send(producto);

 })*/
app.listen(puerto , ()=>console.log("servidor local Express"));