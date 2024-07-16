import { ABOUT, FAVORITE, UPLOAD, GIFS, CONTAINER_SELECTOR, UPLOADED } from '../common/constants.js';
import { toAboutView } from '../views/view-about.js';
import { toGifCategorieView } from '../views/category-view.js';
import { toUploadView } from '../views/upload-view.js';
import { getRandomGif, getTrendingGifs } from '../requests/giphy-service.js';
import { getFavoriteGifs } from '../data/favorite-gifs.js';
import { getUploadedGifs } from '../data/uploaded-gifs.js';
import { getGifState, populateGifState, incrementCurrOffset } from '../state/gif-state.js';

/**
 * Loads the specified page and renders the appropriate content.
 * @param {string} [page=''] - The page identifier to load.
 * @returns {null|Promise<void>} Returns null for the default case, otherwise returns a Promise that resolves when the content is rendered.
 */
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
  default:
    return null;
  }
};

/**
 * Renders the favorite GIFs page.
 * If no favorite GIFs are found, a random GIF is fetched and displayed.
 * @returns {Promise<void>} A Promise that resolves when the content is rendered.
 */
export const renderFavorite = async () => {
  let gifs = getFavoriteGifs().length === 0 ? await getRandomGif() : getFavoriteGifs();

  if (getFavoriteGifs().length === 0) {
    populateGifState([gifs.data]);
    gifs = getGifState();
  }

  document.querySelector(CONTAINER_SELECTOR).innerHTML = await toGifCategorieView(gifs, 'favorite', true, true);
};

/**
 * Renders the uploaded GIFs page.
 * @returns {Promise<void>} A Promise that resolves when the content is rendered.
 */
export const renderUploaded = async () => {
  document.querySelector(CONTAINER_SELECTOR).innerHTML = await toGifCategorieView(getUploadedGifs(), 'uploaded', true);
};

/**
 * Renders the upload page.
 */
export const renderUpload = () => {
  document.querySelector(CONTAINER_SELECTOR).innerHTML = toUploadView();
};

/**
 * Renders the about page.
 */
export const renderAbout = () => {
  document.querySelector(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

/**
 * Renders the home page with trending GIFs.
 * @returns {Promise<void>} A Promise that resolves when the content is rendered.
 */
export const renderHome = async () => {
  const gifs = await getTrendingGifs(15);
  incrementCurrOffset();
  populateGifState(gifs.data);

  document.querySelector(CONTAINER_SELECTOR).innerHTML = toGifCategorieView(getGifState(), 'trending');
};

/**
 * Sets the active navigation link based on the current page.
 * @param {string} page - The page identifier to set as active.
 */
export const setActiveNav = (page) => {
  const navs = document.querySelectorAll('a.nav-link');

  Array.from(navs).forEach(element =>
    element.getAttribute('data-page') === page
      ? element.classList.add('active')
      : element.classList.remove('active')
  );
};
