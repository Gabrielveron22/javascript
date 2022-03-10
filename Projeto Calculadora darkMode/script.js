function zerar(){
    document.getElementById('resultado').innerHTML = ""
}


function insert(num) {

    const displayElement = document.getElementById('resultado');

    if (displayElement.innerHTML === "0") {
      zerar()
    }
 var numero = document.getElementById('resultado').innerHTML
 document.getElementById('resultado').innerHTML = numero + num
}

function clean(){
    document.getElementById('resultado').innerHTML = 0
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring (0, resultado.length -1)
}

function calcular(){
    
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
}

// DARK MODE //
const fundo = document.querySelector('.fundo')
const h1 = document.querySelector('h1')
const h12 = document.querySelector('.h1')
const toggle = document.getElementById('toggle')
toggle.onclick = function(){
    toggle.classList.toggle('active')
    fundo.classList.toggle('active')
    h1.classList.toggle('active')
    h12.classList.toggle('active')
}