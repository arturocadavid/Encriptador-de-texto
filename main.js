import { restablecerValores } from "./utl/predeterminado.js";
import { encriptarTexto, desencriptarTexto } from "./utl/encriptador.js";

// Restablecer predeterminado
window.onload = () => {
  restablecerValores(input, resultado, botonCopiar);
};

window.addEventListener("load", () => {
  if (localStorage.getItem("resultado")) {
    localStorage.removeItem("resultado");
  }
  restablecerValores();
});

// Definiendo constantes
const botonEncriptar = document.getElementById("btnEncrip");
const botonDesencriptar = document.getElementById("btnDesencrip");
const botonCopiar = document.getElementById("btnCopiar");
const resultado = document.getElementById("result");
const input = document.getElementById("texto-entrada");
const inputSaved = localStorage.getItem("resultado") || "";

// Contenido por defecto del resultado
const resultContentDefault = `
  <div>
    <img src="img/imagen.png" alt="encriptando_texto">
    <h2>Ningún mensaje fue encontrado</h2>
    <p>Ingresa el texto que desees encriptar o desencriptar.</p>
  </div>
`;

// Ocultando contenido si no hay ningún mensaje
const setResult = (text) => {
  if (!text) {
    resultado.innerHTML = resultContentDefault;
    localStorage.removeItem("resultado");
  } else {
    resultado.innerHTML = `<h2 class="resultText">${text}</h2>`;
    localStorage.setItem("resultado", text);
  }

  if (resultado.innerHTML.trim() === resultContentDefault.trim()) {
    botonCopiar.style.display = "none";
  } else {
    botonCopiar.style.display = "block";
  }
};

const updateInput = () => {
  input.value ? localStorage.setItem("resultado", input.value) : localStorage.removeItem("resultado");
};

const encryptSubmit = () => {
  const textoNormal = input.value;
  const textoEncriptado = encriptarTexto(textoNormal);
  setResult(textoEncriptado);
};

const decryptSubmit = () => {
  const textoEncriptado = input.value;
  const textoDesencriptado = desencriptarTexto(textoEncriptado);
  setResult(textoDesencriptado);
};

// Botón de copiar con transición copiado
const copyText = () => {
  const resultText = resultado.innerText;
  navigator.clipboard.writeText(resultText);
  botonCopiar.innerText = "Copiado";
  setTimeout(() => {
    botonCopiar.innerText = "Copiar";
  }, 1000);
};

// Configurando botones
botonEncriptar.addEventListener("click", encryptSubmit);
botonDesencriptar.addEventListener("click", decryptSubmit);
botonCopiar.addEventListener("click", copyText);
input.addEventListener("input", updateInput);

if (inputSaved) input.value = inputSaved;
if (!localStorage.getItem("resultado")) botonCopiar.style.display = "none";
setResult(localStorage.getItem("resultado"));

// Elimina resultado de localStorage cuando se recarga la página
window.addEventListener("beforeunload", () => {
  localStorage.removeItem("resultado");
});
