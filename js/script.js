
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



function random_bg_color() {
var bgColor = "#" + (makeid(6));
document.body.style.backgroundColor = bgColor; 

console.log(bgColor);

var tostring = String(bgColor);

document.getElementById("addtext").innerHTML = tostring;

}



document.getElementById('test').onclick = random_bg_color; 
