import { Router } from "express";
import {ProductManager} from '../ProductManager.js'
const cargaProducto = new ProductManager;
const router = Router();

    router.get('/products', (req, res)=>{
    const productos = cargaProducto.getProducts();
       let limit = parseInt(req.query.limit)
    const productosLimitados = productos.slice(0,limit);
    limit ? res.send(productosLimitados ) : res.send(productos)})
   
    router.get('/products/:pid', (req,res)=>{
       let id = parseInt(req.params.pid);
       const producto = cargaProducto.getProductsById(id);
       res.send(producto);
   
    })
    router.post('/Products', (req,res)=>{
      let title = req.body.title;
      let price = req.body.price;
      const status = true;
      let thumbnails = req.body.thumbnails;
      let description = req.body.description;
      let code = req.body.code;
      let stock = req.body.stock;
      let category = req.body.category;
      
      cargaProducto.addProduct(title,price,status,thumbnails,description,code,stock,category);
      res.send({estado:'ok' , mensaje: 'Producto agregado'});
    })

    router.post('/Products/:pid', (req , res)=>{
      let id = parseInt(req.params.pid);
      cargaProducto.updateProduct(id)
      res.send({estado:'ok', mensaje:'Producto modificado'})
    })
    router.delete('/Products/:pid',(req, res)=>{
      let id = parseInt(req.params.pid);
      cargaProducto.deleteProduct(id);
      res.send({estado:'ok', mensaje:'Producto eliminado'})
    })
   export default router; 