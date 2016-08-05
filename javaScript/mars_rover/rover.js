var myRover = {
  name : "R1",
  position: [0,0], 
  direction: 'N',
  cardinal_points : 'NESW',
  column : 10,
  row : 10
};

var myRover2 = {
  name : "R2",
  position: [9,9], 
  direction: 'S',
  cardinal_points : 'NESW',
  column : 10,
  row : 10
};

function goTopGrid(rover){
  var error = "";
  if (rover.position[0] < rover.row){
    if(grid[rover.position[0]+ 1][rover.position[1]] === ''  ){
      rover.position[0]++
    }else{
      error = "Accident";
    }

  }
  else{
    error = "Outside the boundaries!!";
  }
  return error;
}


function goBottonGrid(rover){

  var error = ""

  if(rover.position[0] > 0){
    if (grid[rover.position[0]-1][rover.position[1]] === '' ){
      rover.position[0]--
    }else{
      error = "Accident!!";
    }
    
  }else{
    error = "Outside the boundaries!!";
  }
  return error;
}

function goLeftGrid(rover){
  var error = "";
  if (rover.position[1] < grid[0].length){
    if (rover.position[pos[0]][rover.position[1]+1] === '' ){
      rover.position[1]++
    }else{
      error = "Accident!!"
    }
  }else{
    error = "Outside the boundaries!!";
  }

  return error;
}

function goRigthGrid(rover){

  var error = "";

  if(rover.position[1] > 0){
    if (grid[rover.position[0]][rover.position[1]-1] === ''){
      rover.position[1]--  
    }else{
      error = "Accident!!"
    }
  }else{
    error = "Outside the boundaries!!";
  }
  return error;
}



function goForward(rover) {
  var error = false;
  var pos = [rover.position[0], rover.position[1]];

  //compruebo no salirme del grid y no chocarme
  switch(rover.direction) {
    case 'N':
      error = goTopGrid(rover,grid);
      break;

    case 'E':
      error = goRigthGrid(rover);
      break;

    case 'S':
      error = goBottonGrid(rover);
      break;

    case 'W':
      error = goLeftGrid(rover);
      break;
  };

  if(error){
    alert(error + " You lost! ");
  }
  else{
    rover.position = pos;  
    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
  }

  
}

/*

function goForward(rover) {
  var error = false;
  var pos = [rover.position[0], rover.position[1]];

  //compruebo no salirme del grid y no chocarme
  switch(rover.direction) {
    case 'N':
      if (pos[0] < rover.row){
        if(grid[pos[0]+1][pos[1]] === ''  ){
          pos[0]++
        }else{
          error = "Accident";
        }

      }
      else{
        error = "Outside the boundaries!!";
      }
      break;

    case 'E':
      if (pos[1] < rover.column){
        if (grid[pos[0]][pos[1]+1] === '' ){
          pos[1]++
        }else{
          error = "Accident!!"
        }
      }else{
        error = "Outside the boundaries!!";
      }
      break;

    case 'S':
      if(pos[0] > 0){
        if (grid[pos[0]-1][pos[1]] === '' ){
          pos[0]--
        }else{
          error = "Accident!!";
        }
        
      }else{
        error = "Outside the boundaries!!";
      }
      break;

    case 'W':
      if(pos[1] > 0){
        if (grid[pos[0]][pos[1]-1] === ''){
          pos[1]--  
        }else{
          error = "Accident!!"
        }
      }else{
        error = "Outside the boundaries!!";
      }
      break;
  };

  if(error){
    alert(error + " You lost! ");
  }
  else{
    rover.position = pos;  
    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
  }

  
}
*/

function goBack(rover) {
  var error = "";
  var pos = [rover.position[0], rover.position[1]];

  //compruebo no salirme del grid y no chocarme
  switch(rover.direction) {
    case 'N':
      if (pos[0] > 0){
        if (grid[pos[0]-1][pos[1]] === ''  ){
          pos[0]++
        }else{
          error = "Accident!!";
        }
      }
      else{
        error = "Outside the boundaries!!";
      }
      break;

    case 'E':
      if (pos[1] > 0 ){
        if (grid[pos[0]][pos[1]-1] === '' ){
          pos[1]++
        }else{
          error = "Accident!!";
        }
      }else{
        error = "Outside the boundaries!!";
      }
      break;

    case 'S':
      if(pos[0] < rover.row){
        if(grid[pos[0]+1][pos[1]] === '' ){
          pos[0]--; 
        } else{
          error = "Accident!!";
        }
      }else{
        error = "Outside the boundaries!";
      }
      break;

    case 'W':
      if(pos[1]  < rover.column ){
        if (grid[pos[0]][pos[1]+1] === ''){
          pos[1]--
        }else{
          error = "Accident!!"
        }  
      }else{
        error = "Outside the boundaries!";
      }
      break;
  };

  if(error){
    alert(error +" You lost! ");
  }
  else{
    rover.position = pos;  
  }



  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}


