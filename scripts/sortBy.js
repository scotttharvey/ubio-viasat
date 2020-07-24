const sortBy = document.querySelector('#sortBy');

sortBy.addEventListener('change', (e) => {
  let cards = document.querySelectorAll('.package-cards-container .dtv');
  let prices = document.querySelectorAll('.package-cards-container .dtv .price .amount');
  let cardLegal = document.querySelector('.active-text');

  const cardData = Array.from(cards).map((card, index) => {
    return {
      card,
      price: parseInt(prices[index].innerHTML),
     }
  })

  let highLow = e.target.value === 'high';

  if (highLow) {
    cards = cardData.sort((a,b) => b.price - a.price )
  } else {
    cards = cardData.sort((a,b) => a.price - b.price )
  }

  cards.forEach(card => {
    let contain = document.querySelector('.package-cards-container');
    contain.insertBefore(card.card, cardLegal)
  })

})


