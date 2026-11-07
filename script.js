// index
const formulario = document.getElementById("miFormulario");
const inputNombre = document.getElementById("nombre");

if (inputNombre) {
  inputNombre.addEventListener("focus", function() {
    inputNombre.style.backgroundColor = "#e0f7fa";
  });

  inputNombre.addEventListener("blur", function() {
    inputNombre.style.backgroundColor = "";
  });
}

if (formulario) {
  formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    let nombre = inputNombre.value;

    if (nombre.trim() === "") {
      alert("El nombre no puede estar vacío.");
    } else {
      alert("¡Bienvenido, " + nombre + "!");
      window.location.href = "inicio.html";
    }
  });
}

// inicio.html
const mensajeCarga = document.getElementById("mensajeCarga");
if (mensajeCarga) {
  window.addEventListener("load", function() {
    mensajeCarga.textContent = "¡Bienvenido a mi página web!";
  });
}

const miBoton = document.getElementById("miBoton");
if (miBoton) {
  miBoton.addEventListener("click", function() {
    let usuario = prompt("¿Cómo te llamas?");
    if (usuario) {
      document.getElementById("mensaje").textContent = "Hola, " + usuario + ", gracias por visitar la página.";
    }
  });
}

// personaje.html
const infoSelect = document.getElementById("infoSelect");
if (infoSelect) {
  let datosTexto = `[
    {
      "categoria": "Habilidades",
      "elementos": ["Velocidad", "Fuerza", "Estrategia"]
    },
    {
      "categoria": "Datos Curiosos",
      "elementos": ["Primera aparición", "Creador", "Origen"]
    }
  ]`;

  let datos = JSON.parse(datosTexto);
  let listaDatos = document.getElementById("listaDatos");
  let tituloCategoria = document.getElementById("tituloCategoria");

  for (let obj of datos) {
    let opcion = document.createElement("option");
    opcion.value = obj.categoria;
    opcion.textContent = obj.categoria;
    infoSelect.appendChild(opcion);
  }

  infoSelect.addEventListener("change", function() {
    listaDatos.innerHTML = "";
    tituloCategoria.textContent = "";

    let seleccion = infoSelect.value;

    if (seleccion !== "") {
      let encontrado = datos.find(obj => obj.categoria === seleccion);
      tituloCategoria.textContent = `${seleccion}:`;

      for (let itemTexto of encontrado.elementos) {
        let item = document.createElement("li");
        item.textContent = itemTexto;
        listaDatos.appendChild(item);
      }
    }
  });
}
