
let numeroRandom=Math.ceil(Math.random()*101);
let cantIntentos = 0;
console.log(numeroRandom);

function CompararConNumSecreto(numero)
{
        let ret = false;

        cantIntentos++;

        if(numeroRandom>numero)
        {
            alert("El numero es más grande");
            
        }
        else if(numeroRandom<numero)
        {
            alert("El numero es más chico");
        }
        else{
            alert(`¡Adivinaste! Cant de intentos: ${cantIntentos}`);
            ret = true;

            numeroRandom=Math.ceil(Math.random()*101);
            cantIntentos = 0;
            console.log(numeroRandom);
        }

        
        return ret;
}

function Verificar(){
    const numero = Number(document.getElementById("num").value);
    (numero > 0 && numero < 101) ? CompararConNumSecreto(numero) : alert("Número fuera del rango");
}


//If ternario: 
//seCumpleAlgo ? algo : otroAlgo
//características: dos condiciones (if, else- no hay else if y no puede ser solo if) - ya incluye el return (?)

//seCumpleAlgo && algo
//solo if - si se cumple esta cosa tmb la otra (van de la mano, por eso el &&, como en condicionales)

//foreach es para listas, no tenemos la cant exacta (diferencia con el for)

//funciones: método convencional / funciones flecha (en gral estas son const)
//const unNombre = () => {pasan cosas}
//Si no están los corchetes en la de arriba devuelve directo el valor de la variable (entre los corchetes se puede poner más líneas)  

//Alt + 96 en teclado numérico = comilla francesa (`) --> `Hola ${nombre}, ¿cómo estas?`

//Se puede enviar (en vez del objeto por parámetro -params- y dsp usar los atributos -params.nombre, params.apellido) los atributos entre llaves por parámetro -{nombre, apellido}-