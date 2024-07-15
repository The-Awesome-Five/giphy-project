import { getRelatedGifs, uploadGif } from '../requests/giphy-service.js';
import { addUploadedGif } from '../data/uploaded-gifs.js';
import { toGifCategorieView } from '../views/category-view.js';
import {incrementLoadedImages, populateGifState} from '../state/gif-state.js';
import { getGifState } from '../state/gif-state.js';
const handleUpload = async (file,event) => {

  const body = new FormData();
  body.append('file', file);

  Toastify({
    text: "The file is uploading right now!",
    style: {
      background: "gray",
    },
    duration: 3000

  }).showToast();

  return await uploadGif(body);
};

export const handleUploadEvent = async (event) => {

  event.preventDefault();

  const form = event.target;
  const button = form.querySelector('button');
  button.disabled = true;

  const previewImage = document.querySelector('#preview-image');

  const fileInput = form.querySelector('#gif-upload');

  const file = fileInput.files[0];
  if (file) {
    try {
      const response = await handleUpload(file,event);

      if (response.meta.status === 200) {
        Toastify({
          text: "The file has been uploaded!",
          style: {
            background: "orange",
          },
          duration: 3000

        }).showToast();
        addUploadedGif(response.data.id);
        button.disabled = false;
        form.reset();
        previewImage.remove();
      }
    } catch (e) {
      Toastify({
        text: `The file was not uploaded: ${e.message}`,
        style: {
          background: "red",
        },
        duration: 3000
      }).showToast();
      button.disabled = false;
      form.reset();
      previewImage.remove();
    }
  } else {
    form.querySelector('#gif-upload').innerText = 'Please select a file to upload.';
  }
};
// view's helper function
export const renderRelatedGifs = async (id) => {

  const relatedGifs = await getRelatedGifs(id, 12);
  console.log('cat');
  console.log(relatedGifs)
  populateGifState(relatedGifs.data);
  // const gifIds = relatedGifs.data.map(el => el.id);

  return toGifCategorieView(getGifState(), 'Related', true);

};

// access the json url
export const getURL = (data) => {
  return data.images.original.url || '';
};


// works with JSON
export const splitGifs = async (data, isLocalStorage, isFavourite) =>{
  let counter = 0;
  const typeOfGif = isFavourite ? 'favourite' : 'gif'
  const cols = [[], [], []];
  // function  to get URL from JSON on construct one
  const gifUrls= await toGifUrl(data, isLocalStorage);
  // splits the gifs in the correct cols and makes the html
  gifUrls.forEach(({id, url}, index) => {
    const gifElement = `<div class="gif"><img id="${typeOfGif}-${id}" class='single-gif' onload=${incrementLoadedImages()} src="${url}" alt="Gif"></div>`;
    cols[counter].push(gifElement);
    counter = (counter + 1) % 3;
  });
  return cols;
};

// works with gif-state, takes the data
export const splitGifTest = (data) =>{
  console.log(data);
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

// check if it's locally stored gif and if not takes the URL from a JSON file.
const toGifUrl = async (data, isLocalStorage) => {
  return await Promise.all(data.map(el => isLocalStorage ? {id: el, url: `https://media.giphy.com/media/${el}/giphy.gif`} : {id: el.id, url: getURL(el)}));
};


export const copyUrl = (url) =>{
  console.log(url);
  const imgSrc = url;
  const tempInput = document.createElement('input');
  tempInput.value = imgSrc;
  document.body.appendChild(tempInput);
  tempInput.select();
  tempInput.setSelectionRange(0, 99999);
  document.execCommand('copy');
  document.body.removeChild(tempInput);
};
