
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);


  function addToDoItem() {

    //guardar el valor de entrada y crear un elemento nuevo
    var input = document.getElementById('todo-input').value
    document.getElementById('todo-input').value = ""

    var textNewItem = document.createTextNode(input);
    var newItem = document.createElement('li');

    //añadimos el texto a li
    newItem.appendChild(textNewItem);

    var divToDo = document.getElementsByClassName("todo-list")[0];
    var newItemParent = divToDo.getElementsByTagName("ul")[0];
    newItemParent.appendChild(newItem);

    //var nuevoEnlace = document.createElement("a"); 

    // add your code here
    // this should create a new list item in the to-do list
    // and set the text as the input from the todo-input field
  }

  function markAsDone() {

    var divToDo = document.getElementsByClassName("todo-list")[0];
    var doneItem = divToDo.getElementsByTagName("li")[0];
    doneItem.classList.add('done');

    var divDone = document.getElementsByClassName("done-list")[0];
    var parentDoneItem = divDone.getElementsByClassName("done-list-items")[0];
    parentDoneItem.appendChild(doneItem);

    
//esto es si no queda nada en to-do

    doneButton.classList.add('liked');
    doneButton.innerHTML = "Liked!";
    document.querySelector('h1').style.color = "red";

  }
  
}
