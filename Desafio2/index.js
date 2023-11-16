import ProductManager from "./managers/ProductManager.js";

const manager = new ProductManager('./files/productos.json');

const enviar = async () => {
    try {
        const products = await manager.getProduct();
        console.log(products);

        const nuevoProducto = {
            title: 'Producto 1',
            description: 'Descripcion1',
            price: 500,
            thumbnail: 'sin imagen',
            code: 'abc123',
            stock: 50
        };
        
        const addedProduct = await manager.addProduct(
            nuevoProducto.title,
            nuevoProducto.description,
            nuevoProducto.price,
            nuevoProducto.thumbnail,
            nuevoProducto.code,
            nuevoProducto.stock
        );
        console.log('Nuevo producto añadido:', addedProduct);

        
        const productId = 1; 
        const productById = await manager.getProductById(productId);
        console.log('Producto por ID:', productById);

        const updatedProductId = 1; 
        const updatedProduct = {
            title: 'Producto 2',
            description: 'descripcion2',
            price: 700,
            thumbnail: 'imagen2',
            code: 'def456',
            stock: 30
        };
        const updatedProductResult = await manager.updateProduct(updatedProductId, updatedProduct);
        console.log('Producto actualizado:', updatedProductResult);

 
        const deletedProductId = 2; 
        const deletedProduct = await manager.deleteProduct(deletedProductId);
        console.log('Producto eliminado:', deletedProduct);
    } catch (error) {
        console.error(error);
    }
    
}; 


enviar()