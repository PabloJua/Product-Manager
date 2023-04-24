import { Router } from "express";
import {ProductManager} from '../ProductManager.js'
import { CartManager } from "../CartManager.js";
const cargaCart = new CartManager;
const cargaProducto = new ProductManager;
const routCart = Router();


routCart.post('/carts', (req,res)=>{
 cargaCart.createCart();
 res.send({estado:"ok", mensaje:"Cart creado con éxito"})
})
routCart.get('/carts/:cid', (req,res)=>{
 let cid = parseInt(req.params.cid);
 let productos = cargaCart.getCart(cid);
 res.send (productos);
})
routCart.post('/carts/:cid/product/:pid', (req, res)=>{
    let cid = parseInt(req.params.cid);
    let pid = parseInt(req.params.pid);
    let producto = cargaProducto.getProductsById(pid);
    cargaCart.postCart(cid,producto);
    res.send({mensaje:"Carrito cargado"});
});
export default routCart;