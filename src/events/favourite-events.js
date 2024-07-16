import { addToFavorite, removeFromFavorite } from '../data/favorite-gifs.js';

export const handleAddFavourite = (event) => {
  addToFavorite(event);
  const button = event.target;
  const newID= 'remove';
  button.className = newID;
  button.textContent ='👌';
}

export const handleRemoveFavourite = (event) => {
  const imgID = event.target.parentElement.parentElement.querySelector('img').id.split('-')[1];
  removeFromFavorite(imgID);
  const button = event.target;
  const newID= 'favorite';
  button.className = newID;
  button.textContent ='👌';
}
