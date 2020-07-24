const cardDescriptions = document.querySelectorAll('.card-description');

if ( cardDescriptions ) {
  cardDescriptions.forEach( card => {
    let text = card.innerHTML;
    if (text.split(/\s+/).length > 24) {
      const partA = text.split(/\s+/).slice(0, 23).join(" ");
      const partB = text.split(/\s+/).slice(23).join(" ")

      card.innerHTML = `${partA} <span class="excerpt hidden">${partB}</span> <span class="blue read-more pointer">...Read More</span>`;
      const readMore = card.querySelector('.read-more');
      const excerpt = card.querySelector('.excerpt');

      readMore.addEventListener('click', () => {
        card.classList.toggle('active');
        excerpt.classList.toggle('hidden');
        readMore.innerText = card.classList.contains('active') ? '...Read Less' : '...Read More'
      })

    }

  })

}