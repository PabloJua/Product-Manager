import fs from 'fs';

export class ProductManager {
    

    constructor(){
        this.products=[];
        this.path = "../products.JSON";        
    }
   addProduct = (title,price,status,thumbnails,description,code,stock,category)=>{
        const newProduct ={
            title: title,
            price: price,
            status : status, 
            thumbnail: thumbnails,
            description: description, 
            code: code,
            stock: stock,
            category: category,         
        } 
        if(fs.existsSync(this.path)){
            const productsJSON =  fs.readFileSync(this.path, 'utf-8');
            let products = JSON.parse(productsJSON); 
            let autoID = products.length + 1;
            const controlManager = products.some(e=> e.code === code);
        controlManager ? console.log("El producto ya existe") :(title || description || price || thumbnails || code || stock || category ) ? products.push(newProduct,{autoID}):console.log("Campos incompletos");
         fs.writeFileSync(this.path, JSON.stringify(products));
        console.log("Producto cargado a la base");
        } else  
        {
        let autoID = products.length + 1;
        const controlManager = this.products.some(e=> e.code === code);
        controlManager ? console.log("El producto ya existe") :(title || description || price || thumbnails || code || stock || category ) ?this.products.push(newProduct,{autoID}):console.log("Campos incompletos");
         fs.writeFileSync(this.path, JSON.stringify(this.products));
        console.log("Producto cargado a la base");}
    }
     getProducts = ()=>{
        const productsJSON =  fs.readFileSync(this.path, 'utf-8');
        let products = JSON.parse(productsJSON); 
         return products
        ;
    }
     getProductsById = (id)=>{
        const productsJSON =  fs.readFileSync(this.path, 'utf-8');
        const products = JSON.parse(productsJSON);
        let product = products.find(e=> e.id == id)
        if(product) return product; return console.log("El producto no existe");
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

//const producto = new ProductManager();

//producto.addProduct("anzuelo",50,"sin imagen","","a14b", 100);
//producto.addProduct("tanza", 100, "sin imagen","", "b25c", 100);
//producto.addProduct("plomada", 150, "sin imagen","", "c36d", 100);
//producto.addProduct("boya", 200, "sin imagen","", "p345", 100);
//producto.addProduct("mosqueton", 145, "sin imagen","", "p579", 100);
//producto.getProductsById(2);
//producto.getProducts();
 //producto.updateProduct(4,"boya", 200, "sin imagen","", "p345", 300); //ingresar id,d,title,price,thumbnail,description,code,stock
 //producto.deleteProduct(3); // ingresar id