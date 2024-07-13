import {searchGif} from "../requests/giphy-service.js";
import {toGifCategorieView} from "../views/category-view.js";
import {CONTAINER_SELECTOR} from "../common/constants.js";
import {populateGifState} from "../state/gif-state.js";

export const renderSearchGifs = async (searchTerm) => {
    // gifs
    const gifs = await searchGif(searchTerm);

    // populateGifState(gifs)

    populateGifState(gifs.data);

    document.querySelector(CONTAINER_SELECTOR).innerHTML = await toGifCategorieView(gifs.data,searchTerm);
};
