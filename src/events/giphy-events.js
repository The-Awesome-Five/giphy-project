import { incrementLoadedImages } from '../state/gif-state.js';

/**
 * Converts the provided GIF data into HTML elements and organizes them into columns.
 * @param {Array<Object>} data - The array of GIF data objects.
 * @param {string} data[].id - The ID of the GIF.
 * @param {string} data[].date - The date associated with the GIF.
 * @param {string} data[].username - The username of the uploader.
 * @returns {Array<Array<string>>} An array of columns, each containing HTML strings for GIF elements.
 */
export const toImgElement = (data) => {
  let counter = 0;
  const cols = [[], [], []];

  // Convert data into GIF URLs
  const Gifs = data.map(el => {
    return {
      id: el.id,
      url: `https://media.giphy.com/media/${el.id}/giphy.gif`,
      date: el.date,
      username: el.username,
    };
  });

  // Distribute GIFs into columns and create HTML elements
  Gifs.forEach(({ id, url, username, date }, index) => {
    const gifElement = `<div class="gif"><img id="gif-${id}-${username}" date="${date}" class='single-gif' onload=${incrementLoadedImages()} src="${url}" alt="Gif"></div>`;
    cols[counter].push(gifElement);
    counter = (counter + 1) % 3;
  });

  return cols;
};

/**
 * Copies the provided URL to the clipboard.
 * @param {string} url - The URL to be copied.
 */
export const copyUrl = (url) => {
  const imgSrc = url;
  const tempInput = document.createElement('input');
  tempInput.value = imgSrc;
  document.body.appendChild(tempInput);
  tempInput.select();
  tempInput.setSelectionRange(0, 99999);
  document.execCommand('copy');
  document.body.removeChild(tempInput);
};
