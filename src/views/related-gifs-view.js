import { getRelatedGifs } from '../requests/giphy-service.js';
import { getGifState, populateGifState } from '../state/gif-state.js';
import { toGifCategorieView } from './category-view.js';

export const renderRelatedGifs = async (id) => {

  const relatedGifs = await getRelatedGifs(id, 12);
  populateGifState(relatedGifs.data);
  // const gifIds = relatedGifs.data.map(el => el.id);

  return toGifCategorieView(getGifState(), 'Related', true);

};
