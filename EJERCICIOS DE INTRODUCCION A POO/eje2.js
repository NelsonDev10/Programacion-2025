class ConversionTemperatura {
    constructor(temperatura, escala) {
        this.temperatura = temperatura;
        this.escala = escala.toLowerCase();
    }

    Celsius() {
        if (this.escala === "fahrenheit") {
            return ((this.temperatura - 32) * 5/9).toFixed(2);
        } else if (this.escala === "kelvin") {
            return (this.temperatura - 273.15).toFixed(2);
        }
        return "Escala no válida";
    }

    Fahrenheit() {
        if (this.escala === "celsius") {
            return ((this.temperatura * 9/5) + 32).toFixed(2);
        } else if (this.escala === "kelvin") {
            return ((this.temperatura - 273.15) * 9/5 + 32).toFixed(2);
        }
        return "Escala no válida";
    }

    Kelvin() {
        if (this.escala === "celsius") {
            return (this.temperatura + 273.15).toFixed(2);
        } else if (this.escala === "fahrenheit") {
            return ((this.temperatura - 32) * 5/9 + 273.15).toFixed(2);
        }
        return "Escala no válida" ;
    }

    mostrarConversiones() {
        console.log(`Temperatura ingresada: ${this.temperatura}° ${this.escala}`);
        console.log(`Celsius: ${this.Celsius()} °C`);
        console.log(`Fahrenheit: ${this.Fahrenheit()} °F`);
        console.log(`Kelvin: ${this.Kelvin()} °K`);
    }
}


const conversion1 = new ConversionTemperatura(100, "Fahrenheit");
conversion1.mostrarConversiones();

const conversion2 = new ConversionTemperatura(0, "Celsius");
conversion2.mostrarConversiones();

const conversion3 = new ConversionTemperatura(273.15, "Kelvin");
conversion3.mostrarConversiones();
