import { getTrendingGifs, searchGif } from '../requests/giphy-service.js';
import { getCurrOffset, getGifState, getOffset, incrementCurrOffset, incrementOffset, populateGifState } from '../state/gif-state.js';
import { toImgElement } from './giphy-events.js';
import { incrementLoadedImages } from '../state/gif-state.js';
export const handleScroll = async (isTrending = true) => {

  let gifs = [];
  const searchTerm = isTrending ? '' : document.querySelector('h1').textContent;

  // initial gif loading for categories and search
  if (!isTrending && getGifState().length === 15) {
    gifs = await searchGif(searchTerm, 45, getOffset());
    incrementCurrOffset();
    incrementOffset();
    populateGifState(gifs.data);
  }
  // check if we have more gifs to load
  if (getOffset() === getCurrOffset()) {
    gifs = isTrending ?
      await getTrendingGifs(45, getOffset()) :
      await searchGif(searchTerm, 45, getOffset());
    incrementOffset();
    populateGifState(gifs.data);
  }

  const cols = [document.querySelector('#col-0'), document.querySelector('#col-1'), document.querySelector('#col-2')];

  // turn info from Gif-state into gifs.
  let newGifs = getGifState();
  newGifs= newGifs.slice(getCurrOffset(), getCurrOffset() + 15);
  const result = toImgElement(newGifs);

  // arrange the new gifs in the correct cols, adding them a new div.
  result.forEach((gifsColumn, index) => {
    gifsColumn.forEach(gif => {
      const gifElement = document.createElement('div');
      gifElement.innerHTML = gif;
      cols[index].appendChild(gifElement);
    });
  });

  incrementCurrOffset();
};
