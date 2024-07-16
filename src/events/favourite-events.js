import { addToFavorite, removeFromFavorite } from '../data/favorite-gifs.js';

/**
 * Handles the event to add a GIF to the favorite list.
 * Changes the button class and text content to indicate the action.
 * @param {Event} event - The event triggered by the user interaction.
 */
export const handleAddFavourite = (event) => {
  addToFavorite(event);
  const button = event.target;
  const newID = 'remove';
  button.className = newID;
  button.textContent = '👌';
};

/**
 * Handles the event to remove a GIF from the favorite list.
 * Changes the button class and text content to indicate the action.
 * @param {Event} event - The event triggered by the user interaction.
 */
export const handleRemoveFavourite = (event) => {
  const imgID = event.target.parentElement.parentElement.querySelector('img').id.split('-')[1];
  removeFromFavorite(imgID);
  const button = event.target;
  const newID = 'favorite';
  button.className = newID;
  button.textContent = '👌';
};
