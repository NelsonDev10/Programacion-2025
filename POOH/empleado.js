class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}, Salario: ${this.salario}`);
    }
}

class Gerente extends Empleado {
    constructor(nombre, salario, departamento) {
        super(nombre, salario);
        this.departamento = departamento;
    }
    gestionar() {
        console.log(`${this.nombre} está gestionando el departamento ${this.departamento}`);
    }
}

class Desarrollador extends Empleado {
    constructor(nombre, salario, lenguaje) {
        super(nombre, salario);
        this.lenguaje = lenguaje;
    }
    programar() {
        console.log(`${this.nombre} está programando en ${this.lenguaje}`);
    }
}

class Finanzas {
    constructor(impuestoSeguro, impuestoRenta) {
        this.impuestoSeguro = impuestoSeguro;
        this.impuestoRenta = impuestoRenta;
    }
}

class Contabilidad extends Finanzas {
    constructor(impuestoSeguro = 0.03, impuestoRenta = 0.075) {
        super(impuestoSeguro, impuestoRenta);
    }
    calcularSueldoNeto(empleado) {
        let seguro = empleado.salario * this.impuestoSeguro;
        let renta = empleado.salario * this.impuestoRenta;
        let sueldoNeto = empleado.salario - (seguro + renta);
        console.log(`Sueldo Neto de ${empleado.nombre}: ${sueldoNeto}`);
    }
}

let gerente = new Gerente("Ana", 5000, "Ventas");
let desarrollador = new Desarrollador("Carlos", 4000, "JavaScript");
let contabilidad = new Contabilidad();

gerente.mostrarInfo();
gerente.gestionar();
contabilidad.calcularSueldoNeto(gerente);

desarrollador.mostrarInfo();
desarrollador.programar();
contabilidad.calcularSueldoNeto(desarrollador);
