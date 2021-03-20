

function formSubmit() {
	if(validate()){
		console.log(2)
		let formData = readFormData();
		if(selectedRow == null){
			insertNewRecord(formData)
		}else{
			console.log(1)
			updateRecord(formData)
		}
		resetForm()
	}
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
 	let table = document.getElementById('employeeList').getElementByTagName('tbody')[0];
 	let newRow = table.insertRow(table.length);
 	cell1 = newRow.insertCell(0);
 	cell1.innerHTML =data.fullName;
 	cell2 = newRow.insertCell(1);
 	cell2.innerHTML = data.email;
 	cell3 = newRow.insertCell(2)
 	cell3.innerHTML = data.city
 	cell4 = newRow.insertCell(3);
 	cell4.innerHTML = data,salary
 	cell5 = newRow.insertCell(4)
 	cell5.innerHTML = "<a onClick='onEdit(this)'>Edit </a> <a onClick='onDelete(this)'> delete </a>"

 }

 function onEdit(td){
 	selectedRow = td.parentElement.parentElement;
 	document.getElementById('fullName').value = selectedRow.cell[0].innerHTML
 	document.getElementById('email').value = selectedRow.cell[1].innerHTML
 	document.getElementById('city').value = selectedRow.cell[2].innerHTML
 	document.getElementById('salary').value = selectedRow.cell[3].innerHTML
 }


 function updateRecord(formData){
 	selectedRow.cell[0].innerHTML = formData.fullName
 	selectedRow.cell[1].innerHTML = formData.email
 	selectedRow.cell[2].innerHTML = formData.city
 	selectedRow.cell[3].innerHTML = formData.salary
 }

 function onDelete(){
 	if(confirm('are you sure')){
 		row = td.parentElement.parentElement;
 		document.getElementById('employeeList').deleteRow(row.rowIndex)
 		resetForm()
 	}
 }