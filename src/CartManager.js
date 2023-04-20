import fs from 'fs';

export class CartManager{
        constructor(){
            this.carts = [];
            this.path = "../carrito.JSON"
        }

        createCart = () => {
            if(fs.existsSync(this.path)){
                const cartsJSON =  fs.readFileSync(this.path, 'utf-8');
                let carts = JSON.parse(cartsJSON);                
                let products ={ id: carts.length + 1, products:[] };
                carts.push(products)
                fs.writeFileSync(this.path, JSON.stringify(carts));
                console.log("Cart agregado");
        } else {
            let products ={ id: this.carts.length + 1, products:[] };
            this.carts.push(products)
            fs.writeFileSync(this.path, JSON.stringify(this.carts));
            console.log("Cart creado");
        }
        }
        getCart = (id)=>{
            const cartsJSON =  fs.readFileSync(this.path, 'utf-8');
            const carts = JSON.parse(cartsJSON);
            let cart = carts.find(e=> e.autoID == id)
            if(cart) return cart.products; return ({mensaje: "El cart no existe"});
        }
        postCart = (cid , pid, product)=>{
            const cartsJSON =  fs.readFileSync(this.path, 'utf-8');
            const carts = JSON.parse(cartsJSON);
            let productosEnCart = carts[cid];
            let products = productosEnCart.products;
            let verificador = products.find(e => e.id == pid );
            if(verificador){
               let autoQuantity = {quantity: verificador.quantity + 1}
               let producto = Object.assign(verificador , autoQuantity);             
            fs.writeFileSync(this.path, JSON.stringify(carts));
            }
            else{
            let producto = {id:product.id, quantity: 1};
            products.push(producto);
            fs.writeFileSync(this.path, JSON.stringify(carts));
            }
            
        }
}