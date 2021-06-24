const cipher = {
  // ...
  //funcion de cifrar
  encode(pos,nombre){
    let abc=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let posexc=0;
    let cifra={};
    let mensajecifrado="";
    let nombrecopia=nombre;
    nombre=nombre.toUpperCase();
//busqueda en nuestro diccionario de letras y cifrado
    for(let j=0;j<nombre.length;j++){
      for(let i=0; i<26; i++){
    
        if(nombre[j]==abc[i]){
            if(i+pos+1>abc.length){
            
                if((i+pos+1)%abc.length==0) 
                  cifra[j]=abc[abc.length-1];//abc[26]
                else{   
                  posexc=(i+pos+1)%abc.length-1;
                  cifra[j]=abc[posexc];
              }  
            }else{
                cifra[j]=abc[i+pos];
            }
        }
      }   
     }
     //fin de la busqueda y cifrado
     //guardando el cifrado

    for(let j=0;j<nombre.length;j++){
     //console.log(cifra[j]);
     //si no encuentra la letra no codificamos y lo guardamos igual como era la letra original
      if( cifra[j]==undefined)
        mensajecifrado=mensajecifrado+nombrecopia[j];
      else 
      {
        if(esMayuscula(nombrecopia[j]))
            mensajecifrado=mensajecifrado+cifra[j];
        else
            mensajecifrado=mensajecifrado+cifra[j].toLowerCase();
      }
    }

    if(pos==null)
      throw new TypeError('no puede ser nulo');
    if(pos==0 && nombre==0)
      throw new TypeError('no puede ser 0 desplazamientos, ni texto = 0 ');
    else
      return mensajecifrado;
  },
  //funcion de descifrar
  decode(pos,nombre){
    let abc=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    //let abc=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let posexc=0;
    let cifra={};
    let mensajedescifrado="";
    let nombrecopia=nombre;
    nombre=nombre.toUpperCase();

    for(let j=0;j<nombre.length;j++){
      for(let i=0; i<26; i++){
    
        if(nombre[j]==abc[i]){
            if(i-pos<0){
                posexc=(i-pos+1)%abc.length-1;
                cifra[j]=abc[abc.length+posexc];
            }else{
                cifra[j]=abc[i-pos];
            }
        }
      }   
     }
    for(let j=0;j<nombre.length;j++)
    {
     //   console.log(cifra[j]);
     if(cifra[j]==undefined)
        mensajedescifrado=mensajedescifrado+nombrecopia[j]
      else
      {
         if(esMayuscula(nombrecopia[j]))
              mensajedescifrado=mensajedescifrado+cifra[j];
          else
              mensajedescifrado=mensajedescifrado+cifra[j].toLowerCase();
      }
    }
    if(pos==null)
     throw new TypeError('no puede ser nulo');
    if(pos==0 && nombre==0)
      throw new TypeError('no puede ser 0 desplazamientos, ni texto = 0 ');
    else
    return mensajedescifrado;
  }
};

function esMayuscula(letra)
{
  return letra===letra.toUpperCase();
}

export default cipher;
