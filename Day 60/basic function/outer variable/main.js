let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // Hello, John



let usersName = 'John';

function showMessage() {
  usersName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + usersName;
  alert(message);
}

alert( usersName ); // John before the function call

showMessage();

alert( usersName ); // Bob, the value was modified by the function


let userNames = 'John';

function showMessage() {
  let userNames = "Bob"; // declare a local variable

  let message = 'Hello, ' + userNames; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage();

alert( userNamesindex.html ); // John, unchanged, the function did not access the outer variable