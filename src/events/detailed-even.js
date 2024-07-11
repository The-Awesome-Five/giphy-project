import {getGIfById, getViewCount, searchGif} from "../requests/giphy-service.js";
import {CONTAINER_SELECTOR} from "../common/constants.js";
import { toDetailedView } from "../views/detailed-view.js";

export const renderDetailedView = async (id) => {
    // gifs
    const gifInfo = await getGIfById(id)
    const views= await getViewCount(id);
    document.querySelector(CONTAINER_SELECTOR).innerHTML = await toDetailedView(gifInfo.data, views.viewCount);
};
