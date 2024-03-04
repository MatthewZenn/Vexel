const snips = ['ou', 'ea', 'it', 'oo', 'ee', 'oa', 'au', 'i', 'a', 'o'];
const prefix = ['sh', 'wh', 'st', 'th', 'pre', 'un', 'in', 'co', 'po', 'f', 'h', 'p', 'ph'];
const suffix = ['th', 'sh', 'ould', 'ld', 'ts', 'ght', 'is', 'ds', 'es', 'able', 'ize', 'rs', 'wds', 's', 't', 'ne', 'nes'];
var string = '';
var string2 = '';
var num = 0;
var output = '';

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

function gen(length) {
  output = '';
  for (i=0; i<length; i++) {
    string = '';
    string2 = ''; 
    num = Math.floor(Math.random() * (50 - 0 + 1) + 0);
    string += prefix.random()+snips.random()+suffix.random();
    string2 += prefix.random()+snips.random()+suffix.random();
    let number = Math.floor(Math.random() * 11) + 1;
    switch(number) {
      case 1:
        output += "var "+string+"="+num+";";
        break;
      case 2:
        output += "const "+string+"="+num+";";
        break;
      case 3:
        output += "document.querySelector('"+string+"').selectionStyle('"+string2+"');";
        break;
      case 4:
        output += "document.getElementById('"+string+"').innerHTML=="+string2+";";
        break;
      case 5:
        output += "var "+string+"=Math.random();";
        break;
      case 6:
        output += "document.getElementById('"+string+"').innerHTML=='"+string2+"';";
        break;
      case 7:
        output += "var "+string+"='"+string2+"';";
        break;
      case 8:
        output += "const "+string+"='"+string2+"';";
        break;
      case 9:
        output += "javascript.alert('"+string2+"');";
        break;
      case 10:
        output += "console.log('"+string2+"');";
        break;
      case 11:
        output += "window.close()";
        break;
    }
  }
}