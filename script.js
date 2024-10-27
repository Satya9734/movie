// var swiper = new Swiper(".home", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
   
//   });
  const underlineElement = document.querySelector('.underline');

    window.addEventListener('scroll', () => {
      const rect = underlineElement.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        underlineElement.classList.add('in-view');
      } else {
        underlineElement.classList.remove('in-view');
      }
    });

  const underlineElement2 = document.querySelector('.underline2');

    window.addEventListener('scroll', () => {
      const rect = underlineElement2.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        underlineElement2.classList.add('in-view');
      } else {
        underlineElement2.classList.remove('in-view');
      }
    });

  const underlineElement3 = document.querySelector('.underline3');

    window.addEventListener('scroll', () => {
      const rect = underlineElement3.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        underlineElement3.classList.add('in-view');
      } else {
        underlineElement3.classList.remove('in-view');
      }
    });
  const underlineElement4 = document.querySelector('.underline4');

    window.addEventListener('scroll', () => {
      const rect = underlineElement4.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        underlineElement4.classList.add('in-view');
      } else {
        underlineElement4.classList.remove('in-view');
      }
    });

    const underlineElement5 = document.querySelector('.underline5');

    window.addEventListener('scroll', () => {
      const rect = underlineElement5.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        underlineElement5.classList.add('in-view');
      } else {
        underlineElement5.classList.remove('in-view');
      }
    });

    const slider = document.querySelector('.slider');
    let isDown = false;
    let startX;
    let scrollLeft;
    
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1; 
        slider.scrollLeft = scrollLeft - walk;
    });
  

    // dropdown manue
    document.querySelector('.dropdown-button').addEventListener('click', function() {
      this.parentElement.classList.toggle('show');
  });

  document.querySelectorAll('.dropdown-content').forEach(item => {
    item.addEventListener('click', function() {
        this.closest('.dropdown').classList.remove('show');
    });
});


// about

document.addEventListener('scroll', function() {
  const slideInElements = document.querySelectorAll('.slide-in');
  const scrollPosition = window.scrollY + window.innerHeight;

  slideInElements.forEach(element => {
      const slideInPosition = element.offsetTop;

      if (scrollPosition > slideInPosition) {
          element.style.left = '0';
      }
  });
});