class producto {
    constructor(id, producto, codigo, fechaIngreso, precio) {
        this.id = id;
        this.producto= producto;
        this.codigo= codigo
        this.fechaIngreso=fechaIngreso
        this.precio= precio
    }
    Registro(otrosPrecio=1000,otro=750){
        console.log(`El producto ${this.producto} con el codigo ${this.codigo} tiene un precio de ${this.precio} y precio de venta ${otrosPrecio} y otro precio de:  ${otro}`);
        
    }
}

obj = new producto(21, "MACBOOK PRO", "PRO-890", "2023-03-01", 700)
obj.Registro();