import {getGifCategories, getTrendingGifs, searchGif, uploadGif} from "./requests/giphy-service.js";
import { toAboutView } from "./views/view-about.js";
import { loadPage } from "./events/Nav-events.js";
import { ABOUT, FAVORITE, UPLOAD, GIFS } from "./common/constants.js";
import { setActiveNav } from "./events/Nav-events.js";
import {handleUpload, handleUploadEvent} from "./events/giphy-events.js";
// const message = await searchGif('happy birthday');

// const trendingGifs = await getTrendingGifs();

// const gifCategories = await getGifCategories();

// console.log(trendingGifs);

document.addEventListener('DOMContentLoaded', () => {


    document.addEventListener('submit', event => {

        event.preventDefault();

        if (event.target.classList.contains('upload')) {
           handleUploadEvent(event);
        }
    })

        document.addEventListener('click', event => {


            if (event.target.classList.contains('nav-link')) {

              loadPage(event.target.getAttribute('data-page'));
            }


            if (event.target.classList.contains('button-category')) {
              renderCategory(+event.target.getAttribute('category-id'));
            }


            if (event.target.classList.contains('about')) {
              renderMovieDetails(+event.target.getAttribute('movie-id'));
            }

            // toggle favorite event
            if (event.target.classList.contains('favorite')) {
              toggleFavoriteStatus(+event.target.getAttribute('data-movie-id'));
            }

          });


  });

