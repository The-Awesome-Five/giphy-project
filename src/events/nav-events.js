import { ABOUT, FAVORITE, UPLOAD, GIFS, CONTAINER_SELECTOR, UPLOADED } from '../common/constants.js';
import { toAboutView } from '../views/view-about.js';
import { toGifCategorieView } from '../views/category-view.js';
import { toUploadView } from '../views/upload-view.js';
import { getTrendingGifs } from '../requests/giphy-service.js';
import { getFavoriteGifs } from '../data/favorite-gifs.js';
import { getUploadedGifs } from '../data/uploaded-gifs.js';
import { getGifState, populateGifState } from '../state/gif-state.js';
import { incrementCurrOffset } from '../state/gif-state.js';

export const loadPage = (page = '') => {

  switch (page) {

  case GIFS:
    setActiveNav(GIFS);
    return renderHome();
  case FAVORITE:
    setActiveNav(FAVORITE);
    return renderFavorite();
  case UPLOAD:
    setActiveNav(UPLOAD);
    return renderUpload();
  case ABOUT:
    setActiveNav(ABOUT);
    return renderAbout();
  case UPLOADED:
    setActiveNav(UPLOADED);
    return renderUploaded();
  default: return null;
  }

};


export const renderFavorite = async () => {
  document.querySelector(CONTAINER_SELECTOR).innerHTML = await toGifCategorieView(getFavoriteGifs(), 'favorite', true, true);
};

export const renderUploaded = async () => {
  document.querySelector(CONTAINER_SELECTOR).innerHTML = await toGifCategorieView(getUploadedGifs(), 'uploaded', true);
};

export const renderUpload = () => {
  document.querySelector(CONTAINER_SELECTOR).innerHTML = toUploadView();
};

export const renderAbout = () => {
  document.querySelector(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

export const renderHome = async ()=> {
  const gifs = await getTrendingGifs(15);
  incrementCurrOffset();
  populateGifState(gifs.data);

  // console.log('STATE:')
  // console.log(getGifState())

  document.querySelector(CONTAINER_SELECTOR).innerHTML = await toGifCategorieView(gifs.data, 'trending');
};

export const setActiveNav = (page) => {
  const navs = document.querySelectorAll('a.nav-link');

  Array
    .from(navs)
    .forEach(element => element
      .getAttribute('data-page') === page ?
      element.classList.add('active') :
      element.classList.remove('active'),
    );
};
