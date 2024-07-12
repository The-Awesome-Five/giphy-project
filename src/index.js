import {loadPage, renderHome} from "./events/nav-events.js";
import {handleUploadEvent} from "./events/giphy-events.js";
import {renderSearchGifs} from "./events/search-event.js";
import {renderDetailedView} from "./events/detailed-even.js";
import {addToFavorite} from "./data/favorite-gifs.js";

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

        if (event.target.id === 'logo') {
            loadPage(event.target.getAttribute('data-page'));
        }

        // nav-cats
        if (event.target.id.includes('nav')) {
            renderSearchGifs(event.target.id.slice(4))
        }

        if (event.target.classList.contains('test')) {
            const imgSrc = event.target.src;
            const imgSrcParts = imgSrc.split('/');

            event.preventDefault();
            renderDetailedView(imgSrcParts[imgSrcParts.length - 2]);
        }

        if (event.target.id.includes('favorite')) {
            addToFavorite();
        }
    });

});




