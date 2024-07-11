import * as request from "./requester.js";
import {API_KEY, API_URL} from "../common/constants.js";

const APIURL = API_URL;
const APIKey = API_KEY;

export const searchGif = async (searchTerm = '') => {

    return request.get(`${APIURL}/search?api_key=${APIKey}&q=${searchTerm}`);
}

export const getTrendingGifs = async () => {
    return request.get(`${APIURL}/trending?api_key=${APIKey}`);
}

export const getGifCategories = async () => {
    return request.get(`${APIURL}/categories?api_key=${APIKey}`);
}

export const getViewCount = async (gifId) => {
    return request.get(`https://giphy.com/api/v1/proxy-gif/${gifId}/view-count/`)
}

export const getRelatedGifs = async (gifId) => {
    return request.get(`${APIURL}/related?gif_id=${gifId}&rating=pg-13&offset=undefined&api_key=${APIKey}&pingback_id=19096def1dd0ba5f`)
}


export const uploadGif = async (body) => {

    body.append('api_key', APIKey);

    const response = await fetch('https://upload.giphy.com/v1/gifs', {
        method: 'POST',
        body: body
    });

    return response.json();
}
