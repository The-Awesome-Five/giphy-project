import {getTrendingGifs, searchGif} from "../requests/giphy-service.js";
import {getCurrOffset, getOffset, incrementCurrOffset, incrementOffset, populateGifState} from "../state/gif-state.js";
import {splitGifs} from "./giphy-events.js";

export const handleScroll = async (isTrending = true, searchTerm = '') => {

    let gifs = [];

    if (getOffset() === getCurrOffset()) {
        // make a request
        gifs = isTrending ?
            getTrendingGifs(45,getOffset()):
            searchGif(searchTerm, 45, getOffset());
        incrementOffset();
        populateGifState(gifs);
    }

    const col1 = document.querySelector('#col-0');
    const col2 = document.querySelector('#col-1');
    const col2 = document.querySelector('#col-2');

    incrementCurrOffset();




}
