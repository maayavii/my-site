document.addEventListener("DOMContentLoaded", function() {
    var searchIcon = document.getElementById("search-icon");
    var searchBar = document.getElementById("search-bar");
  
    searchIcon.addEventListener("click", function(event) {
      searchBar.style.display = "block";
      searchBar.focus();
      searchIcon.style.display = "none"; // Hide the search icon
      event.stopPropagation();
    });
  
    searchBar.addEventListener("blur", function() {
      searchBar.style.display = "none";
      searchIcon.style.display = "inline-block"; // Show the search icon when closing the search bar
    });
  
    // Close the search bar if the user presses the "Escape" key
    document.addEventListener("keydown", function(event) {
      if (event.key === "Escape") {
        searchBar.style.display = "none";
        searchIcon.style.display = "inline-block"; // Show the search icon when closing the search bar
      }
    });
  
    // Close the search bar if the user clicks outside the search bar
    document.addEventListener("click", function(event) {
      if (!searchBar.contains(event.target) && event.target !== searchIcon) {
        searchBar.style.display = "none";
        searchIcon.style.display = "inline-block"; // Show the search icon when closing the search bar
      }
    });
  });




  var isAnimationStopped = false;

function stopAnimation() {
  isAnimationStopped = !isAnimationStopped;
}

document.addEventListener("click", function(event) {
  if (isAnimationStopped) {
    isAnimationStopped = false;
  } else {
    isAnimationStopped = true;
  }
});

function updateAnimation() {
  if (!isAnimationStopped) {
    requestAnimationFrame(updateAnimation);
    document.querySelector('.image-container').style.animation = 'slideLeft 10s linear infinite';
  } else {
    document.querySelector('.image-container').style.animation = "none";
  }
}

// Start the animation
updateAnimation();

  