import { getGIfById, getViewCount } from '../requests/giphy-service.js';
import { CONTAINER_SELECTOR } from '../common/constants.js';
import { toDetailedView } from '../views/detailed-view.js';
import { getGifState } from '../state/gif-state.js';

export const renderDetailedView = async (id, isFavourite = false) => {
  // gifs

  let gif = {};

  console.log('render detailed view ' + id)

  if (!isFavourite) {
    gif = getGifState().find(elem => elem.id === id);
  } else {
    console.log(`the id is: ${id}`)
    const gifRequest = await getGIfById(id);
    const username = gifRequest.data.username;
    console.log(username)
    const date = gifRequest.data.import_datetime;
    console.log(date)
    const url = gifRequest.data.images.original.url;
    console.log(url)

    //console.log(`${gifId} : ${username} : ${date} : ${url}`);
    gif = {
      id,
      username,
      date,
      url
    }
  }

  document.querySelector(CONTAINER_SELECTOR).innerHTML = await toDetailedView(gif);
};
