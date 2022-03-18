
function popup(IdMosal, IdImg,IdModalImg, IdCaption, ClasseSpan){  

  // Get the modal
  var modal = document.getElementById(IdMosal);

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById(IdImg);
  var modalImg = document.getElementById(IdModalImg);
  var captionText = document.getElementById(IdCaption);
  
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName(ClasseSpan)[0];
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
}

