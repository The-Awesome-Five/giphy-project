import { CONTAINER_SELECTOR } from '../common/constants.js';
import { toDetailedView } from '../views/detailed-view.js';
import { getGifState } from '../state/gif-state.js';
import { getFavoriteGifs, isInFavorite } from '../data/favorite-gifs.js';

/**
 * Renders the detailed view of a GIF based on the event target's ID.
 * @param {Event} event - The event triggered by the user interaction.
 */
export const renderDetailedView = async (event) => {
  const isFavourite = isInFavorite(event.target.id.split('-')[1]);
  let gif;

  if (isFavourite) {
    const imgId = event.target.id.split('-');
    gif = getFavoriteGifs().find(el => el.id === imgId[1]);
  } else {
    const imgId = event.target.id.split('-');
    gif = getGifState().find(el => el.id === imgId[1]);
  }

  document.querySelector(CONTAINER_SELECTOR).innerHTML = await toDetailedView(gif);
};
