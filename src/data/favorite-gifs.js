let favorite = JSON.parse(localStorage.getItem('favorite')) || [];

export const addToFavorite =() =>{
  const imgElement = event.target.closest('div').querySelector('img');
  const imgSrc = imgElement.src;
  const imgSrcParts = imgSrc.split('/');
  if (favorite.includes(imgSrcParts[imgSrcParts.length - 2])) {} else {
    favorite.push(imgSrcParts[imgSrcParts.length - 2]);
    localStorage.setItem('favorite', JSON.stringify(favorite));
  }
};

export const removeFromFavorite = (id) => {

  let favorite = JSON.parse(localStorage.getItem('favorite')) || [];

  favorite= favorite.filter(fav=> fav!==id);

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
  if (favorite.includes(id)) {
    return true;
  }
  return false;
};
