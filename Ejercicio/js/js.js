function validar(){

	if (document.form.txtemail.value == ""){

			alert('Debera de ingresar email');
            document.form.txtusuario.focus();
		    return;
        
    }if(document.form.txtpass.value == ""){
            alert('Debera de ingresar Clave');
			document.form.txtusuario.focus();
            return;
    }
    if(document.form.txtemail.value == "mono@sad.com" && document.form.txtpass.value == "12345"){
            alert('Claves correctas');
            window.open('holamundo.html');
     
    }
}
