



var theChar = document.getElementById("characterId");
var theHeight = document.getElementById("heightId");
var active = document.activeElement;

// ----Submit button action---------------


var runFunction = document.querySelector("#growButton").addEventListener('click', function() {

        if( theHeight.value == "" || theChar.value == ""){

          alert("Both fields must have a value");

        }

      else {

      return tree(trunk)
  }

   })



document.addEventListener('keypress', function(enter) {

  if(enter.keyCode === 13 ) {

    // console.log("you hit the enter button")


    return tree(trunk)

  }

})


// Object----------------------------------

var  trunk = {

 height: theHeight,
 Char: theChar

 }


// -------------`tree` function-------------


function tree() {

  for (var i = 0 ; i < theHeight.value; i++) {

   var treeLine = ""
   treeLine+=" ".repeat(theHeight.value - (i +1)) +  theChar.value.repeat((i*2)+1)
   console.log(treeLine)

  }
}






// option 1-keypress events and check whether it was enter BUT NOT FROM 1996  .key
// option 2-listen for submt events
//














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
