//Choose a random color



document.getElementById('test').onclick = random_bg_color; 


function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
 document.body.style.backgroundColor = bgColor; 
    }


//function changeColor() {
//   document.getElementById("container").style.backgroundColor = "rgb(Math.floor(Math.random()),34,56)";
//}  