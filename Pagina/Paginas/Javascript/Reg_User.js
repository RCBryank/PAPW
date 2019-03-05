// JavaScript Document


function Validacion(){
	
 
	
	var name = document.getElementById("username").value;
	   
	
	
	var user = document.getElementById("nick").value;
	
	if(user.length<6){
	alert('Usuario debe ser de 6 caracteres minimo');
	//document.form.nick.focus();
	return false;	
	
	}
	
	
	var contraseña = document.getElementById("pass").value;
	const pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
	
	if(pattern.test(contraseña)===false){
	alert('Formato de contraseña incorrecto');
	//document.form.pass.focus();
	return false;	
	}
	
	
	
}