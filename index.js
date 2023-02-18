
class ProductManager {//defino clase

    constructor() {
        this.products = [];//defino array de productos
    }


    getProducts() {
        return this.products
    }
    
    addProduct(title, description, price, thumbnail, code, stock) {

        //creamos id que incrementa agregando productos
        const id = this.products.length === 0 ? 1 : this.products[this.products.length - 1].id + 1

        const product = {
            id: id,
            code: code,
            title,
            description,
            price,
            thumbnail,
            stock
        }

        if(this.products.length === 0){ // primero preguntamos si la lista esta vacia entonces : 

             // evaluamos si los campos vienen vacios
            if(Object.values(product).every(value => value !== null && value !== undefined && value !== '')){ 
               
                //si los campos estan completos entonces agregamos al array this.products
                this.products.push(product);

            }else{
                //si no lanzamos mensaje de error.
                console.log("Todos los campos son necesarios");

            } 

        }else{// si la lista ya tiene productos entonces : 

              // evaluamos si el codigo es el mismo en los demas productos
            const productCodeExists = this.products.some(p => p.code === product.code); 
          
            //si el codigo es el mismo entonces: 
            if (productCodeExists) {

                //lanzamos mensaje de error.
              console.log("El codigo tiene que ser diferente");

            } else {// si no

                //preguntamos si cada campo de este producto viene vacio
                if(Object.values(product).every(value => value !== null && value !== undefined && value !== '')){

                    //si viene completo lo agregamos al array
                    this.products.push(product);

                }else{//si no 
                    //lanzamos mensaje de error
                    console.log("todos los campos son necesarios");
                }

              
            }
        }
        
    }

    getProductFromId(id){
        //buscamos por id en el array de productos
        let product = this.products.find(p=> p.id == id)

        //si encuentra algun producto
        if(product){
            //retorna
            return product
        }else{//si no

            //lanza error
            console.log("Error id no encontrado")
        }

    }



}

let manager = new ProductManager();

manager.addProduct("title1","desc1", 23, "image", "codigo1",26);
manager.addProduct("title5","desc1", 23, "image", "codigo2",26);
manager.addProduct("title5","desc1", 23, "image", "codigo3",26);
/* console.log(manager.getProducts()) */
console.log(manager.getProductFromId(4));