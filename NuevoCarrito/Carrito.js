export default class Carrito {


    constructor() {
        this.productos = new Map();
    }

    actualizarCarrito(producto, cantidad){
        const sku = producto.sku;
        const fila = document.getElementById(`fila-${sku}`);
        if (cantidad === 0){
            this.productos.delete(sku);
        }
        if(fila){
            this.productos.set(producto, cantidad);
            fila.querySelector('.celda1').innerText = producto.nombre + " x " + cantidad;
            fila.querySelector('.celda2').innerText = cantidad*this.productos.precio;
        }
    };
   

    obtenerCarrito(){
        this.productos.forEach(function (producto){

        })

        return{
            nombre: producto.nombre,
            cantidad: producto.cantidad
        }
    }
    
}