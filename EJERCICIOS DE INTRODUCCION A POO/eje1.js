class Persona {
    constructor(nombre, peso, altura) {
        this.nombre = nombre;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        let imc = this.peso / (this.altura * this.altura);
        return imc.toFixed(2);
    }

    mostrarIMC() {
        console.log(`${this.nombre}, tu IMC es: ${this.calcularIMC()}`);
    }
}
const persona1 = new Persona("Nelson", 75, 1.78);
persona1.mostrarIMC();

