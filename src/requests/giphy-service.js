import * as request from "./requester.js";
import {API_KEY, API_URL} from "../common/constants.js";

export const searchGif = async (searchTerm = '') => {

    return request.get(`${API_URL}/search?api_key=${API_KEY}&q=${searchTerm}`);
}

export const getTrendingGifs = async (offset = undefined) => {
    return request.get(`${API_URL}/trending?api_key=${API_KEY}`);
}

export const getGifCategories = async () => {
    return request.get(`${API_URL}/categories?api_key=${API_KEY}`);
}

export const getViewCount = async (gifId) => {
    return request.get(`https://giphy.com/api/v1/proxy-gif/${gifId}/view-count/`)
}

export const getRelatedGifs = async (gifId) => {
    return request.get(`${API_URL}/related?gif_id=${gifId}&rating=pg-13&offset=undefined&api_key=${API_KEY}&pingback_id=19096def1dd0ba5f`)
}

export const getGIfById = async (gifId) => {
    return request.get(`${API_URL}/${gifId}?api_key=${API_KEY}`);

}

export const uploadGif = async (body) => {

    body.append('api_key', API_KEY);

    const response = await fetch('https://upload.giphy.com/v1/gifs', {
        method: 'POST',
        body: body
    });

    return response.json();
}
