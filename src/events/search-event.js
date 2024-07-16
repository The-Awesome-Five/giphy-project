import { searchGif } from '../requests/giphy-service.js';
import { toGifCategorieView } from '../views/category-view.js';
import { CONTAINER_SELECTOR } from '../common/constants.js';
import { populateGifState, getGifState } from '../state/gif-state.js';

/**
 * Renders the search results for GIFs based on the given search term.
 * @param {string} searchTerm - The term to search for GIFs.
 * @returns {Promise<void>} A Promise that resolves when the content is rendered.
 */
export const renderSearchGifs = async (searchTerm) => {
  // Search for GIFs
  const gifs = await searchGif(searchTerm, 15);

  // Populate the GIF state with the search results
  populateGifState(gifs.data);

  // Render the search results in the specified container
  document.querySelector(CONTAINER_SELECTOR).innerHTML = await toGifCategorieView(getGifState(), searchTerm);
};