function turnRigth(rover){

  pos = rover.cardinal_points.indexOf(rover.direction); //posicion de la direccion actual
  new_pos =  (pos + 1) % 4; //incremento en una la direccion. Rotacion a la derecha.
  console.log("pos: "+ pos +" new pos: "+ new_pos);
  rover.direction = rover.cardinal_points.charAt(new_pos);

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function turnLeft(rover){

  var pos = rover.cardinal_points.indexOf(rover.direction); //posicion de la direccion actual
  var new_pos = 0;

  if (pos != 0){
    new_pos = (pos - 1) % 4; //decremento en una la direccion. Rotacion a la izquierda.
  }else{
    new_pos = 3; 
  }
  
  rover.direction = rover.cardinal_points.charAt(new_pos);

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function createGrid(row, column) {
  
  console.log("estoy aqui");
  var array = new Array(row); // crea una matriz de longitud 4
  
  for (var i = 0; i < row; i++) {
    array[i] = new Array(column); // define cada elemento como una matriz de longitud 4
    for (var j = 0; j < column; j++) {
      array[i][j] = ""; 
    }
  }
  return array;
}

function addObstacles(array){

  aux = [0,0]

  for (var i in array){
    for (var j in array[i]){
      aux[j] = array[i][j];
    }
    
    grid[aux[0]][aux[1]] = "X";
    aux = [0,0];
  }

  //¿Es necesario que devuelva el grid o como se pasa por referencia no hace falta?
}

function movRover(rover, command) {
  for (var i = 0; i < command.length; i++ ){
    mov = command.charAt(i);

    directions = {'f': goForward}

    directions[mov](rover)

    switch(mov){
      case 'f':
        goForward(rover);
        break;
      case 'b':
        goBack(rover);
        break;
      case 'r':
        turnRigth(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
    }
    
    grid[rover.position[0]][rover.position[1]] = rover.name;
  }
}

//##################### Ejecucion #############################

var grid = createGrid(10,10);
grid = addObstacles([[1,1], [2,3], [3,9], [5,6] ,[6,3], [7,3] ,[8,8]] , grid);

exp = /^[fblr]*$/ //Expresion regular que verifica que solo puede haber 'f', 'b', 'l' o 'r'.
flag = false;
var command = comman2 = "";

do {
  command = prompt("Rover 1. What is the command? \n\tf: go forward \n\tb: go back \n\tl: turn left \n\tr: turn right");
  
  if (!exp.test(command)){
    alert("Wrong pattern");
    flag = true;
  }else{
    flag = false;
  }

}while (flag);

do {
  command2 = prompt("Rover 2. What is the command? \n\tf: go forward \n\tb: go back \n\tl: turn left \n\tr: turn right");
  
  if (!exp.test(command)){
    alert("Wrong pattern");
    flag = true;
  }else{
    flag = false;
  }

}while (flag);

movRover(myRover, command);
movRover(myRover2, command2);















/*



var myVar = "Prueba de una matriz multidimensional;";
var nb = 4; 
var a = new Array(nb); // crea una matriz de longitud 4
for (var i = 0; i < nb; i++) {
   a[i] = new Array(nb); // define cada elemento como una matriz de longitud 4
   for (var j = 0; j < nb; j++) {
      a[i][j] = "[" + i + "," + j + "]"; // asigna a cada elemento de la matriz bidimensional 
                                         // los valores de i y j
   }
}
for (var i = 0; i < nb; i++) {
   var str = "Fila " + i + ":";
   for (var j = 0; j < nb; j++) {
      str += a[i][j]; // añade a la cadena el contenido de la matriz bidimensional
   }
   myVar += str + "; "; // añade a la cadena original el resultado obtenido por cada iteración
}


*/