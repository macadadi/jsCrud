function formSubmit() {
	validate();
	// body...
}

function validate(){
	isValid = true;
	if(document.getElementById('fullName').value==''){
		document.getElementById('fullNameValidationError').classList.remove('hide');
		isValid = false;
	}else{
		if(!document.getElementById('fullNameValidationError').classList.contains('hide')){
			document.getElementById('fullNameValidationError').classList.add('hide')

		}
	}
}