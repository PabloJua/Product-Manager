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
            let cart = carts.find(e=> e.id == id)
            if(cart) return cart.products; return ({mensaje: "El cart no existe"});
        }
        postCart = (cid , product)=>{
            const cartsJSON =  fs.readFileSync(this.path, 'utf-8');
            const carts = JSON.parse(cartsJSON);
            let productoOriginal = product;
            let indexCart = carts.findIndex(e=> e.id == cid);
            let arrayProducts= carts[indexCart].products;
            let buscarExistente = arrayProducts.find(e=>e.id == productoOriginal.id);
            if(buscarExistente){
                buscarExistente.quantity++;
            }
            else{
            carts[indexCart].products.push({id:product.id, quantity:1});}

            fs.writeFileSync(this.path, JSON.stringify(carts));
           
            
        }
}