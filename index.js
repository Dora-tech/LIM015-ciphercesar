import cipher from './cipher.js';


 document.getElementById("btncifrado").addEventListener("click",micifrado);
document.getElementById("btndescifrado").addEventListener("click",midescifrado);
document.getElementById("btnlimpiar").addEventListener("click",limpiar);

function micifrado(){
    
   
    //estamos leyendo mensaje entrada
    let nombre = document.getElementById("mensaje").value;
    
   
    let pos = +document.getElementById("desplazamiento").value;

    if(nombre=="")
        alert("Debe escribir un texto a cifrar");
    else 
        if(pos<=0)
            alert("El numero clave debe ser un entero positivo")
        else 
            document.getElementById("resultado").value=cipher.encode(pos,nombre);
  
}

function midescifrado(){
    let nombre = document.getElementById("mensaje").value;
    let pos = +document.getElementById("desplazamiento").value;
/*     console.log(cipher.cifrar(nombre,pos)); */

     if(nombre=="")
        alert("Debe escribir un texto a descifrar");
    else 
        if(pos<=0)
            alert("El numero clave debe ser un entero positivo")
        else 
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