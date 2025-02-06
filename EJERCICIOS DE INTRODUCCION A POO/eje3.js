class Nota {
    constructor(titulo, detalle) {
        this.titulo = titulo;
        this.detalle = detalle;
    }

    contarPalabras() {
        return this.detalle.split(" ").length;
    }

    mostrarNota() {
        console.log("Título: " + this.titulo);
        console.log("Detalle: " + this.detalle);
        console.log("Cantidad de palabras en el detalle: " + this.contarPalabras());
    }
}


const nota1 = new Nota("Reunion con clientes", "Se le solica discutir avances del proyecto. ");
nota1.mostrarNota();

e



