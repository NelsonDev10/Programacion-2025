class LoteriaDigital {
    constructor(numeroElegido, montoApostado) {
        this.numeroElegido = numeroElegido;
        this.montoApostado = montoApostado;
        this.numeroGanador = this.generarNumeroAleatorio();
    }

    generarNumeroAleatorio() {
        return Math.floor(Math.random() * 100);
    }

    jugar() {
        console.log("Número elegido: " + this.numeroElegido);
        console.log("Número ganador: " + this.numeroGanador);
        
        if (this.numeroElegido === this.numeroGanador) {
            let premio = this.montoApostado * 20;
            console.log("Felicidades Has ganado $" + premio);
        } else {
            console.log("No acertaste el número, pasmado");
        }
    }
}

const jugador1 = new LoteriaDigital(30, 10);
jugador1.jugar();
