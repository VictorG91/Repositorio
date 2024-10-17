export default class Carrito {

    constructor() {
        this.productos = new Map(); 
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

            this.productos.set(sku, nuevoProducto);

            } else {
                this.productos.delete(sku);
            }
    }

    obtenerCarrito() {
        const productos = [];
        this.productos.forEach((producto) => {
            productos.push({
                nombre: producto.nombre,
                sku: producto.sku,
                precio: producto.precio,
                cantidad: producto.cantidad
            });
        });

        const total = this.calcularTotal();
        return {
            productos,
            total,
            moneda: "€"
        };
    }

    calcularTotal() {
        let total = 0;
        this.productos.forEach(producto => {
            total += producto.precio * producto.cantidad;
        });
        return total.toFixed(2);
    }
}
