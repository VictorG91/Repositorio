var n = 1;

document.addEventListener('DOMContentLoaded', function(event){

    const section = document.getElementById('principal');

    const divP = document.createElement('div');
    divP.classList.add('contenedor');

    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    const btn3 = document.createElement('button');

    btn1.innerText = 'Aceptar';
    btn2.innerText = 'Rechazar';
    btn3.innerText = 'No lo sé';


    btn1.classList.add('btn');
    btn2.classList.add('btn');
    btn3.classList.add('btn');

    btn1.addEventListener('click', function(event){
        clickBtn();
    })

    btn2.addEventListener('click', function(event){
        clickBtn();
    })

    btn3.addEventListener('click', function(event){
        clickBtn();
    })

    divP.append(btn1);
    divP.append(btn2);
    divP.append(btn3);

    const parr1 = document.createElement('p');
    parr1.innerText = 'Soy un párrafo nuevo';

    parr1.classList.add('parrafo');

    

    section.append(parr1);
    section.append(divP);
});

function clickBtn(){
    alert("Esto es un botón y lo he pulsado " + n);
    console.log(`Prueba interpolación, he pulsado ${n}`)
    n++;
}