import { ABOUT, FAVORITE, UPLOAD, GIFS, CONTAINER_SELECTOR } from "../common/constants.js";
import { toAboutView } from "../views/view-about.js";
import { toGifCategorieView } from "../views/category-view.js";
import { toUploadView } from "../views/upload-view.js";

import { getTrendingGifs } from "../requests/giphy-service.js";


export const loadPage = (page = '') => {
 
    switch (page) {
   
      case GIFS:
        setActiveNav(GIFS);
        return renderHome();
      case FAVORITE:
        setActiveNav(FAVORITE);
        return renderCategories();
      case UPLOAD:
        setActiveNav(UPLOAD);
        return renderUpload();
      case ABOUT:
        setActiveNav(ABOUT);
        return renderAbout();
   
      /* if the app supports error logging, use default to log mapping errors */
      default: return null;
    }
   
};

export const renderUpload = () => {
  document.querySelector(CONTAINER_SELECTOR).innerHTML = toUploadView()
}

export const renderAbout = () => {
  document.querySelector(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

const renderHome = async ()=> {
const gifs= await getTrendingGifs()
document.querySelector(CONTAINER_SELECTOR).innerHTML = await toGifCategorieView(gifs.data, 'trending');
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