export default class Carrito {

    #productos;

    constructor() {
        this.#productos = new Map(); 
    }

    actualizarCarrito(producto, cantidad) {
        const sku = producto.sku;

        cantidad = Number(cantidad);

        if (cantidad > 0) {
            const nuevoProducto = {
                sku: producto.sku,
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad: cantidad
            };

            this.#productos.set(sku, nuevoProducto);

            } else {
                this.#productos.delete(sku);
            }
    }

    obtenerCarrito() {
        const total = this.calcularTotal();
        return {
            productos: this.#productos,
            total,
            moneda: "€"
        }
    }

    calcularTotal() {
        let total = 0;
        this.#productos.forEach(producto => {
            total += producto.precio * producto.cantidad;
        });
        return total.toFixed(2);
    }

}
