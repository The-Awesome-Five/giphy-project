import {toAboutView} from "./views/view-about.js";
import {loadPage, renderHome} from "./events/nav-events.js";
import {ABOUT, FAVORITE, UPLOAD, GIFS} from "./common/constants.js";
import {setActiveNav} from "./events/nav-events.js";
import {handleUploadEvent} from "./events/giphy-events.js";
import {renderSearchGifs} from "./events/search-event.js";
import { getGIfById } from "./requests/giphy-service.js";
import { toDetailedView } from "./views/detailed-view.js";
import { renderDetailedView } from "./events/detailed-even.js";
// const message = await searchGif('happy birthday');

// const trendingGifs = await getTrendingGifs();

// const gifCategories = await getGifCategories();

// console.log(trendingGifs);

document.addEventListener('DOMContentLoaded', () => {

    renderHome();

    document.addEventListener('submit', event => {

        event.preventDefault();

        if (event.target.classList.contains('upload')) {
            handleUploadEvent(event);
        }
    });

    document.addEventListener('keydown', event => {

        if (event.target.classList.contains('search') && event.key === "Enter") {
            event.preventDefault();
            renderSearchGifs(event.target.value);
        }

    })

    document.addEventListener('click', event => {


        if (event.target.classList.contains('nav-link')) {

            loadPage(event.target.getAttribute('data-page'));
        }

        if (event.target.classList.contains('test')) {
            const imgSrc = event.target.src;
            const imgSrcParts = imgSrc.split('/');
            console.log(imgSrcParts);
            event.preventDefault();
            renderDetailedView(imgSrcParts[imgSrcParts.length - 2]);
        }
    });

    });




