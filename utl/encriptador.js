export function encriptarTexto(textoNormal) {
 
    const encriptacion = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    };

    // Almacena el texto encriptado
    let resultadoEncriptado = "";
    // Convertir el texto dado en minusculas
    var textoNormal = textoNormal.toLowerCase();

    // Recorre el texto dado y cambia las letras que coinciden
    for (let x = 0; x < textoNormal.length; x++) {
        if (encriptacion.hasOwnProperty(textoNormal[x])) {
            resultadoEncriptado += encriptacion[textoNormal[x]];
        } else {
            resultadoEncriptado += textoNormal[x];
        }
    }
    return resultadoEncriptado;
}

export function desencriptarTexto(textoEncriptado) {

    const desencriptacion = {
      "ai": "a",
      "enter": "e",
      "imes": "i",
      "ober": "o",
      "ufat": "u",
    };

    // Almacena el texto desencriptado
    let resultadoDesencriptado = "";
    
    var textoEncriptado = textoEncriptado.toLowerCase();

    let i = 0;

    // Un while que inicializa como false al comienzo de cada iteración si i < que el string
    while (i < textoEncriptado.length) {
      let encontrado = false;
      // Recorre todas las keys de desencriptacion
      for (let clave in desencriptacion) {
        if (desencriptacion.hasOwnProperty(clave) && textoEncriptado.substring(i, i + clave.length) === clave) {
          resultadoDesencriptado += desencriptacion[clave];
          i += clave.length;
          encontrado = true;
          break;
        }
      }
      // Si no se encontró ninguna coincidencia
      if (!encontrado) {
        resultadoDesencriptado += textoEncriptado[i];
        i++;
      }
    }
    return resultadoDesencriptado;    
}