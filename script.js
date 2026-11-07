//index.html
const btnDato = document.getElementById("btnDato");
if (btnDato) {
    const datosCuriosos = [
        "En toda la serie jamás se pronuncia la palabra 'zombi'; los llaman caminantes, mordedores o errantes.",
        "Norman Reedus hizo audición originalmente para el papel de Merle, pero les gustó tanto que crearon a Daryl Dixon especialmente para él.",
        "Los actores que interpretan a los caminantes pasaban por una 'escuela zombi' para aprender a caminar y moverse igual.",
        "La ballesta de Daryl Dixon es una Horton Scout HD 125 en las primeras temporadas.",
        "El cómic original de Robert Kirkman fue impreso en blanco y negro durante sus 193 números."
    ];

    btnDato.addEventListener("click", function() {
        let indice = Math.floor(Math.random() * datosCuriosos.length);
        document.getElementById("textoDato").textContent = datosCuriosos[indice];
    });
}

//inicio.html
const selectTemporada = document.getElementById("selectTemporada");
if (selectTemporada) {
    const infoTemporadas = {
        "1": ["6 episodios", "Locación principal: Atlanta y el CDC", "Hito: Rick despierta del coma y encuentra a su familia"],
        "2": ["13 episodios", "Locación principal: Granja de Hershel", "Hito: Búsqueda de Sophia y conflicto entre Rick y Shane"],
        "3": ["16 episodios", "Locación principal: La Prisión y Woodbury", "Antagonista principal: El Gobernador"],
        "4": ["16 episodios", "Locación principal: La Prisión y camino a Terminus", "Hito: Caída de la prisión y división del grupo"],
        "5": ["16 episodios", "Locación principal: Terminus, Atlanta y llegada a Alexandria", "Antagonista: Gareth y los caníbales de Terminus"],
        "6": ["16 episodios", "Locación principal: Zona Segura de Alexandria", "Hito: Horda masiva de caminantes y primer encuentro con los Salvadores"],
        "7": ["16 episodios", "Locación principal: Alexandria, Hilltop, El Reino y El Santuario", "Antagonista principal: Negan"],
        "8": ["16 episodios", "Locación principal: Múltiples comunidades", "Hito: Guerra total contra Negan y los Salvadores"],
        "9": ["16 episodios", "Locación principal: Comunidades unidas", "Antagonista principal: Alpha y Los Susurradores"],
        "10": ["22 episodios", "Locación principal: Hilltop y Alexandria", "Hito: La Guerra de los Susurradores y llegada de Beta"],
        "11": ["24 episodios", "Locación principal: La Mancomunidad (Commonwealth)", "Hito: Cierre de la historia principal"]
    };

    const listaDetalles = document.getElementById("listaDetalles");

    selectTemporada.addEventListener("change", function() {
        listaDetalles.innerHTML = "";
        const num = selectTemporada.value;

        if (infoTemporadas[num]) {
            for (let detalle of infoTemporadas[num]) {
                let item = document.createElement("li");
                item.textContent = detalle;
                listaDetalles.appendChild(item);
            }
        }
    });
}

//personaje_favorito.html
const formComunidad = document.getElementById("miFormulario");
const selectPersonaje = document.getElementById("personaje");

if (selectPersonaje) {
    const fichas = {
        "rick": "Arma: Revólver Colt Python | Rol: Líder de Alexandria",
        "daryl": "Arma: Ballesta y cuchillos | Rol: Rastreador y superviviente",
        "michonne": "Arma: Katana | Rol: Seguridad de Alexandria",
        "maggie": "Arma: Rifle y cuchillo | Rol: Líder de Hilltop",
        "glenn": "Arma: Pistola y equipo táctico | Rol: Explorador experto",
        "carl": "Arma: Pistola Beretta con silenciador | Rol: Superviviente de Alexandria",
        "judith": "Arma: Colt Python y pequeña katana | Rol: Nueva generación",
        "carol": "Arma: Cuchillo de trinchera y arco | Rol: Estratega infiltrada",
        "negan": "Arma: Bate 'Lucille' | Rol: Exlíder de los Salvadores",
        "jesus": "Arma: Artes marciales y espada | Rol: Reclutador de Hilltop"
    };

    selectPersonaje.addEventListener("change", function() {
        let valor = selectPersonaje.value;
        document.getElementById("fichaPersonaje").textContent = fichas[valor] || "";
    });
}

if (formComunidad) {
    formComunidad.addEventListener("submit", function(evento) {
        evento.preventDefault();

        let apodo = document.getElementById("apodo").value;
        let comentario = document.getElementById("comentario").value;
        let aviso = document.getElementById("avisoForm");

        if (apodo.trim() === "" || comentario.trim() === "") {
            aviso.textContent = "Por favor completa tu apodo y tu comentario antes de enviar.";
            return;
        }

        aviso.textContent = "";
        let nombrePersonaje = selectPersonaje.options[selectPersonaje.selectedIndex].text;
        let nuevoComentario = document.createElement("li");
        nuevoComentario.textContent = `${apodo} (Fan de ${nombrePersonaje}): "${comentario}"`;

        document.getElementById("listaComentarios").appendChild(nuevoComentario);
        formComunidad.reset();
        document.getElementById("fichaPersonaje").textContent = "";
    });
}