let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

attempt.value = 0;

function guess() {
  console.log("guess-enter");
  console.log("guess-[attempt.value:" + attempt.value + "]");
  console.log("guess-[answer.value:" + answer.value + "]");

  if (attempt.value == 0 || answer.value == '') {
    setHiddenFields();
  }

  let input = document.getElementById('user-guess');
  //add functionality to guess function here

  if (! validateInput(input.value)) {
    return false;
  }
  
  var num_attempts = parseInt(attempt.value) + 1;
  attempt.value = num_attempts;

  if (getResults(input) && num_attempts < 10) {
    setMessage("You Win! :)");
  } else if (num_attempts == 10) {
    setMessage("You Lose! :(");
  } else {
    setMessage("Incorrect, try again.");
  }

  //console.log("user-guess:" + input.value);
  //console.log("answer:" + answer.value);
  //console.log("attempt:" + attempt.value);
}

//implement new functions here

function setHiddenFields() {
  console.log("setHiddenFields-enter");

  //console.log("attempt.value: " + attempt.value);
  value_to_set = (Math.floor(Math.random() * 10000)).toString();

  if (value_to_set.length > 4) {
    value_to_set = value_to_set.substring(0,3);
  } else if (value_to_set.length < 4) {
    while (value_to_set.length < 4) {
      value_to_set = "0" + value_to_set;
    }
  }

  //answer.value = value_to_set;
  document.getElementById('answer').value = value_to_set;

  console.log("setHiddenFields-exit");
}

function setMessage(value) {
  document.getElementById('message').innerHTML = value;
}

function validateInput(value) {
  if (value.length === 4) {
    return true;
  } else {
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
}

function getResults(input) {
//function getResults() {
  //to_add =
  //document.getElementById('results').innerHTML = value;
  //console.log("getResults-enter");
  //let input1 = document.getElementById('user-guess').value

  var ivalue = input.value;
  var avalue = answer.value;

  //console.log("input:" + input);
  //console.log("ivalue:" + ivalue);
  //console.log("avalue:" + avalue);
  //console.log("ivalue.length:" + ivalue.length);

  var ok = "<span class='glyphicon glyphicon-ok'></span>";
  var transfer = "<span class='glyphicon glyphicon-transfer'></span>"
  var remove = "<span class='glyphicon glyphicon-remove'></span>";

  var result = "<div class='row'><span class='col-md-6'>" + ivalue + "</span><div class='col-md-6'>";
  var count = 0;

  for (var i = 0; i < ivalue.length; i++) {
    if (ivalue[i] == avalue[i]) {
      result += ok;
      count++;
    } else if (ivalue.indexOf(avalue[i]) == -1) {
      result += remove;
    } else {
      result += transfer;
    }
  }

  result += "</div></div>";

  document.getElementById('results').innerHTML = result;

  //console.log(result);

  if (count == 4) {
    return true;
  } else {
    return false;
  }
}

function showReplay() {
    document.getElementById('guessing-div').style = 'display: none';
    document.getElementById('replay-div').style = 'display: block';
}

//
