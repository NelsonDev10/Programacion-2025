class persona {
    constructor(nombre, edad) {
        this._nombre = nombre
        this._edad = edad
    }

    get nombre(){
        return this._nombre
    }

    get edad(){
        return this._edad
    }

    set nombre(nuevoNombre){
        this._nombre = nuevoNombre
    }

    set edad(nuevaEdad){
        this._edad = nuevaEdad
        if (nuevaEdad >= 18) {
            this.mostrar()
        } else {
            console.log('Aun esta niño');
        }
    }

    mostrar(){
        let mensaje = `Mi nombre es ${this._nombre} y mi edad es: ${this._edad}`
        console.log(mensaje);
    }
}

let obj = new persona("Nelson", 17)
//obj.mostrar()

//obj.nombre = "Manuel"
obj.edad = 20
