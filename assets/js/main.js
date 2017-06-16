//funcion para recuperar los datos q el usuario ingrese
function guardarDatos(){
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.password = document.getElementById("password").value;
}

// si los datos ingresados son distintos a undefined, me los imprima en la pantalla.
//de lo contrario me envie un mensaje "no has indroducido tu nombre y pssword"
function recuperarDatos(){
	if((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
		document.getElementById("datos").innerHTML = "Nombre:" + localStorage.nombre + "<br/> Password: " + localStorage.password;
	}
	else{
		document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
	}
}