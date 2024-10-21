export default class Carrito {

    constructor() {
        this.productos = new Map();
    }

    actualizarCarrito(sku, cantidad){
      if(this.productos.has(sku)){
        const producto = this.productos.get(sku);
        producto.cantidad = cantidad;
        this.productos.set(sku, cantidad);
      } else {
        this.productos.set(sku, cantidad);
      }
    }

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
        if (producto.cantidad > 0) {
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
        moneda: "€",
        products
      };
    }
    

}
