// Función para restablecer los valores predeterminados
export function restablecerValores(input, resultado, botonCopiar) {
    // Restablecer contenido del input
    input.value = '';
  
    // Restablecer contenido del div donde se muestra el resultado
    resultado.innerHTML = resultContentDefault;
  
    // Establecer estilo del botón de copiar como oculto
    botonCopiar.style.display = "none";
  
    // Eliminar resultado del localStorage
    localStorage.removeItem("resultado");
  }