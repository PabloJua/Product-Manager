class ProductManager {
   static autoid = 0;

    constructor(){
        this.products=[];        
    }
    addProduct(title,price,thumbnail,code,stock){
        ProductManager.autoid++;
        const newProduct ={
            title: title,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
            id: ProductManager.autoid
        }
        this.products.push(newProduct);
    }
    getProducts(){
        this.products.forEach(product=>

            console.log("Nombre: "+ product.title + "\nPrecio: "+product.price+"\nImagen: "+product.thumbnail+"\nCode: "+product.code+"\nID: "+product.id)
        )}
    getProductsById(id){
        let product = this.products.find(e=> e.id == id)
        product ? console.log("Nombre: "+ product.title + "\nPrecio: "+product.price+"\nImagen: "+product.thumbnail+"\nCode: "+product.code+"\nID: "+product.id) : console.log("Not found")
    }
    
    }
   
let producto = new ProductManager();
producto.addProduct("anzuelo",50,"sin imagen","a14b", 100);
producto.getProducts();
producto.getProductsById(1);