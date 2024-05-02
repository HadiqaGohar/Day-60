function sayHi() {
    alert( "Hello" );
  }


  let sayHi = function() {
    alert( "Hello" );
  };


  function sayHi() {
    alert( "Hello" );
  }
  
  alert( sayHi ); // shows the function code


  function sayHi() {   // (1) create
    alert( "Hello" );
  }
  
  let func = sayHi;    // (2) copy
  
  func(); // Hello     // (3) run the copy (it works)!
  sayHi(); // Hello    //     this still works too (why wouldn't it)


  let sayHi = function() { // (1) create
    alert( "Hello" );
  };
  
  let funct = sayHi;
  // ...


  function sayHi() {
    // ...
  }
  
  let sayHi = function() {
    // ...
  };