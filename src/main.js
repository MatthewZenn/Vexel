const canvas = document.getElementById('cvs');
const ctx = canvas.getContext('2d');
const realButton = document.getElementById("picture");
const image = document.getElementById('image');

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
  var imageData2 = ctx.getImageData(0, 0, canvas.width, canvas.height);

  for(let i=0; i<imageData2.data.length; i+=4) {
    if (imageData2.data[i] < 128) {
      document.getElementById('canvas').innerHTML += " ";
    }
    else {
      document.getElementById('canvas').innerHTML += ".";
    }
  }
});

document.getElementById('generate').addEventListener('click', () => {
  gen(150)
  document.getElementById('code').innerHTML = output;
});