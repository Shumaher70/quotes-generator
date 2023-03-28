const commentEl = document.querySelector('.qote_quote_box');
const autorEl = document.querySelector('.name_quote_box');
const btnEl = document.querySelector('.btn');
let urls = [
  'https://jsonplaceholder.typicode.com/comments',
  'https://randomuser.me/api/',
];
createElements();
function createElements() {
  Promise.all(urls.map((url) => fetch(url)))
    .then((response) => Promise.all(response.map((res) => res.json())))
    .then((arrPromise) => {
      const textCorrently = (str) =>
        (b = str.charAt(0).toUpperCase() + str.slice(1));

      autorEl.textContent = `${arrPromise[1].results[0].name.last} ${arrPromise[1].results[0].name.first}`;
      commentEl.textContent = `${textCorrently(
        arrPromise[0][randomNum()].body
      )}`;
    });
}

btnEl.addEventListener('click', createElements);

function randomNum() {
  const num = Math.floor(Math.random() * 500);
  return num;
}
