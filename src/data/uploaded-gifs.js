import { USERNAME } from '../common/constants.js';

const uploaded = JSON.parse(localStorage.getItem('uploaded')) || [];

export const addUploadedGif = (gifId) => {

  const gif = {
    id: gifId,
    date: Date.now(),
    username: USERNAME,
    url: `https://media.giphy.com/media/${gifId}/giphy.gif`
  }

  uploaded.push(gif);

  localStorage.setItem('uploaded', JSON.stringify(uploaded));
};

export const getUploadedGifs = () => [...uploaded];
