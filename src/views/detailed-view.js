import {getRelatedGifs} from "../requests/giphy-service.js";
import {toGifCategorieView} from "./category-view.js";

export const toDetailedView = (info, views) => {
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
            <button id="getURL">Get URL</button>
            </div>
             <div id="container">
${renderRelatedGifs(info.id)}
</div>
    `;
};

const renderRelatedGifs = async (id) => {

    const relatedGifs = await getRelatedGifs(id, 12);
    const gifIds = relatedGifs.data.map(el => el.id);

    return toGifCategorieView(gifIds, 'Related', true)

}
