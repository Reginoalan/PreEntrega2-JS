class Alumno {
    constructor(nombre, dni, promedio) {
        this.nombre = nombre;
        this.dni = dni;
        this.promedio = promedio;
    }
}

console.log("La lista de alumnos ya esta cargada!");

const arrayDeAlumos = [];
arrayDeAlumos.push(new Alumno("Alan", 39509710, 7.5));
arrayDeAlumos.push(new Alumno("Juan", 39872390, 9.5));
arrayDeAlumos.push(new Alumno("Giuliana", 40239173, 10));
arrayDeAlumos.push(new Alumno("Jose", 39123467, 4));
arrayDeAlumos.push(new Alumno("Ayelen", 39000921, 5.5));
arrayDeAlumos.push(new Alumno("rodrigo", 39293721, 3));
arrayDeAlumos.push(new Alumno("Macarena", 38288111, 8));



function asignarOpcion(opciones) {
    if (opciones == "maximo") {
        let maximo = -1;
        new Alumno();
        for (let i = 0; i < arrayDeAlumos.length; i++) {
            if (arrayDeAlumos[i].promedio > maximo) {
                maximo = arrayDeAlumos[i].promedio;
                Alumno.nombre = arrayDeAlumos[i].nombre;
                Alumno.promedio = arrayDeAlumos[i].promedio;
            }
        }
        return console.log("El alumno con mayor promedio es: " + Alumno.nombre + ", con un promedio de: " + Alumno.promedio);
    } else if (opciones == "lista") {
        return console.log(arrayDeAlumos);
    } else if (opciones == "aprobados") {
        const totalAprobados = arrayDeAlumos.filter((el) => el.promedio > 7);
        return console.log(totalAprobados);
    }
    else return console.log("No se ingreso ninguna de las opciones");
}

asignarOpcion (prompt("Escriba las siguientes palabras clave para ver los resultados: maximo (arroja el alumno con maximo promedio), lista (imprime la lista de alumnos), aprobados (cantidad de aprobados)"));
