import { createFavoriteButton, isInFavorite } from '../data/favorite-gifs.js';
import { renderRelatedGifs } from '../events/giphy-events.js';

export const toDetailedView = async (gif) => {

  const flag= isInFavorite(gif.id);
  const button= createFavoriteButton(flag);
  return `
<div id="detailed-view">
          <img id="gif-${gif.id}" src=${gif.url} alt="Gif">
          ${'\n'}
          <h2> User: ${gif.username ? gif.username : 'Not Specified'}</h2>
           ${'\n'}
          <h2> Upload Date: ${gif.date ? gif.date : 'Not Specified'}</h2>
            ${button};
            <button id="getURL" url="${gif.url}">Get URL</button>
            </div>
             <div id="container">
             ${await renderRelatedGifs(gif.id)}
             </div>
    `;
};


