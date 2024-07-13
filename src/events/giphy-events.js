import {getRelatedGifs, uploadGif} from "../requests/giphy-service.js";
import {addUploadedGif} from "../data/uploaded-gifs.js";
import {toGifCategorieView} from "../views/category-view.js";

const handleUpload = async (file) => {

    const body = new FormData();

    body.append('file', file);

    return await uploadGif(body);
}

export const handleUploadEvent = async (event) => {

    event.preventDefault();

    const form = event.target;
    const fileInput = form.querySelector('#gif-upload');

    const file = fileInput.files[0];
    if (file) {
        try {
            const response = await handleUpload(file);

            if (response.meta.status === 200) {
                alert('File Uploaded Successfully!');
                addUploadedGif(response.data.id);
            }
        } catch(e) {
            console.log(e.message)
        }
    } else {
        form.querySelector('#gif-upload').innerText = 'Please select a file to upload.';
    }
}

export const renderRelatedGifs = async (id) => {

    const relatedGifs = await getRelatedGifs(id, 12);
    const gifIds = relatedGifs.data.map(el => el.id);

    return toGifCategorieView(gifIds, 'Related', true)

}

export const getURL = (data) => {
    return data.images.original.url || '';
};

export const splitGifs = async (data,isLocalStorage ) =>{
    let counter = 0;
    let cols = [[], [], []];
    const gifUrls= await toGifUrl(data, isLocalStorage);
    gifUrls.forEach((url, index) => {
        const gifElement = `<div class="gif"><img class='test' src="${url}" alt="Gif"></div>`;
        cols[counter].push(gifElement);
        counter = (counter + 1) % 3;
    });
    console.log(cols)
    return cols;
}

const toGifUrl = async (data, isLocalStorage) => {
    return await Promise.all(data.map(el => isLocalStorage ? `https://media.giphy.com/media/${el}/giphy.gif` : getURL(el)));
}


export const copyUrl = (url) =>{
    console.log(url);
    const imgSrc = url
    const tempInput = document.createElement('input');
    tempInput.value = imgSrc;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}