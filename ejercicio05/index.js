function tituloEjercicio(numero){
    return(`Ejercicio ${numero}\r\n\r\n------------------------------------------------------------------\r\n`);
}


/** ***********************************************************************************************
 * 1.	Crear una Clase Básica:
 * o	Define una clase Persona con las propiedades nombre y edad.
 *      Crea un método presentarse que devuelva un mensaje como:
 *      "Hola, mi nombre es [nombre] y tengo [edad] años".
 *      Luego, crea una instancia de la clase e imprime el mensaje en la consola.
*/
/*
console.log(tituloEjercicio(1));

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
};

// Crear una instancia de la clase Persona
const persona1 = new Persona("Juan", 30);

// Imprimir el mensaje de presentación
console.log(persona1.presentarse());
*/







/** ***********************************************************************************************
 * 2.	Constructores:
 *      o	Añade un constructor a la clase Coche que reciba como parámetros el modelo, la marca y el año.
 *      Crea una instancia de Coche e imprime sus propiedades en la consola.
 */
/*
console.log(tituloEjercicio(2));

class Coche {
    constructor(modelo, marca, año) {
        this.modelo = modelo;
        this.marca = marca;
        this.año = año;
    }
}

// Crear una instancia de la clase Coche
const miCoche = new Coche("Civic", "Honda", 2022);

// Imprimir las propiedades del coche en la consola
console.log(`Modelo: ${miCoche.modelo}`);
console.log(`Marca: ${miCoche.marca}`);
console.log(`Año: ${miCoche.año}`);
*/









/** ***********************************************************************************************
 * 3.	Métodos de una Clase:
 * o	Crea una clase Contador con una propiedad cuenta inicializada en 0.
 *      Añade métodos para incrementar, decrementar y mostrar el valor actual de cuenta.
 */
/*
console.log(tituloEjercicio(3));

class Contador {
    constructor() {
        this.cuenta = 0; // Inicializar la propiedad cuenta en 0
    }

    incrementar() {
        this.cuenta++;
    }

    decrementar() {
        this.cuenta--;
    }

    mostrarCuenta() {
        return `El valor actual de la cuenta es: ${this.cuenta}`;
    }
}

// Crear una instancia de la clase Contador
const contador = new Contador();

// Usar los métodos de la clase
contador.incrementar();
contador.incrementar();
console.log(contador.mostrarCuenta()); // El valor actual de la cuenta es: 2

contador.decrementar();
console.log(contador.mostrarCuenta()); // El valor actual de la cuenta es: 1
*/








/** ***********************************************************************************************
 * 4.	Herencia:
 * o	Define una clase Animal con un método hablar.
 *      Luego, crea una clase Perro que herede de Animal y sobrescriba el método hablar para que devuelva "Guau, guau".
 */
// Definición de la clase Animal
/*
console.log(tituloEjercicio(4));

class Animal {
    hablar() {
        return "El animal hace un sonido.";
    }
}

// Definición de la clase Perro que hereda de Animal
class Perro extends Animal {
    hablar() {
        return "Guau, guau";
    }
}
const miBicho = new Animal();
// Crear una instancia de la clase Perro
const miPerro = new Perro();

// Usar el método hablar
console.log(miBicho.hablar())     // El animal hace un sonido
console.log(miPerro.hablar()); // Guau, guau
*/









/** ***********************************************************************************************
 * 5.	Getters y Setters:
 * o	Crea una clase Rectangulo con propiedades ancho y alto.Añade métodos get para calcular el área y el perímetro.
 *      Instancia un rectángulo e imprime sus valores.
 */
/*
console.log(tituloEjercicio(5));

class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    // Método get para calcular el área
    get area() {
        return this.ancho * this.alto;
    }

    // Método get para calcular el perímetro
    get perimetro() {
        return 2 * (this.ancho + this.alto);
    }
}

// Crear una instancia de la clase Rectangulo
const miRectangulo = new Rectangulo(10, 5);

// Imprimir los valores del área y el perímetro
console.log(`Ancho: ${miRectangulo.ancho}`);
console.log(`Alto: ${miRectangulo.alto}`);
console.log(`Área: ${miRectangulo.area}`);
console.log(`Perímetro: ${miRectangulo.perimetro}`);
*/









