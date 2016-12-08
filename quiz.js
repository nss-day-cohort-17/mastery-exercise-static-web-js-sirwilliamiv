



var theChar = document.getElementById("characterId");
var theHeight = document.getElementById("heightId");
var active = document.activeElement;

// ----Submit button action---------------


function hereIStheAlert (e) {

        if( theHeight.value == "" || theChar.value == ""){

          alert("Both fields must have a value");

          }

        else {
          // var theTreeValues = {
          //   height: theHeight.value,
          //   char: theChar.value
          // }
          return tree({
            height: theHeight.value,
            char: theChar.value
          })
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

                             hereIStheAlert(e)

                          }
                })

// function () {
//   trunk.height = theHeight.value;
//   trunk.character = theChar.value;
// }
// Object----------------------------------
// empty function where the .value is set once event takes place (ie enter/click)




// -------------`tree` function-------------


function tree(trunk) {
  // var trunk = arguments[0]

  for (var i = 0 ; i < trunk.height; i++) {

   var treeLine = ""
   treeLine+=" ".repeat(trunk.height - (i +1)) +  trunk.char.repeat((i*2)+1)
   console.log(treeLine)

  }
}
