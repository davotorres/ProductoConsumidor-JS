document.addEventListener('DOMContentLoaded', function(){
    addEventListener();
});

const contenedor = [];
let restante = 0;
let estadoActual;
let posicion = 0;
let posicionConsumidor = 0;
let intervaloProcesamiento = 0;

function addEventListener(){
    const comezar = document.querySelector('#comenzar');
    comezar.addEventListener('click', run);


    const eggs = document.querySelector('#mistery');
    eggs.addEventListener('click', ()=>{
        const ajolotitoChido = document.querySelector('#aj');
        ajolotitoChido.style.display = 'block';
    });
}

function run(){
    document.querySelector('#comenzar').style.display='none';
    document.querySelector('#mistery').style.display='block';
    for(let i = 0 ; i < 20; i++){
        contenedor[i] = new Elemento();
    }

    productoConsumidor(1);
    intervaloProcesamiento = window.setInterval(productoConsumidor, 500);

    console.log('acabe');
}

function productoConsumidor(random){
    if(restante == 0){
        random = isNaN(random) ? randomNumber(1, 12) :  random;  

        if(random % 2 == 1){
            estadoActual = 'consumidor'
            console.log('consumidor');
            if(!areFalse()){
                console.log('consumiendo');
                const consumidor = document.querySelector('#consumidor');
                consumidor.classList.add('icon-select');
    
                const productor = document.querySelector('#producto');
                productor.classList.remove('icon-select');
            }else{
                productoConsumidor(2);
            }
        }else{
            estadoActual = 'producto';

            if(!areTrue()){
                const producto = document.querySelector('#producto');
                producto.classList.add('icon-select');
    
                const consumidor = document.querySelector('#consumidor');
                consumidor.classList.remove('icon-select');
            }else{
                procesamiento(1);
            }
        }
        restante = randomNumber(1, 7);
    }

    if(estadoActual == 'consumidor'){
        (posicionConsumidor == 20) ? posicionConsumidor = 0: console.log('sigue');
        if(numProductos() < 3){
            restante = 0;
            return;
        }

        
        contenedor[posicionConsumidor].setEstado(false);

        const ajolotito = document.getElementById(posicionConsumidor);
    
        if(contenedor[posicionConsumidor].getEstado() === false){
            ajolotito.classList.remove('icon-color');
        }
        posicionConsumidor++;
        
    }else{
        (posicion == 20) ? posicion = 0: console.log('sigue');
        if(areTrue()){
            restante = 0;
            return;
        }

        contenedor[posicion].setEstado(true);

        const ajolotito = document.getElementById(posicion);
        if(contenedor[posicion].getEstado() === true){
            ajolotito.classList.add('icon-color');
        }

        posicion++;
    }
    restante--;
}


function areFalse(){
    return !(contenedor.some(element=> element.estado === true));
}

function areTrue(){
    return !(contenedor.some(element=> element.estado === false));
}

function randomNumber (min = 0, max = 100) {
    return Math.floor( Math.random() * (max - min) ) + min;
}

function numProductos(){
    let p = 0;
    contenedor.some(element=>{ 
        if(element.estado === true){
            p++;
        }
    });

    return p;
}