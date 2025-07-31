

function Add() {

     // Add Task
    var Ptag = document.createElement("p");
    var text = document.getElementById("AddTask").value;
    Ptag.textContent = text;
    Ptag.classList.add('Task');
    console.log(Ptag);
    Ptag.setAttribute("type", "checkbox");
     
    // Add check button
    var input = document.createElement("input");
      input.setAttribute("type", "checkbox");
    
    // Add Div
    var div = document.createElement("div");
    // Add Div another div for button float left
    var BDiv = document.createElement("div");
    BDiv.classList.add('btnSide');

    // Add edit button
    var BEdit = document.createElement("button");
    BEdit.textContent = "edit";
    BEdit.classList.add('BEdit');

     // Add Delete button
     var BDelete = document.createElement("button");
     BDelete.textContent = "delete";
     BDelete.classList.add('BDelete');
   
    const element = document.getElementById("DisplayTask");
    div.appendChild(input);
    div.appendChild(Ptag);
    BDiv.appendChild(BEdit);
    BDiv.appendChild(BDelete);
    div.appendChild(BDiv);
    element.appendChild(div);


   
}