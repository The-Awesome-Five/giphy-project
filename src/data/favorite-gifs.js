let favorite = JSON.parse(localStorage.getItem('favorite')) || [];

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
export const removeFromFavorite = (id) => {

  let favorite = JSON.parse(localStorage.getItem('favorite')) || [];

  favorite= favorite.filter(fav=> fav.id!==id);

  localStorage.setItem('favorite', JSON.stringify(favorite));
};

export const getFavoriteGifs = () => {
  favorite = JSON.parse(localStorage.getItem('favorite')) || [];
  return [...favorite];
};

export const createFavoriteButton = (flag ) => {
  return flag ? `<button class='remove' >👌</button>` : `<button class='favorite'>👌</button>`;
};


export const isInFavorite = (id) => {
  return favorite.some(fav => fav.id === id);
}
