const fs = require('fs');

class ProductManager {
   static autoid = 0; 

    constructor(){
        this.products=[];
        this.path = "./products.JSON";        
    }
   addProduct = (title,price,thumbnail,description,code,stock)=>{
        ProductManager.autoid++;
        const newProduct ={
            title: title,
            price: price,
            thumbnail: thumbnail,
            description: description, 
            code: code,
            stock: stock,
            id: ProductManager.autoid
        }        
        const controlManager = this.products.some(e=> e.code === code);
        controlManager ? console.log("El producto ya existe") :(title || description || price || thumbnail || code || stock) ?this.products.push(newProduct):console.log("Campos incompletos");
         fs.writeFileSync(this.path, JSON.stringify(this.products));
        console.log("Producto cargado a la base");
    }
     getProducts = ()=>{
        const productsJSON =  fs.readFileSync(this.path, 'utf-8');
        let products = JSON.parse(productsJSON);
        products.lenght == 0 ? console.log("No hay productos") :
        products.forEach(element => { console.log(element)
        });
    }
     getProductsById = (id)=>{
        const productsJSON =  fs.readFileSync(this.path, 'utf-8');
        const products = JSON.parse(productsJSON);
        let product = products.find(e=> e.id == id)
        product ? console.log(product) : console.log("El producto no existe");
    }
    
     updateProduct(id,title,price,thumbnail,description,code,stock){
        const productsJSON =  fs.readFileSync(this.path, 'utf-8');
        const products = JSON.parse(productsJSON);
        let productID = products.findIndex(e=> e.id == id);
        productID == -1 ? console.log("El ID ingresado no existe") :(title || description || price || thumbnail || code || stock) ? update = ()=>{
        products[productID].title = title;
        products[productID].price= price;
        products[productID].thumbnail = thumbnail;
        products[productID].description= description;
        products[productID].code = code;
        products[productID].stock = stock;} : console.log ("Campos incompletos");
        fs.writeFileSync(this.path, JSON.stringify(products), (error)=>{
            if (error) return console.log ("Error al modificar producto")
        });
    }
    deleteProduct(id){
        const productsJSON =  fs.readFileSync(this.path, 'utf-8');
        const products = JSON.parse(productsJSON);
        let productID = products.findIndex(e=> e.id == id);
        let productRemoved = products.splice(productID , 1);
        console.log("Producto: "+ productRemoved[0].id + " eliminado")
        fs.writeFileSync(this.path, JSON.stringify(products), (error)=>{
            if (error) return console.log ("Error al modificar producto")
        });
    }

    }
   
const producto = new ProductManager();

producto.addProduct("anzuelo",50,"sin imagen","","a14b", 100);
producto.addProduct("tanza", 100, "sin imagen","", "b25c", 100);
producto.addProduct("plomada", 150, "sin imagen","", "c36d", 100);
producto.addProduct("boya", 200, "sin imagen","", "p345", 100);
producto.addProduct("mosqueton", 145, "sin imagen","", "p579", 100);
producto.getProductsById(2);
producto.getProducts();
 //producto.updateProduct(4,"boya", 200, "sin imagen","", "p345", 300); //ingresar id,d,title,price,thumbnail,description,code,stock
 producto.deleteProduct(3); // ingresar id