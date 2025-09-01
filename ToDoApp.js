function Add() {
   // Add Task
 
var Ptag = document.createElement("p");
// I use trim() function for not i want white space
var text = document.getElementById("AddTask").value.trim();
Ptag.textContent = text;
Ptag.classList.add('Task');

Ptag.setAttribute("type", "checkbox");


// Add check button
var input = document.createElement("input");
  input.setAttribute("type", "checkbox");
 // Add Div
var div = document.createElement("div");
 div.classList.add('Divshadow');
// Add Div another div for button float left
var BDiv = document.createElement("div");
BDiv.classList.add('btnSide');


// Add edit button
var BEdit = document.createElement("button");
//  BEdit.textContent = "edit";
BEdit.type = 'button';
BEdit.classList.add('Editb');
BEdit.classList.add('fa');
BEdit.classList.add('fa-edit');








 // Add Delete button
 var BDelete = document.createElement("button");
 BDelete.textContent = "delete";
 BDelete.classList.add('Deleteb');
 BDelete.classList.add('material-icons');
const element = document.getElementById("DisplayTask");
div.appendChild(input);
div.appendChild(Ptag);
BDiv.appendChild(BEdit);
BDiv.appendChild(BDelete);
div.appendChild(BDiv);
if(text != "")
{
  element.appendChild(div);
  console.log(document.getElementById("AddTask"));
  console.log("Hello pankaj")
}
else{
    alert("Please fill the task");

}



// // remove text from input tag after that send
document.getElementById("AddTask").value = "";


// // Delete the data when you press delete
BDelete.addEventListener('click', Dele);


BEdit.addEventListener('click', edit);




// The function is used for delete the task
function Dele() {
  div.remove();
  
}

// The function is used for delete the task
function edit() {
 
  var editText = prompt("Edit the task");
  Ptag.textContent  = editText;
 
}

}