/** ***********************************************************************************************
 * 6.	Encapsulamiento:
 *      o	Implementa una clase Banco con una propiedad privada saldo.Añade métodos públicos para depositar,
 *          retirar y consultar el saldo.
 */
/*
console.log(tituloEjercicio(6));

class Banco {
    #saldo; // Declarar la propiedad privada

    constructor(saldoInicial = 0) {
        this.#saldo = saldoInicial; // Inicializar el saldo
    }

    // Método para depositar dinero
    depositar(cantidad) {
        if (cantidad > 0) {
            this.#saldo += cantidad;
            console.log(`Has depositado ${cantidad}.`);
        } else {
            console.log("La cantidad a depositar debe ser mayor a 0.");
        }
    }

    // Método para retirar dinero
    retirar(cantidad) {
        if (cantidad > 0 && cantidad <= this.#saldo) {
            this.#saldo -= cantidad;
            console.log(`Has retirado ${cantidad}.`);
        } else if (cantidad > this.#saldo) {
            console.log("Fondos insuficientes.");
        } else {
            console.log("La cantidad a retirar debe ser mayor a 0.");
        }
    }

    // Método para consultar el saldo
    consultarSaldo() {
        return `Tu saldo actual es: ${this.#saldo}`;
    }
}

// Crear una instancia de la clase Banco
const miBanco = new Banco(1000);

// Usar los métodos públicos
miBanco.depositar(500);
console.log(miBanco.consultarSaldo()); // Tu saldo actual es: 1500

miBanco.retirar(300);
console.log(miBanco.consultarSaldo()); // Tu saldo actual es: 1200

miBanco.retirar(2000); // Fondos insuficientes.
console.log(miBanco.consultarSaldo()); // Tu saldo actual es: 1200
*/










/** ***********************************************************************************************
 * 7.	Polimorfismo:
 *      o	Crea una clase base Instrumento con un método tocar.
 *      Luego, crea las clases Guitarra y Bateria que hereden de Instrumento y
 *      sobrescriban el método tocar con mensajes diferentes.
 */
/*
console.log(tituloEjercicio(7));

// Clase base Instrumento
class Instrumento {
    tocar() {
        return "Estoy tocando un instrumento.";
    }
}

// Clase Guitarra que hereda de Instrumento
class Guitarra extends Instrumento {
    tocar() {
        return "Estoy tocando la guitarra: Strum, strum!";
    }
}

// Clase Batería que hereda de Instrumento
class Bateria extends Instrumento {
    tocar() {
        return "Estoy tocando la batería: Boom, boom, clap!";
    }
}

// Crear instancias de cada clase
const miGuitarra = new Guitarra();
const miBateria = new Bateria();

// Usar el método tocar en cada instancia
console.log(miGuitarra.tocar()); // Estoy tocando la guitarra: Strum, strum!
console.log(miBateria.tocar());  // Estoy tocando la batería: Boom, boom, clap!
*/









/** ***********************************************************************************************
 *                                      AHORA TE TOCA A TÍ!!!
 *********************************************************************************************** */









/**
 * Ejercicio 1: Clase Persona
 * Crea una clase llamada Persona con las propiedades nombre y edad.
 * Añade un método saludar que devuelva un mensaje como:
 * "Hola, mi nombre es [nombre] y tengo [edad] años."
 * Crea una instancia de la clase y muestra el mensaje en la consola.
 */

console.log(tituloEjercicio(1));
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método para presentarse
    presentarse() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
    presentarseDos() {
        return "Hola. Me llamo Íñigo Montoya. Tú mataste a mi padre. Prepárate a morir."
    }
};

let persona = new Persona("Antonio", 48);
console.log(persona.presentarse());
console.log(persona.presentarseDos());