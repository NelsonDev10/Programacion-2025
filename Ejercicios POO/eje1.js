class Ejercicio {
    constructor(nombre, apellido) {
        this.nombre=nombre
        this.apellido=apellido
    }
    saludo(edad){
        console.log(`Mi nombre es ${this.nombre} tengo ${edad}`);
        
    }
}

obj = new Ejercicio("Juan", "Carlos");
obj.saludo(28)