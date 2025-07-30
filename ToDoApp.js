

function Add() {


    var Ptag = document.createElement("p");

    var BDelete = document.createElement("button");
    BDelete.textContent = "delete";
    BDelete.classList.add('Task');
    var text = document.getElementById("AddTask").value;
    Ptag.textContent = text;
    console.log(text);


    Ptag.classList.add('Task');
    // document.getElementsByClassName("Task").setAttribute("type", "checkbox"); 
    const element = document.getElementById("DisplayTask");
    element.appendChild(Ptag);

}