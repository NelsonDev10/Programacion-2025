class Persona {
    constructor(nombre, edad, dui) {
        this._nombre = nombre; 
        this._edad = edad;
        this._dui = null; 
        this.dui = dui; 
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    get edad() {
        return this._edad;
    }

    set edad(nuevaEdad) {
        if (typeof nuevaEdad === 'number' && nuevaEdad >= 0) {
            this._edad = nuevaEdad;
            console.log(nuevaEdad >= 18 ? "Ya es mayor de edad" : "Aún está niño");
        } else {
            console.log("La edad debe ser un número positive");
        }
    }

    get dui() {
        return this._dui;
    }

    set dui(nuevoDui) {
        const regex = /^\d{9}$/; 
        if (regex.test(nuevoDui)) {
            this._dui = nuevoDui;
        } else {
            throw new Error("El DUI debe contener 9 dígitos numéricos y no debe incluir caracteres ni espacios.");
        }
    }

    mostrar() {
        console.log(`Mi nombre es ${this._nombre}, mi edad es: ${this._edad}, y mi DUI es: ${this._dui}`);
    }
}


try {
    let obj = new Persona("Nelson", 25, "067430540");
    obj.mostrar(); 

    obj.nombre = "Rene";
    obj.mostrar(); 

    
    obj.edad = 17; 
    obj.edad = 25; 

   
    obj.dui = "9845578451";
} catch (error) {
    console.error(error.message);
}