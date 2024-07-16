import { getTrendingGifs, searchGif } from '../requests/giphy-service.js';
import { getCurrOffset, getGifState, getOffset, incrementCurrOffset, incrementOffset, populateGifState } from '../state/gif-state.js';
import { toImgElement } from './giphy-events.js';
import { incrementLoadedImages } from '../state/gif-state.js';

/**
 * Handles the infinite scroll functionality for loading GIFs.
 * Depending on the isTrending flag, it either loads trending GIFs or searches for GIFs based on a search term.
 * @param {boolean} [isTrending=true] - Flag indicating whether to load trending GIFs or search for GIFs.
 */
export const handleScroll = async (isTrending = true) => {
  let gifs = [];
  const searchTerm = isTrending ? '' : document.querySelector('h1').textContent;

  // Initial GIF loading for categories and search
  if (!isTrending && getGifState().length === 15) {
    gifs = await searchGif(searchTerm, 45, getOffset());
    incrementCurrOffset();
    incrementOffset();
    populateGifState(gifs.data);
  }

  // Check if we have more GIFs to load
  if (getOffset() === getCurrOffset()) {
    gifs = isTrending ?
      await getTrendingGifs(45, getOffset()) :
      await searchGif(searchTerm, 45, getOffset());
    incrementOffset();
    populateGifState(gifs.data);
  }

  const cols = [
    document.querySelector('#col-0'),
    document.querySelector('#col-1'),
    document.querySelector('#col-2')
  ];

  // Turn info from Gif-state into GIF elements
  let newGifs = getGifState();
  newGifs = newGifs.slice(getCurrOffset(), getCurrOffset() + 15);
  const result = toImgElement(newGifs);

  // Arrange the new GIFs in the correct columns, adding them in new divs
  result.forEach((gifsColumn, index) => {
    gifsColumn.forEach(gif => {
      const gifElement = document.createElement('div');
      gifElement.innerHTML = gif;
      cols[index].appendChild(gifElement);
    });
  });

  incrementCurrOffset();
};
