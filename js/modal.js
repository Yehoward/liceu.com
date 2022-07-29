function createModal(img) {
  // Get the modal
  var modal = document.getElementById('modal');

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var modalImg = document.getElementById("modalImg");
  var captionText = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}

// When the user clicks on <span> (x), close the modal
function closeModal () { 
  var modal = document.getElementById('modal');
  modal.style.display = "none";
}

