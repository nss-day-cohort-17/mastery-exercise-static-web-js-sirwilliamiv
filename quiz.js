


var buildATree ="";

var theArray = [];


// Create a `tree` function
function tree() {


  //build the array
  //height - (height-1)
  //if height equals 2 only loop  twice
  //


  for (var i = 0 ; i < trunk.height; i++) {

   var treeLine = ""
   treeLine+=" ".repeat(trunk.height - (i +1)) +  trunk.Char.repeat((i*2)+1)
   console.log(treeLine)

  }








}

var  trunk = {

 height: 12,      // "put a getter for id of howTall text input"
 Char: "*"        //addeventlistener to whichChar textarea. then capture by keycode, key etc..

 }



// example of setting html to result of javscipt

// document.getElementById("holdingResult").innerHTML = (inputTemp - 32) * 5/9
//
//
//
// document.querySelector('#clearText').addEventListener('click', function() {
//     // console.log(temptemp)
//     document.getElementById('temptemp').value = "";
// //   }
// //
// //
// //
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






    // access object properties and do the stuff to build the tree
    // print character (objectName.whichKey) to console.log
    // go to next line (find the center???) print amount from previous line + 1  REPEAT

    // loop contingent on height property from user input  .length
    // start point contingent on  height as well
    //
    // how is the center determined?  line one = n
    //                                line two += n+2
    //                                line three= n + 2
