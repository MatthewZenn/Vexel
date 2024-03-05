const canvas = document.getElementById('cvs');
const ctx = canvas.getContext('2d');
const realButton = document.getElementById("picture");
const image = document.getElementById('image');

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9']

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

document.getElementById("place").addEventListener('click', function() {
  realButton.click();
});

realButton.addEventListener("change", function() {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();
    reader.addEventListener("load", function() {
      image.setAttribute('src', this.result);
    });
    reader.readAsDataURL(file);
  }
});

image.addEventListener('load', e => {
  document.getElementById('canvas').innerHTML = ""
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
});

document.getElementById('generate').addEventListener('click', () => {
  var chars = [];
  gen(150)
  document.getElementById('code').innerHTML = output;
  var imageData2 = ctx.getImageData(0, 0, canvas.width, canvas.height);
  chars = output.split(''); 
  console.log(chars);
  chars.forEach((item, i) => { if (item == " ") chars[i] = " "; });

  for(let i=0; i<imageData2.data.length; i+=4) {
    if (imageData2.data[i] < 128) {
      document.getElementById('canvas').innerHTML += " ";
    }
    else {
      document.getElementById('canvas').innerHTML += ".";
    }
  }
});

function getSel() // JavaScript
{
    var txtarea = document.getElementById("canvas");
    var start = txtarea.selectionStart;
    var finish = txtarea.selectionEnd;
    console.log(finish-start);
}