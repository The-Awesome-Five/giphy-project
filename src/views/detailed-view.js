import { createFavoriteButton, isInFavorite } from '../data/favorite-gifs.js';
import { renderRelatedGifs } from './related-gifs-view.js';

/**
 * Generates the detailed view for a GIF.
 * @param {Object} gif - The GIF data object.
 * @param {string} gif.id - The ID of the GIF.
 * @param {string} gif.username - The username of the uploader.
 * @param {string} gif.date - The upload date of the GIF.
 * @param {string} gif.url - The URL of the GIF.
 * @returns {Promise<string>} A Promise that resolves to the HTML string for the detailed GIF view.
 */
export const toDetailedView = async (gif) => {
  const flag = isInFavorite(gif.id);
  const button = createFavoriteButton(flag);
  return `
    <div id="detailed-view">
      <img id="gif-${gif.id}-${gif.username}" date="${gif.date}" src=${gif.url} alt="Gif">
      
      <div id="detail-container">

        <div id="info-container">
          <h2>User: ${gif.username ? gif.username : 'Not Specified'}</h2>
          <h2>Upload Date: ${gif.date ? gif.date : 'Not Specified'}</h2>
        </div>

        ${button}
        <button id="getURL" url="${gif.url}">🔗</button>
      
      </div>
     
    </div>
    <div id="container">
      ${await renderRelatedGifs(gif.id)}
    </div>
  `;
};
