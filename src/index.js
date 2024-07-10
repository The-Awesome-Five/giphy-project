import {searchGif} from "./requests/giphy-service.js";

const message = await searchGif('happy birthday')

console.log(message);
