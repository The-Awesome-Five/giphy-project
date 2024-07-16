/**
 * Retrieves the 'favorite' items from localStorage and parses them.
 * @type {Array<Object>}
 */
let favorite = JSON.parse(localStorage.getItem('favorite')) || [];

/**
 * Adds a GIF to the favorite list stored in localStorage.
 * @param {Event} event - The event triggered by adding a GIF to the favorite list.
 */
export const addToFavorite = (event) => {
  const imgElement = event.target.parentElement.parentElement.querySelector('img');
  const imgSrc = imgElement.src;
  const imgDate = imgElement.getAttribute('date');
  const imgId = imgElement.id.split('-');
  const gifId = imgId[1];
  const username = imgId[2];
  let favorite = JSON.parse(localStorage.getItem('favorite')) || [];
  if (!favorite.some(fav => fav.id === gifId)) {
    favorite.push({
      id: gifId,
      username: username,
      date: imgDate,
      url: imgSrc,
    });
    localStorage.setItem('favorite', JSON.stringify(favorite));
  }
};

/**
 * Removes a GIF from the favorite list stored in localStorage by its ID.
 * @param {string} id - The ID of the GIF to be removed from the favorite list.
 */
export const removeFromFavorite = (id) => {
  let favorite = JSON.parse(localStorage.getItem('favorite')) || [];
  favorite = favorite.filter(fav => fav.id !== id);
  localStorage.setItem('favorite', JSON.stringify(favorite));
};

/**
 * Retrieves the list of favorite GIFs from localStorage.
 * @returns {Array<Object>} The array of favorite GIF objects.
 */
export const getFavoriteGifs = () => {
  favorite = JSON.parse(localStorage.getItem('favorite')) || [];
  return [...favorite];
};

/**
 * Creates a button for favoriting or removing a favorite GIF.
 * @param {boolean} flag - A flag indicating whether the GIF is already in the favorite list.
 * @returns {string} The HTML string for the button element.
 */
export const createFavoriteButton = (flag) => {
  return flag ? `<button class='remove'>👌</button>` : `<button class='favorite'>👌</button>`;
};

/**
 * Checks if a GIF is in the favorite list by its ID.
 * @param {string} id - The ID of the GIF to check.
 * @returns {boolean} True if the GIF is in the favorite list, false otherwise.
 */
export const isInFavorite = (id) => {
  return favorite.some(fav => fav.id === id);
};
