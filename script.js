function mostrarHorarios() {
	var rutaSeleccionada = document.getElementById("ruta").value;
	var horarios = obtenerHorarios(rutaSeleccionada);
	var horariosDiv = document.getElementById("horarios");
	horariosDiv.innerHTML = "";
	if (horarios.length > 0) {
		var listaHorarios = "<ul>";
		for (var i = 0; i < horarios.length; i++) {
			listaHorarios += "<li>" + horarios[i] + "</li>";
		}
		listaHorarios += "</ul>";
		horariosDiv.innerHTML = listaHorarios;
	} else {
		horariosDiv.innerHTML = "No se encontraron horarios para la ruta seleccionada.";
	}
}

function prueba(){



}