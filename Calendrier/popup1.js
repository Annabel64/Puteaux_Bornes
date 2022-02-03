/*// Get the modal
alert("khgflm");

var modal = document.getElementById('myModal');
alert(modal);


// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

alert(img);
alert(modalImg);
alert(captionText);
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}*/

 //Marche 
function changeColor(newColor) {
  var elem = document.getElementById('para');
  alert(elem);
  elem.style.color = newColor;
}