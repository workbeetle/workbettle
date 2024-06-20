//const carouselSlide = document.querySelector('.carousel-slide');
//const carouselImages = document.querySelectorAll('.carousel-slide img');

//let counter = 0;
//const size = carouselImages[0].clientWidth;

//function moveCarousel() {
  //  carouselSlide.style.transition = 'transform 1s ease';
  //  counter++;
  //  carouselSlide.style.transform = `translateX(${-size * counter}px)`;

   // if (counter >= carouselImages.length - 1) {
     //   setTimeout(() => {
       //     carouselSlide.style.transition = 'none';
         //   counter = 0;
           // carouselSlide.style.transform = `translateX(${-size * counter}px)`;
      //  }, 1000); // 1s is the same as the transition duration
   // }
// }

// setInterval(moveCarousel, 3000); // Move every 3 seconds


function navigateToContact() {
    window.location.href = 'contact.html';
}


// owl.js

// owl.js

// owl.js

function loadPopup() {
  fetch('contactpop.html')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.text();
      })
      .then(html => {
          document.getElementById('contact-popup-container').innerHTML = html;
          
          // Load and execute contactpop.js script
          var script = document.createElement('script');
          script.src = 'contactpop.js';
          script.onload = function() {
              console.log('contactpop.js loaded successfully');
          };
          script.onerror = function() {
              console.error('Failed to load contactpop.js');
          };
          document.body.appendChild(script);
      })
      .catch(error => {
          console.error('Failed to load contact popup:', error);
      });
}

// Load the popup when the page loads
window.onload = loadPopup;
