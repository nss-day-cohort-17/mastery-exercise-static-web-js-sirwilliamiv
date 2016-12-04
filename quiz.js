



var theChar = document.getElementById("characterId");
var theHeight = document.getElementById("heightId");

// Object----------------------------------

var  trunk = {

 height: theHeight,
 Char: theChar

 }


// Create a `tree` function


 var buildATree = function tree(theChar, theHeight) {

  for (var i = 0 ; i < theHeight; i++) {

   var treeLine = ""
   treeLine+=" ".repeat(theHeight - (i +1)) +  theChar.repeat((i*2)+1)
   console.log(treeLine)

  }




// option 1-keypress events and check whether it was enter BUT NOT FROM 1996  .key
// option 2-listen for submt events
//
// IF  (TEXTAREA.ADDEVENTLISTENER(MOUSEOVER,)) ||  (TEXTAREA.ADDEVENTLISTENER(MOUSEOVER))
}




document.querySelector("#growButton").addEventListener('click', function() {



    console.log("hey you clicked")
    console.log(theHeight.value)
    console.log(theChar.value)








   })






// example of setting html to result of javscipt

// document.getElementById("holdingResult").innerHTML = (inputTemp - 32) * 5/9
//
//
//

// //   hitting enter to activate  function
// //    document.addEventListener('keypress', function(enter) {

//     // console.log(enter)
//     if (enter.keyCode === 13) {


//           var inputTemp = document.getElementById("temptemp").value
//               // console.log(typeof inputTemp)

//         if (document.querySelector('#toCelsius').checked === true ) {
//           radioCelsius(inputTemp)
//         }
//         else {
//           radioFahrenheit(inputTemp)

//         }

//     }
//   }
// )
