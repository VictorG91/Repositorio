export default class Carrito {

    constructor() {
        this.productos = new Map();
    }


    actualizarCarrito(sku, cantidad){
        if(this.productos.has(sku)){
            const producto = this.productos.get(sku);
            producto.cantidad = cantidad;
            this.productos.set(sku, cantidad);
        }
    }

    eliminarProducto(sku){
        if(this.productos.has(sku)){
            this.productos.delete(sku);
=======
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
>>>>>>> origin/main
        }
    };
    
<<<<<<< HEAD

    obtenerInfoProducto(sku) {
        if (this.productos.has(sku)) {
          const producto = this.productos.get(sku);
          return {
            sku: producto.SKU,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: producto.cantidad
          };
        }
        return null;
      }

    calcularTotal() {
        let total = 0;
        this.productos.forEach(producto => {
          total += producto.precio * producto.cantidad;
        });
        return total.toFixed(2);
      }

    obtenerCarrito() {
        const products = [];
        this.productos.forEach(producto => {
          if (producto.quantity > 0) {
            products.push({
                sku: producto.SKU,
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad: producto.cantidad
            });
          }
        });
    
        return {
          total: this.calcularTotal(),
          currency: "€",
          products
        };
      }
=======
>>>>>>> origin/main
}