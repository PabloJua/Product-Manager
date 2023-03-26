class ProductManager {
   static autoid = 0;

    constructor(){
        this.products=[];        
    }
    addProduct(title,price,thumbnail,code,stock){
        ProductManager.autoid++;
        let campo = true;
        let codeControl = true;
        const newProduct ={
            title: title,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
            id: ProductManager.autoid
        }
        newProduct.title == "" ? campo = false : "";
        newProduct.price == "" ? campo = false : "";
        newProduct.thumbnail == "" ? campo = false : "";
        newProduct.code == "" ? campo = false : "";
        newProduct.stock == "" ? campo = false : "";
        this.products.find(e=> e.code === code) ? codeControl = false : "";
        campo && codeControl? this.products.push(newProduct) : console.log("Campos incompletos y/o código ingresado ya existe en el listado");
    
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
   
const producto = new ProductManager();
producto.addProduct("anzuelo",50,"sin imagen","a14b", 100);
producto.addProduct("tanza", 100, "sin imagen", "b25c", 100);
producto.addProduct("plomada", 150, "sin imagen", "c36d", 100);
producto.getProducts();
producto.getProductsById(2);