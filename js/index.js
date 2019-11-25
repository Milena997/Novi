
  function myFunctionTwo() {
    var dotsTwo = document.getElementById("dotsTwo");
    var moreTextTwo = document.getElementById("moreTwo");
    var btnTextTwo = document.getElementById("myBtnTwo");
  
    if (dotsTwo.style.display === "none") {
      dotsTwo.style.display = "inline";
      btnTextTwo.innerHTML = "Prikaži više"; 
      moreTextTwo.style.display = "none";
    } else {
      dotsTwo.style.display = "none";
      btnTextTwo.innerHTML = "Prikaži manje"; 
      moreTextTwo.style.display = "inline";
    }
  }

  function myFunctionThree() {
    var dotsThree = document.getElementById("dotsThree");
    var moreTextThree = document.getElementById("moreThree");
    var btnTextThree = document.getElementById("myBtnThree");
  
    if (dotsThree.style.display === "none") {
      dotsThree.style.display = "inline";
      btnTextThree.innerHTML = "Prikaži više"; 
      moreTextThree.style.display = "none";
    } else {
      dotsThree.style.display = "none";
      btnTextThree.innerHTML = "Prikaži manje"; 
      moreTextThree.style.display = "inline";
    }
  }