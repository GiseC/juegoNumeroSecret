let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
let listaNumerosSorteados = [];
console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroDeUsuario);
    console.log(listaNumerosSorteados);

     
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `¡Adivinaste el número en ${intentos} ${(intentos === 1)? "vez": "veces"}!`);            document.getElementById("reiniciar").removeAttribute( "disabled" );
    } else {
        if (numeroDeUsuario > numeroSecreto){                asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
        }
        return;
}


function limpiarCaja(){
    document.querySelector('#valorUsuario').value= '';
}
function generarNumero(){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo + 1);
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumero();
        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return  numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un nùmero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumero();
    intentos = 1;
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //desabilitar el numero de Nuevo Juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();