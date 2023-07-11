document.addEventListener('DOMContentLoaded', function () {
  const heading = document.querySelector('h1');
  setTimeout(function () {
    heading.classList.add('fade-in');
  }, 500);

  const cards = document.querySelectorAll('.card');

  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      this.classList.toggle('clicked');
    });
  });
});
