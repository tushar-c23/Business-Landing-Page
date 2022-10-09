document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  // STICKY HEADER ON SCROLL

  const selectHeader = document.querySelector('#header');
  if(selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  // STICKY HEADER ON SCROLL

  // MOBILE NAV TOGGLE
  
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  if(mobileNavToggle) {
    mobileNavToggle.addEventListener('click',function(event) {
      event.preventDefault();
  
      document.querySelector('body').classList.toggle('mobile-nav-active');
  
      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x');
    });
  }
  
  // MOBILE NAV TOGGLE
  
  // TOGGLE MOBILE NAV DROPDOWNS
  
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');
  
  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if(document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');
  
        let dropDrownIndicator = this.querySelector('.dropdown-indicator');
        dropDrownIndicator.classList.toggle('bi-chevron-up');
        dropDrownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });
  
  // TOGGLE MOBILE NAV DROPDOWNS
})

