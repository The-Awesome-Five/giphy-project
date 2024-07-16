import {incrementLoadedImages} from '../state/gif-state.js';

// works with gif-state, takes the data
export const toImgElement = (data) =>{
  let counter = 0;
  const cols = [[], [], []];
  // turns data into gif URLs
  const Gifs = data.map(el=>{
    return {
      id: el.id,
      url: `https://media.giphy.com/media/${el.id}/giphy.gif`,
      date: el.date,
      username: el.username,
    };
  });
  // splits the gifs in the correct cols and makes the html
  Gifs.forEach(({id, url, username, date }, index) => {
    const gifElement = `<div class="gif"><img id="gif-${id}-${username}" date="${date}" class='single-gif' onload=${incrementLoadedImages()} src="${url}" alt="Gif"></div>`;
    cols[counter].push(gifElement);
    counter = (counter + 1) % 3;
  });

  return cols;
};


export const copyUrl = (url) =>{
  const imgSrc = url;
  const tempInput = document.createElement('input');
  tempInput.value = imgSrc;
  document.body.appendChild(tempInput);
  tempInput.select();
  tempInput.setSelectionRange(0, 99999);
  document.execCommand('copy');
  document.body.removeChild(tempInput);
};
