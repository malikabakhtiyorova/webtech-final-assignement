var elSiteHeader = document.querySelector('.site-header-left');
var elSiteHeaderToggler = document.querySelector('.site-nav-toggler');

elSiteHeaderToggler.addEventListener("click", function () {
  elSiteHeader.classList.toggle("site-header-left-toggler");
});

