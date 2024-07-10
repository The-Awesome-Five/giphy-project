import {getGifCategories, getTrendingGifs, searchGif} from "./requests/giphy-service.js";

const message = await searchGif('happy birthday');

const trendingGifs = await getTrendingGifs();

const gifCategories = await getGifCategories();

console.log(trendingGifs);
