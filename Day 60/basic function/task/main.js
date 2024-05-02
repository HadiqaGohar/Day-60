function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  }
  // or

  function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
  }


  function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }

  // or
  function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
  }

  function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }



  min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
// or
function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

  function min(a, b) {
    return a < b ? a : b;
  }




pow(3, 2) = 3 * 3    // =9
pow(3, 3) = 3 * 3 * 3// = 27
pow(1, 100) = 1 * 1  //*...* 1 = 1
//or
function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }