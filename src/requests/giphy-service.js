import * as request from './requester.js';
import { API_KEY, API_URL } from '../common/constants.js';

/**
 * Searches for GIFs based on the provided search term.
 * @param {string} [searchTerm=''] - The term to search for GIFs.
 * @param {number} [limit=45] - The maximum number of GIFs to retrieve.
 * @param {number} [offset=0] - The offset for pagination.
 * @returns {Promise<Object>} A Promise that resolves with the search results.
 */
export const searchGif = async (searchTerm = '', limit = 45, offset = 0) => {
  return request.get(`${API_URL}/search?api_key=${API_KEY}&limit=${limit}&offset=${offset}&q=${searchTerm}`);
};

/**
 * Retrieves the trending GIFs.
 * @param {number} [limit=45] - The maximum number of GIFs to retrieve.
 * @param {number} [offset=0] - The offset for pagination.
 * @returns {Promise<Object>} A Promise that resolves with the trending GIFs.
 */
export const getTrendingGifs = async (limit = 45, offset = 0) => {
  return request.get(`${API_URL}/trending?api_key=${API_KEY}&limit=${limit}&offset=${offset}`);
};

/**
 * Retrieves a random GIF.
 * @returns {Promise<Object>} A Promise that resolves with a random GIF.
 */
export const getRandomGif = async () => {
  return request.get(`${API_URL}/random?api_key=${API_KEY}`);
};

/**
 * Retrieves the categories of GIFs.
 * @returns {Promise<Object>} A Promise that resolves with the GIF categories.
 */
export const getGifCategories = async () => {
  return request.get(`${API_URL}/categories?api_key=${API_KEY}`);
};

/**
 * Retrieves the view count of a specific GIF by its ID.
 * @param {string} gifId - The ID of the GIF.
 * @returns {Promise<Object>} A Promise that resolves with the view count of the GIF.
 */
export const getViewCount = async (gifId) => {
  return request.get(`https://giphy.com/api/v1/proxy-gif/${gifId}/view-count/`);
};

/**
 * Retrieves related GIFs based on a specific GIF ID.
 * @param {string} gifId - The ID of the GIF.
 * @param {number} [limit=25] - The maximum number of related GIFs to retrieve.
 * @returns {Promise<Object>} A Promise that resolves with the related GIFs.
 */
export const getRelatedGifs = async (gifId, limit = 25) => {
  return request.get(`${API_URL}/related?gif_id=${gifId}&rating=pg-13&offset=undefined&limit=${limit}&api_key=${API_KEY}&pingback_id=19096def1dd0ba5f`);
};

/**
 * Retrieves a GIF by its ID.
 * @param {string} gifId - The ID of the GIF.
 * @returns {Promise<Object>} A Promise that resolves with the GIF data.
 */
export const getGifById = async (gifId) => {
  return request.get(`${API_URL}/${gifId}?api_key=${API_KEY}`);
};

/**
 * Uploads a GIF.
 * @param {FormData} body - The FormData object containing the GIF file and metadata.
 * @returns {Promise<Object>} A Promise that resolves with the response from the upload service.
 */
export const uploadGif = async (body) => {
  body.append('api_key', API_KEY);
  return request.post('https://upload.giphy.com/v1/gifs', body);
};
