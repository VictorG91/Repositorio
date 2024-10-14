export default class Carrito {

    #productos;
    constructor() {
        this.productos = new Map();
    }

    agregarProducto(producto, cantidad){
        this.productos.set(producto, cantidad);
    };

    actualizarCarrito(producto, cantidad){
        const sku = producto.sku;
        const fila = document.getElementById(`fila-${sku}`);
        if (cantidad === 0){
            eliminarProducto(sku); 
        }
        if(fila){
            fila.querySelector('.celda1').innerText = producto.nombre + " x " + cantidad;
            fila.querySelector('.celda2').innerText = cantidad*this.#productos.precio;
            this.productos.set(sku, producto);
        }
    };

    eliminarProducto(sku) {
        const fila = document.getElementById(`fila-${sku}`);
        if (fila) {
            this.productos.delete(sku);
            fila.remove();
        }
    }
    

    obtenerCarrito(producto, cantidad){
        producto = this.#productos;
        this.productos.get(producto, cantidad)
    }
    
}