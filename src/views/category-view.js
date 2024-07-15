import { splitGifTest } from '../events/giphy-events.js';

export const toGifCategorieView = (data, name = 'Trending', isLocalStorage = false, isFavourite = false) => {
  console.log(data);
  const cols = splitGifTest(data, isLocalStorage, isFavourite);
  console.log(cols);
  return `
    <h1>${name}</h1>
    <div id="container">
      <div class="gif-gallery">
        ${cols.map((col, index) => `
          <div id="col-${index}">
            ${col.join('\n')}
          </div>
        `).join('\n')}
      </div>
    </div>
  `;
};

// document.querySelector('#col-1')
// document.querySelector('#col-2').innerHTML = document.querySelector('#col-2').innerHTML +  ${col.join('\n')}
// document.querySelector('#col-3')
