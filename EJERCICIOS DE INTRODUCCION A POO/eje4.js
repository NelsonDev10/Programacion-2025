class SancionEstudiantil {
    constructor(nombre, infraccion) {
        this.nombre = nombre;
        this.infraccion = infraccion;
        this.multa = this.calcularMulta();
    }

    calcularMulta() {
        const multas = {
            "Llegada tardía": 1,
            "Caminar por los pasillos en horas de clase": 3,
            "No andar vestimenta apropiada": 5,
            "No hacer uso adecuado de las instalaciones": 10
        };
        return multas[this.infraccion] || 0;
    }

    mostrarInfraccion() {
        console.log("Estudiante: " + this.nombre);
        console.log("Infracción: " + this.infraccion);
        console.log("Total a pagar: $" + this.multa);
    }
}

const estudiante1 = new SancionEstudiantil("David Alvarez", "No hacer uso adecuado de las instalaciones");
estudiante1.mostrarInfraccion();


