function conversion() {
    let t;

   //Pide hasta que sea un numero valido
    while (true) {
        t = prompt("Temperatura en Celsius:");

        t = parseFloat(t);

        // Verificar si 't' es un número válido
        if (t == t) {
            break;  // Sale del bucle si se cmple
        } else {
            console.log("Por favor, ingrese un número válido.");
        }
    }

    console.log("Celsius: " + t + "°C");
    console.log("Fahrenheit: " + ((t * 9/5) + 32) + "°F");
    console.log("Kelvin: " + (t + 273.15) + "K");
}

conversion();
