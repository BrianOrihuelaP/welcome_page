window.onload=inicio;
window.onkeydown= teclado;
window.onkeyup= soltarCursores;
window.onresize=tomarMedidas;
var nave;
var x;
var y=0;
var anchoNavegador, altoNavegador;
var anchoNave, altoNave;
var crono;
var pulsando= false;
var grosor;
function inicio(){
    nave=document.querySelector("#nave");
    tomarMedidas();
    x=(anchoNavegador/2)-(anchoNave/2);
    ubicarNave();
    crono=setInterval(gravedad,10);
    let datos= window.getComputedStyle(document.querySelector("body"));
    grosor= parseInt(datos ["borderBottomWidth"]);
    document.querySelector("").onclick=muteado;
}

function muteado(){
    
}

function soltarCursores(){
    pulsando=false;
}

function gravedad(){
    if(y>0 && pulsando==false){
        y--;
        ubicarNave();
    }
}

function tomarMedidas(){
    anchoNavegador=window.innerWidth;
    anchoNave=nave.offsetWidth;    
    altoNavegador=window.innerHeight;
    altoNave=nave.offsetHeight; 
    if(y+altoNave+grosor>altoNavegador){
        y=altoNavegador-altoNave-grosor;
        ubicarNave();
    }
    if(y+anchoNave>anchoNavegador){
        y=anchoNavegador-anchoNave;
        ubicarNave();
    }
}

function ubicarNave(){
    nave.style.left= `${x}px`;
    nave.style.bottom=`${y}px`;
}

function teclado(e){
    let tecla=e.key;
    pulsando=true;
    if(tecla=="ArrowUp"){
        if(altoNavegador-altoNave - grosor>y){
        y+=10;
        if(y>altoNavegador-altoNave-grosor){
            y= altoNavegador-altoNave-grosor;
        }
        ubicarNave();
        }
    }
    if(tecla=="ArrowDown"){
        if(y>0){
        y-=10;
        if(y<0){
            y=0;
        }
        ubicarNave();
        }
    }
    if(tecla=="ArrowRight"&& y>0){
        x+=10;
        if(x>anchoNavegador-15){
            x=-anchoNave+20;
        }
        ubicarNave();
    }
    if(tecla=="ArrowLeft" && y>0){
        x-=10;
        if(x<-anchoNave+15){
            x=anchoNavegador-20;
        }
        ubicarNave();
    }





   
}

