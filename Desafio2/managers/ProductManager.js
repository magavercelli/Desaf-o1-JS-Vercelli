import fs from 'fs';

export default class ProductManager {
    constructor(path){
        this.products = [];
        this.path = path
    }

    getProduct = async () => {

        try {
            if(fs.existsSync(this.path)){
                const data =await fs.promises.readFile(this.path, 'utf-8');
                const product =JSON.parse(data)
                return product
            }else {
                return [];
            }
            
        } catch (error) {
            console.log(error)
            
        }
    }

    addProduct = async (title, description, price, thumbnail, code, stock) => {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log ('Todos los campos son obligatorios')
                return
            }
        
        const product = await this.getProduct();
        if (this.product.some(product => product.code === code)){
            console.log('El codigo ya existe');
                return

        }

        if (product.length === 0){
            product.id = 1
        }else{
            product.id = product[product.length-1].id+1;
        }

        const newProduct = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        product.push(newProduct);
        await fs.promises.writeFile(this.path, JSON.stringify(product, null, '\t'))
        return product;
        
    }

    getProductById = async (idProduct) => {
        const products = await this.getProduct();
        const product = this.products.find(product => product.id === idProduct);
        if (product) {
            return product;
        } else {
            return 'Not found';
        }

    }

    updateProduct = async (id, updatedProduct) => {
        const products = await this.getProduct();
        const index = products.findIndex(product => product.id === id);

        if (index !== -1) {
            
            products[index] = { ...products[index], ...updatedProduct };

            
            await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));

            return products[index];
        } else {
            return 'Product not found';
        }
    }

    deleteProduct = async (idProduct) => {
        const products = await this.getProduct();
        const index = products.findIndex(product => product.id === idProduct);
    
        if (index !== -1) {
            
            const deletedProduct = products.splice(index, 1)[0];
    
         
            await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));
    
            return deletedProduct;
        } else {
            return 'Product not found';
        }
    }
}

