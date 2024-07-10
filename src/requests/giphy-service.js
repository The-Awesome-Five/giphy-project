import * as request from "./requester.js";
import {API_KEY, API_URL} from "../common/constants.js";

const giphyAPIURL = API_URL;
const APIKey = API_KEY;

export const searchGif = async (searchTerm = '') => {

    const response = await request.get(`${giphyAPIURL}/search?api_key=${APIKey}&q=${searchTerm}`);

    return response;
}



