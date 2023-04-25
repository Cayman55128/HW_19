console.log("Your index.js file is loaded correctly!")

#mainContent {
    animation: slideUp 0.5s ease;
  }


  document.getElementById("findBallsLink").addEventListener("click", function(event) {
    event.preventDefault();
    var mainContent = document.getElementById("mainContent");
    mainContent.innerHTML = `