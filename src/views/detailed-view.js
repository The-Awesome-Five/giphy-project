import {renderRelatedGifs} from "../events/giphy-events.js";

export const toDetailedView = async (info, views) => {
    return `
<div id="detailed-view">
          <img id="gif" src=${info.images.original.url} alt="Gif">
          ${'\n'}
          <h1> User: ${info.username}</h2>
           ${'\n'}
          <h2> Views: ${views}</h2>
           ${'\n'}
          <h2> Upload Date: ${info.import_datetime}</h2>
            <button id='favorite'>Add to Favorite</button>
            <button id="getURL" url="${info.images.original.url}">Get URL</button>
            </div>
             <div id="container">
             ${await renderRelatedGifs(info.id)}
             </div>
    `;
};


