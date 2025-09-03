const timeObject = [];
const dataObject = [];
function Add() {
   // Add Task
 
var Ptag = document.createElement("p");
// I use trim() function for not i want white space
var text = document.getElementById("AddTask").value.trim();
Ptag.textContent = text;
Ptag.classList.add('Task');


Ptag.setAttribute("type", "checkbox");

// Add time

var time = document.createElement("p");
var timeNumber = document.getElementById("time").value.trim();
time.textContent = timeNumber;
time.classList.add('Task');
 timeObject.push(timeNumber);
console.log(timeObject);

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
div.appendChild(time);
BDiv.appendChild(BEdit);
BDiv.appendChild(BDelete);
div.appendChild(BDiv);

// data store in array for time to set data
dataObject.push(div);

// time ko check karne keliye hai

// var length = dataObject.length;
// console.log(length);
//  timeObject.forEach(number => {
//   var tmp;
//     var increase = number +1;
//     if(number < increase){
//        tmp =timeObject.number;
//       timeObject.number = timeObject.increase;
//       timeObject.increase =tmp;
//        //console.log("The time is big");
//     }
     
//  });
if(text != "")
{
  element.appendChild(div);
  
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

// The function is used for Edit the task and time
function edit() {
 
 
  var input = prompt("Enter task and time:");

// Split the input into task and time
var parts = input.split(",");

var editText = parts[0]?.trim();
var resetTime = parts[1]?.trim();



  Ptag.textContent  = editText;
  time.textContent = resetTime;
}

}








