const content = document.querySelector('.content_quote');
const author = document.querySelector('.author_quote');
const btn = document.querySelector('.btn');

let url = 'https://api.quotable.io/random';

const createQuote = () => {
  fetch(url)
    .then((response) => response.json())
    .then((quotes) => {
      content.textContent = quotes.content;
      author.textContent = quotes.author;
    });
};

btn.addEventListener('click', createQuote);

createQuote();
