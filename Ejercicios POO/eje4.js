class producto {
    constructor(id, producto, codigo, fechaIngreso, precio) {
        this.id = id;
        this.producto= producto;
        this.codigo= codigo
        this.fechaIngreso=fechaIngreso
        this.precio= precio
    }
    Registro(){
        const PrecioMayor20 = this.precio + (this.precio * 0.20)
        const PrecioMenor20 = this.precio - (this.precio * 0.20)
        console.log(`El producto ${this.producto} con el codigo ${this.codigo} tiene un precio de ${this.precio} y precio de venta con un 20% de incremento ${PrecioMayor20} y precio de venta con un 20% de descuento ${PrecioMenor20}`);
        
    }
}

obj = new producto(21, "MACBOOK PRO", "PRO-890", "2023-03-01", 700)
obj.Registro();