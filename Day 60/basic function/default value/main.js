function showMessage(from, text = "no text given") {
    alert( from + ": " + text );
  }
  
  showMessage("Ann"); // Ann: no text given


  showMessage("Ann", undefined); // Ann: no text given


  function showMessage(from, text = anotherFunction()) {
    // anotherFunction() only executed if no text given
    // its result becomes the value of text
  }

  // old code 
  function showMessage(from, text) {
    if (text === undefined) {
      text = 'no text given';
    }
  
    alert( from + ": " + text );
  }

//   function showMessage(from, text) {
//     // If the value of text is falsy, assign the default value
//     // this assumes that text == "" is the same as no text at all
//     text = text || 'no text given';
//     ...
//   }

// alternating default parameter
function showMessage(text) {
    // ...
  
    if (text === undefined) { // if the parameter is missing
      text = 'empty message';
    }
  
    alert(text);
  }
  
  showMessage(); // empty message


//   function showMessage(text) {
//     // if text is undefined or otherwise falsy, set it to 'empty'
//     text = text || 'empty';
//     ...
//   }


function showCount(count) {
    // if count is undefined or null, show "unknown"
    alert(count ?? "unknown");
  }
  
  showCount(0); // 0
  showCount(null); // unknown
  showCount(); // unknown