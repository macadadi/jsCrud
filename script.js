let selectedRow = null
 formSubmit() {
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

 function readFormData(){
 	let formData = {};
 	formData['fullName']=document.getElementById('fullName').value;
 	formData['email']= document.getElementById('email').value;
 	formData['city']= document.getElementById('city').value;
 	formData['salary']= document.getElementById('salary').value


 	return formData

 }

 function resetForm(){
 	document.getElementById('fullName').value = '';
 	document.getElementById('email').value = '';
 	document.getElementById('city').value = '';
 	document.getElementById('salary').value = '';
 	selectedRow = null;
 }

 function insertNewRecord(data){
 	
 }