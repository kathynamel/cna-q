var mail, nombre;

function validar () {

if($("#nombre").val() == ''){
	alert("El nombre es un campo obligatorio");
}

valor=$("#email").val().toLowerCase();
if(valor.indexOf('@')== -1){
	alert("Email inválido");
	$("#email").val('');
}



}
