export default class Carrito {


    constructor() {
        this.productos = new Map();
    }

    actualizarCarrito(producto, cantidad){
        const sku = producto.sku;
        if (cantidad === 0){
            this.productos.delete(sku);
        } else {
            this.productos.set(producto, cantidad);
        }
    };
   

    obtenerCarrito(){
        this.productos.forEach(function (producto){
            const precioTotal = producto.precio*producto.cantidad;
            this.productos.get(producto.nombre, producto.cantidad, precioTotal)
        })

        return{
            nombre: producto.nombre,
            cantidad: producto.cantidad,
            precioTotal: producto.precio*producto.cantidad
        }
    }
    
}