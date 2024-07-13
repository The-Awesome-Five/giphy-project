import { createFavoriteButton, isInFavorite } from "../data/favorite-gifs.js";
import {renderRelatedGifs} from "../events/giphy-events.js";

export const toDetailedView = async (gif) => {

    let flag= isInFavorite(gif.id);
    let button= createFavoriteButton(gif.id, flag);
    return `
<div id="detailed-view">
          <img id="gif" src=${gif.url} alt="Gif">
          ${'\n'}
          <h2> User: ${gif.username ? gif.date : 'Not Specified'}</h2>
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


