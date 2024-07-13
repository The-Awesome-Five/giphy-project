import {getTrendingGifs, searchGif} from "../requests/giphy-service.js";
import {getCurrOffset, getGifState, getOffset, incrementCurrOffset, incrementOffset, populateGifState} from "../state/gif-state.js";
import { splitGifTest } from "./giphy-events.js";

export const handleScroll = async (isTrending = true, searchTerm = '') => {

    let gifs = [];

    if (getOffset() === getCurrOffset()) {

        gifs = isTrending ?
            await getTrendingGifs(45, getOffset()) :
            await searchGif(searchTerm, 45, getOffset());
        incrementOffset();
        populateGifState(gifs.data);
    }
    console.log(getCurrOffset());
    console.log(getOffset());
    const cols = [document.querySelector('#col-0'), document.querySelector('#col-1'), document.querySelector('#col-2')];

    let newGifs = getGifState();
     newGifs= newGifs.slice(getCurrOffset(), getCurrOffset() + 15);
    const result = splitGifTest(newGifs);

    result.forEach((gifsColumn, index) => {
        gifsColumn.forEach(gif => {
            const gifElement = document.createElement('div');
            gifElement.innerHTML = gif;
            cols[index].appendChild(gifElement);
        });
    });

    incrementCurrOffset();

    return `
    <h1>Updated Gifs</h1>
    <div id="container">
      <div class="gif-gallery">
        ${cols.map((col, index) => `
          <div id="col-${index}">
            ${col.innerHTML}
          </div>
        `).join('\n')}
      </div>
    </div>
    `;
}
