

// QUIZ TIME

var user = {}
var responses = []


function question1() {
  var name = prompt('What is your name?')
  user.name = name
}

function question2() {

  var firstQuestion = prompt('Does null === 0 ? (Yes or No)')

// why do you need to convert the answer to lowercase?
  if (firstQuestion.toLowerCase() === 'yes') {
    firstQuestion = true
  } else if (firstQuestion.toLowerCase() === 'no') {
    firstQuestion = false
  } else {
// what if the user writes something other than yes or no? 
// they will have to answer the question again
    alert("Please answer either Yes or No");
    return question2();
  }
  responses.push(firstQuestion); // add the true or false value to the responses array
}


function question3() {
  
  var js = prompt('What was the original name for JavaScript: Java, LiveScript, JavaLive, or ScriptyScript?');
  js = js.toLowerCase();

  switch (js) {
    case "java":
    	secondQuestion = false;
    	break;

    case "livescript":
    	secondQuestion = true;
    	break;

    case "javalive":
    	secondQuestion = false;
    	break;

    case "scriptscript":
    	secondQuestion = false;
    	break;

    default:
    	alert("Please answer: Java, LiveScript, JavaLive, or ScriptyScript ");
    	return question3;
    	break;
  }
  responses.push(secondQuestion);

}

function evaluate(responsesArray) {

// declare two variables to store the totals
	var corrects = incorrects = 0;


// populate the “totals” variables from the “responsesArray”
	for (var i in responsesArray){
		if(responsesArray[i] === true){
			corrects++;
			console.log(corrects);
		}
		else{
			incorrects++;
		}
	}

// save the “totals” variables inside the user object
	user.corrects = corrects;
	user.incorrects = incorrects;

// call showResults
	showResults();
}

function showResults() {

// display the user results
	alert("Corrects answer: "+ user.corrects);
	alert("Incorrects answer: "+ user.incorrects);

}

// call the function, passing it the responses array


question1(); 

question2();

question3();

evaluate(responses);
