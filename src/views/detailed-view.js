import { createFavoriteButton, isInFavorite } from '../data/favorite-gifs.js';
import { renderRelatedGifs } from './related-gifs-view.js';

export const toDetailedView = async (gif) => {
  const flag= isInFavorite(gif.id);
  const button= createFavoriteButton(flag);
  return `
<div id="detailed-view">
          <img id="gif-${gif.id}-${gif.username}" date="${gif.date}" src=${gif.url} alt="Gif">
            <div id="info-container">
              <h2> User: ${gif.username ? gif.username : 'Not Specified'}</h2>
              ${'\n'}
              <h2> Upload Date: ${gif.date ? gif.date : 'Not Specified'}</h2>
            </div>
              <div id="add-remove-btn">${button}</div>
              <button id="getURL" url="${gif.url}">🔗</button>
            </div>
             <div id="container">
             ${await renderRelatedGifs(gif.id)}
             </div>
    `;
};


