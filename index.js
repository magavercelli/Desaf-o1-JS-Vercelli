/*✓	Se creará una instancia de la clase “ProductManager”
✓	Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
✓	Se llamará al método “addProduct” con los campos:
-	title: “producto prueba”
-	description:”Este es un producto prueba”
-	price:200,
-	thumbnail:”Sin imagen”
-	code:”abc123”,
-	stock:25
✓	El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
✓	Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
✓	Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
✓	Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo */


class ProductManager {
    constructor() {
        this.products = [];
        this.id = 1;
    }

    getProducts() {
        return this.products;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log ('Todos los campos son obligatorios')
            return
        }

        if (this.products.some(product => product.code === code)) {
            console.log('El codigo ya existe');
            return
        }

        let product = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
            id: this.id
        };

        this.products.push(product);
        this.id++;

    }

    getProductById(idProduct) {
        const product = this.products.find(product => product.id === idProduct);
        if (product) {
            return product;
        } else {
            return 'Not found';
        }
    }
}

let manager = new ProductManager();

manager.addProduct('Producto Prueba', 'Este es un producto de prueba', 200, 'sin imagen', 'abc123', 25);

// test error
manager.addProduct('Producto 1', 'Descripción del Producto 1', 100, 'imagen1.jpg', 'abc123', 50);

console.log(manager.getProducts());
console.log(manager.getProductById(1));
