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
     getProducts = async()=>{
        const productsJSON = await fs.promises.readFile(this.path, 'utf-8');
        const products = JSON.parse(productsJSON);
        products.forEach(element => { console.log(element)
        });
    }
     getProductsById = async(id)=>{
        const productsJSON = await fs.promises.readFile(this.path, 'utf-8');
        const products = JSON.parse(productsJSON);
        let product = products.find(e=> e.id == id)
        product ? console.log(product) : console.log("El producto no existe");}
    updateProduct(){

    }
    deleteProduct(){

    }

    }
   
const producto = new ProductManager();

producto.addProduct("anzuelo",50,"sin imagen","","a14b", 100);
producto.addProduct("tanza", 100, "sin imagen","", "b25c", 100);
producto.addProduct("plomada", 150, "sin imagen","", "c36d", 100);
producto.getProductsById(2);
producto.getProducts();