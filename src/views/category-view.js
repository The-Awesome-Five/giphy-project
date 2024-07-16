import { toImgElement } from '../events/giphy-events.js';

/**
 * Generates the HTML view for a GIF category.
 * @param {Array<Object>} data - The array of GIF data objects.
 * @param {string} [name='Trending'] - The name of the GIF category.
 * @param {boolean} [isLocalStorage=false] - Flag indicating if the data is from local storage.
 * @param {boolean} [isFavourite=false] - Flag indicating if the data represents favorite GIFs.
 * @returns {string} The HTML string for the GIF category view.
 */
export const toGifCategorieView = (data, name = 'Trending', isLocalStorage = false, isFavourite = false) => {
  const cols = toImgElement(data, isLocalStorage, isFavourite);
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
