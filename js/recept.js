// ovde uzimamo taj modal sto smo napravili
var modal = document.getElementById("myModal");
// ovde smestamo sliku u promenljivu Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var close = document.getElementsByClassName("close")[0];
// Get the <span> element that closes the modal

function showImg(slika){
    modal.style.display = "block";
    modalImg.src = slika.src;      
    captionText.innerHTML = slika.alt;
    }

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  modal.style.display = "none";
}