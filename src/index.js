import cipher from './cipher.js';
//let btnx= document.getElementById("btncifrado");
//btncifrado.addEventListener("click",micifrado);

 document.getElementById("btncifrado").addEventListener("click",micifrado);
document.getElementById("btndescifrado").addEventListener("click",midescifrado);
document.getElementById("btnlimpiar").addEventListener("click",limpiar);
//fsuma(a,b)=a+b
//let txtmensaje= document.getElementById("mensaje");
function micifrado(){
    //resultado de la funcion fsuma de y y z lo asignamos a x
  //  x=fsuma(y,z);
   
    //estamos leyendo mensaje entrada
    let nombre = document.getElementById("mensaje").value;
    //let nombre = txtmensaje.value;
    //txtmensaje.value=""
    let pos = +document.getElementById("desplazamiento").value;
/*     console.log(cipher.cifrar(nombre,pos)); */
//
    document.getElementById("resultado").value=cipher.encode(pos,nombre);
    //warning
    // console.log(typeof cipher); 
    // console.log(typeof cipher.encode);
   // console.log(typeof cipher.encode());
   //console.log(typeof cipher.encode(null, []));
}

function midescifrado(){
    let nombre = document.getElementById("mensaje").value;
    let pos = +document.getElementById("desplazamiento").value;
/*     console.log(cipher.cifrar(nombre,pos)); */
    document.getElementById("resultado").value=cipher.decode(pos,nombre);
}
// Al darle click al botón limpiar, sucede esto: 
function limpiar(){
//    console.log("prueba");
    document.getElementById("resultado").value="";
    document.getElementById("mensaje").value="";
    document.getElementById("desplazamiento").value="1";
  //  btnx.innerHTML="prueba"
}