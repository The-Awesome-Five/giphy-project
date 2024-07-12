import { ABOUT, FAVORITE, UPLOAD, GIFS, CONTAINER_SELECTOR,UPLOADED } from "../common/constants.js";
import { toAboutView } from "../views/view-about.js";
import { toGifCategorieView } from "../views/category-view.js";
import { toUploadView } from "../views/upload-view.js";
import { toFavoritesView } from "../views/favourite-view.js";
import { getTrendingGifs, searchGif } from "../requests/giphy-service.js";
import {renderSearchGifs} from "./search-event.js";
import { getFavoriteGifs } from "../data/favorite-gifs.js";

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
      // case SPORT:
      //   setActiveNav(SPORT);
      //   return renderHome();
      // case WOW:
      //   setActiveNav(WOW);
      //   return renderHome();
      // case LOL:
      //   setActiveNav(LOL);
      //   return renderHome();
      // case JS:
      //   setActiveNav(JS);
      //   return renderHome();
      // case CATS:
      //   setActiveNav(CATS);
      //   return renderHome();

      /* if the app supports error logging, use default to log mapping errors */
      default: return null;
    }

};

// export const renderSportCat = async () => {
//   const gifs = await searchGif('sport');
//   document.querySelector(CONTAINER_SELECTOR).innerHTML =  await toGifCategorieView(gifs.data, 'sport');
// }
//
// export const renderWowCat = async () => {
//   const gifs = await searchGif('wow');
//   document.querySelector(CONTAINER_SELECTOR).innerHTML = await toGifCategorieView(gifs.data, 'wow');
// }
//
// export const renderLolCat = async () => {
//   const gifs = await searchGif('lol');
//   document.querySelector(CONTAINER_SELECTOR).innerHTML = await toGifCategorieView(gifs.data, 'lol');
// }
//
// export const renderJsCat = async () => {
//   const gifs = await searchGif('js');
//   document.querySelector(CONTAINER_SELECTOR).innerHTML = await toGifCategorieView(gifs.data, 'js');
// }
//
// export const renderCatsCat = async () => {
//   const gifs = await searchGif('cats');
//   document.querySelector(CONTAINER_SELECTOR).innerHTML = await toGifCategorieView(gifs.data, 'cats');
// }

export const renderFavorite = async () => {
  document.querySelector(CONTAINER_SELECTOR).innerHTML = await toGifCategorieView(getFavoriteGifs(), 'favorite', true)
}

export const renderUploaded = async () => {
  document.querySelector(CONTAINER_SELECTOR).innerHTML = await toGifCategorieView(JSON.parse(localStorage.getItem('uploaded')), 'uploaded', true)
}

export const renderUpload = () => {
  document.querySelector(CONTAINER_SELECTOR).innerHTML = toUploadView()
}

export const renderAbout = () => {
  document.querySelector(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

export const renderHome = async ()=> {
const gifs = await getTrendingGifs()
document.querySelector(CONTAINER_SELECTOR).innerHTML = await toGifCategorieView(gifs.data, 'trending',);
}

 export  const setActiveNav = (page) => {
    const navs = document.querySelectorAll('a.nav-link');

    Array
      .from(navs)
      .forEach(element => element
        .getAttribute('data-page') === page
        ? element.classList.add('active')
        : element.classList.remove('active')
        );
  };
