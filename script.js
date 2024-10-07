const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Smooth scrolling for anchor links
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);

//Smooth scrolling to the target section    
  window.scrollTo({
    top: targetSection.offsetTop - 60, // Adjust this based on your fixed header height
    behavior: "smooth"
    });

//Close mobile menu after scrolling
  if (document.body.classList.contains("show-mobile-menu")){
    menuOpenButton.click();
  }
});
});

//Learn more Button Functionality
document.querySelector('#learn-more').addEventListener("click", function(event) {
  event.preventDefault();

// Scroll to About section
    document.querySelector("#about-section").scrollIntoView({ behavior: "smooth" });

// Show the hidden portfolio info section
    document.querySelector("#portfolio-info").style.display = "block";
  });


// //Learn more button scroll to about section
// learnMoreButton.addEventListener("click", function(e) {
//   e.preventDefault();
//   const aboutSection = document.getElementById("about-section");

//   window.scrollTo({
//     top:aboutSection.offsetTop - 60, //Adjust the offset for the fixed header
//     behavior: "smooth"
//   });
// });


//Initialization Swiper
const swiper = new Swiper('.slider-wrapper', {
  // // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Fade-in effect when scrolling into view
const fadeInElements = document.querySelectorAll(".fade-in");

const fadeInOnScroll = () => {
  fadeInElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  });
};

window.addEventListener("scroll", fadeInOnScroll);

// Initialize on page load in case elements are already in view
fadeInOnScroll();


document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
});
