
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

