class Persona {
    constructor(nombre, fechaNacimiento) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
    }

    get fechaNacimiento() {
        return this._fechaNacimiento;
    }

    set fechaNacimiento(fecha) {
        const regexFecha = /^\d{4}-\d{2}-\d{2}$/;
        if (!regexFecha.test(fecha)) {
            throw new Error("Formato de fecha inválido. Use el formato YYYY-MM-DD.");
        }

        const fechaNac = new Date(fecha);
        if (isNaN(fechaNac.getTime())) {
            throw new Error("Fecha de nacimiento inválida.");
        }

        const fechaActual = new Date();
        if (fechaNac > fechaActual) {
            throw new Error("La fecha de nacimiento no puede ser en el futuro.");
        }

        this._fechaNacimiento = fechaNac;
    }

    get edad() {
        const fechaActual = new Date();
        const fechaNac = this._fechaNacimiento;

        let edad = fechaActual.getFullYear() - fechaNac.getFullYear();

        const mesActual = fechaActual.getMonth();
        const diaActual = fechaActual.getDate();
        const mesNac = fechaNac.getMonth();
        const diaNac = fechaNac.getDate();

        if (mesActual < mesNac || (mesActual === mesNac && diaActual < diaNac)) {
            edad--;
        }

        return edad;
    }
}

try {
    const persona1 = new Persona("Nelson Rodriguez", "2006-07-15");
    console.log(`${persona1.nombre} tiene ${persona1.edad} años.`);

    persona1.fechaNacimiento = "2025-01-01";
} catch (error) {
    console.error(error.message);
}