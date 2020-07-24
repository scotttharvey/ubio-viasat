const cart = document.querySelector('[data-target="cart"]');
const dropdown = cart.querySelector('.cart-dropdown');
const cartArrow = cart.querySelector('.dropdown-arrow');

const cartNav = document.querySelector('#cartNav');
let topOfNav = cartNav.offsetTop;

cart.addEventListener("click", () => {
  document.body.classList.toggle('cart-open');
  cartArrow.classList.toggle('open')
  dropdown.classList.toggle('hidden')
})

fixNav = () => {
  if (window.scrollY >= topOfNav && window.outerWidth <= 640) {
    document.body.style.paddingTop = cartNav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}

window.addEventListener('scroll', fixNav);
