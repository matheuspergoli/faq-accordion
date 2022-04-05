const accordionTitle = document.querySelectorAll('.accordion-title')

function animateAccordion() {
  this.classList.toggle('focus')
  this.nextElementSibling.classList.toggle('active')
}

accordionTitle.forEach(item => {
  item.addEventListener('click', animateAccordion)
})