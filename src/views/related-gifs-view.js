import { getRelatedGifs } from '../requests/giphy-service.js';
import { getGifState, populateGifState, resetGifState } from '../state/gif-state.js';
import { toGifCategorieView } from './category-view.js';

/**
 * Renders the related GIFs for a given GIF ID.
 * @param {string} id - The ID of the GIF for which related GIFs are to be fetched.
 * @returns {Promise<string>} A Promise that resolves to the HTML string for the related GIFs view.
 */
export const renderRelatedGifs = async (id) => {
  const relatedGifs = await getRelatedGifs(id, 12);
  resetGifState();
  populateGifState(relatedGifs.data);

  return toGifCategorieView(getGifState(), 'Related', true);
};
