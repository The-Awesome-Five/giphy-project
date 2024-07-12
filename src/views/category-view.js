import {splitGifs} from "../events/giphy-events.js";

export const toGifCategorieView = async (data, name = 'Trending', isLocalStorage = false) => {
  const cols = await splitGifs(data,isLocalStorage);
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
