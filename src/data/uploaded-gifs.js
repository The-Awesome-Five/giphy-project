import { USERNAME } from '../common/constants.js';

/**
 * Retrieves the 'uploaded' items from localStorage and parses them.
 * @type {Array<Object>}
 */
const uploaded = JSON.parse(localStorage.getItem('uploaded')) || [];

/**
 * Adds a GIF to the uploaded list stored in localStorage.
 * @param {string} gifId - The ID of the GIF to be added to the uploaded list.
 */
export const addUploadedGif = (gifId) => {
  const gif = {
    id: gifId,
    date: Date.now(),
    username: USERNAME,
    url: `https://media.giphy.com/media/${gifId}/giphy.gif`
  };

  uploaded.push(gif);
  localStorage.setItem('uploaded', JSON.stringify(uploaded));
};

/**
 * Retrieves the list of uploaded GIFs from localStorage.
 * @returns {Array<Object>} The array of uploaded GIF objects.
 */
export const getUploadedGifs = () => [...uploaded];
