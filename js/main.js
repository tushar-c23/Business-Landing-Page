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
  
  //INITIATE GLIGHTBOX
  const glightbox = GLightBox({
    selector: '.glightbox'
  });
  //INITIATE GLIGHTBOX

  // PORTFOLIO ISOTOPE AND FILTER

  let portfolionIsotope = document.querySelector('.portfolio-isotope');

  if (portfolionIsotope) {

    let portfolioFilter = portfolionIsotope.getAttribute('data-portfolio-filter') ? portfolionIsotope.getAttribute('data-portfolio-filter') : '*';
    let portfolioLayout = portfolionIsotope.getAttribute('data-portfolio-layout') ? portfolionIsotope.getAttribute('data-portfolio-layout') : 'masonry';
    let portfolioSort = portfolionIsotope.getAttribute('data-portfolio-sort') ? portfolionIsotope.getAttribute('data-portfolio-sort') : 'original-order';

    window.addEventListener('load', () => {
      let portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {
        itemSelector: '.portfolio-item',
        layoutMode: portfolioLayout,
        filter: portfolioFilter,
        sortBy: portfolioSort
      });

      let menuFilters = document.querySelectorAll('.portfolio-isotope .portfolio-filters li');
      menuFilters.forEach(function(el) {
        el.addEventListener('click', function() {
          document.querySelector('.portfolio-isotope .portfolio-flters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          portfolioIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          if (typeof aos_init === 'function') {
            aos_init();
          }
        }, false);
      });

    });

  }


  // PORTFOLIO ISOTOPE AND FILTER
})


