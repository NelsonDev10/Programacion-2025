class Inventario {
    constructor(producto, precio, cantidad) {
        this.producto = producto;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    get producto() {
        return this._producto;
    }

    set producto(valor) {
        if (!valor || typeof valor !== 'string') {
            throw new Error("El nombre del producto debe ser una cadena válida.");
        }
        this._producto = valor;
    }

    get precio() {
        return this._precio;
    }

    set precio(valor) {
        if (valor < 0) {
            throw new Error("El precio no puede ser negativo.");
        }
        this._precio = valor;
    }

    get cantidad() {
        return this._cantidad;
    }

    set cantidad(valor) {
        if (valor < 0) {
            throw new Error("La cantidad no puede ser negativa.");
        }
        this._cantidad = valor;
    }

    agregarStock(cantidad) {
        if (cantidad <= 0) {
            throw new Error("La cantidad a agregar debe ser mayor que 0.");
        }
        this._cantidad += cantidad;
    }

    comprar(cantidad) {
        if (cantidad <= 0) {
            throw new Error("La cantidad a comprar debe ser mayor que 0.");
        }
        if (cantidad > this._cantidad) {
            throw new Error("No hay suficiente stock disponible.");
        }
        this._cantidad -= cantidad;
    }
}

try {
    const producto1 = new Inventario("Laptop", 1500, 10);
    console.log(`Stock inicial: ${producto1.cantidad}`);
    producto1.agregarStock(5);
    console.log(`Stock después de agregar: ${producto1.cantidad}`);
    producto1.comprar(3);
    console.log(`Stock después de compra: ${producto1.cantidad}`);
} catch (error) {
    console.error(error.message);
}
