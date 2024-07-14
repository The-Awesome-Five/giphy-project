import { getGIfById, getViewCount } from '../requests/giphy-service.js';
import { CONTAINER_SELECTOR } from '../common/constants.js';
import { toDetailedView } from '../views/detailed-view.js';
import { getGifState } from '../state/gif-state.js';

export const renderDetailedView = async (id) => {
  // gifs

  const gif = getGifState().find(elem => elem.id === id);

  document.querySelector(CONTAINER_SELECTOR).innerHTML = await toDetailedView(gif);
};
