//Choose a random color



// document.getElementById('test').onclick = random_bg_color; 


// function random_bg_color() {
//     var x = Math.floor(Math.random() * 256);
//     var y = Math.floor(Math.random() * 256);
//     var z = Math.floor(Math.random() * 256);
//    // var bgColor = "rgb(" + x + "," + y + "," + z + ")";

//    var bgColor = "#" + x + y + z;
//  console.log(bgColor);
  
//  document.body.style.backgroundColor = bgColor; 
//     }

function makeid(length) {
    var result           = '';
    var characters       = 'abcdef123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

console.log(makeid(6));

function random_bg_color() {
var bgColor = "#" + (makeid(6));
document.body.style.backgroundColor = bgColor; 

console.log(bgColor);

}



document.getElementById('test').onclick = random_bg_color; 




//function changeColor() {
//   document.getElementById("container").style.backgroundColor = "rgb(Math.floor(Math.random()),34,56)";
//}  