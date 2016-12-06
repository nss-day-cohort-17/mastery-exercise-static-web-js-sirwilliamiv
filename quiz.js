



var theChar = document.getElementById("characterId");
var theHeight = document.getElementById("heightId");
var active = document.activeElement;

// ----Submit button action---------------


function hereIStheAlert (e) {

        if( theHeight.value == "" || theChar.value == ""){

          alert("Both fields must have a value");

          }

        else {

          return tree(trunk)
        }

}



 document.querySelector("#growButton").addEventListener('click', hereIStheAlert)



var focusFIELDforHeight =  document.getElementById("heightId")
var focusFIELDforsymbol =  document.getElementById("characterId")



  focusFIELDforHeight.addEventListener('keypress', function(e) {

            if(e.keyCode === 13 ) {

               hereIStheAlert(e)

            }

})


  focusFIELDforsymbol.addEventListener('keypress', function(e) {

            if(e.keyCode === 13 ) {

               hereIStheAlert()

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
