var link = document.querySelector(".search");
  var popup = document.querySelector(".search-content");

          link.addEventListener("click", function(event) {
            event.preventDefault();
            popup.classList.toggle("search-content-show");
          });
