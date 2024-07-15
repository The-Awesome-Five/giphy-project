import { loadPage, renderHome } from './events/nav-events.js';
import { copyUrl, handleUploadEvent } from './events/giphy-events.js';
import { renderSearchGifs } from './events/search-event.js';
import { renderDetailedView } from './events/detailed-events.js';
import { addToFavorite } from './data/favorite-gifs.js';
import { previewImage } from './events/file-event.js';
import { removeFromFavorite } from './data/favorite-gifs.js';
import { getLoadedImages, resetGifState, resetLoadedImages } from './state/gif-state.js';
import { handleScroll } from './events/scroll-event.js';
import { searchGif } from './requests/giphy-service.js';
const counter=0;
document.addEventListener('DOMContentLoaded', () => {

  renderHome();

  document.addEventListener('change', (event) => {
    previewImage(event);
  });

  document.addEventListener('submit', event => {

    event.preventDefault();

    if (event.target.classList.contains('upload')) {
      handleUploadEvent(event);
    }
  });

  document.addEventListener('keydown', event => {

    if (event.target.classList.contains('search') && event.key === 'Enter') {
      event.preventDefault();
      resetGifState();
      resetLoadedImages();
      renderSearchGifs(event.target.value);
    }

  });

  document.addEventListener('scroll', async (event) => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight - 100;
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll >= scrollableHeight && getLoadedImages()===15) {
      const isTrending = event.target.querySelector('h1').textContent === 'trending';
      resetLoadedImages();
      await handleScroll(isTrending);
    }
  });


  document.addEventListener('click', event => {

    if (event.target.classList.contains('nav-link')) {
      resetGifState();
      resetLoadedImages();
      loadPage(event.target.getAttribute('data-page'));
    }

    // nav-cats
    if (event.target.id.includes('nav')) {
      resetGifState();
      resetLoadedImages();
      renderSearchGifs(event.target.id.slice(4));
    }

    if (event.target.id === 'logo') {
      resetGifState();
      resetLoadedImages();
      loadPage(event.target.getAttribute('data-page'));
    }

    if (event.target.id === 'search-btn') {
      resetGifState();
      resetLoadedImages();
      renderSearchGifs(event.target.parentElement.querySelector('#search').value);
    }

    if (event.target.id === 'menu-icon') {
      const menu = document.getElementById('container-menu');
      const icon = document.getElementById('menu-icon');
      menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'block' : 'none';
      icon.style.transform = icon.style.transform === 'rotate(45deg)' ? 'rotate(0deg)' : 'rotate(45deg)';
    }

    if (event.target.classList.contains('single-gif')) {

      const isFavourite = event.target.id.includes('favourite');
      console.log(isFavourite);
      console.log(event.target.id);
      const imgSrc = event.target.src;
      const imgSrcParts = imgSrc.split('/');
      renderDetailedView(imgSrcParts[imgSrcParts.length - 2], isFavourite);
    }

    if (event.target.classList.contains('favorite')) {
      addToFavorite();
      console.log('Trigger ADD');
      const button = event.target;

      console.log(button);
      const newID= 'remove';
      button.className = newID;
      button.textContent ='👌';
      console.log(button);
    } else if (event.target.classList.contains('remove')) {
      const imgID = event.target.closest('div').querySelector('img').id.split('-')[1];
      removeFromFavorite(imgID);
      console.log('Trigger Remove');
      const button = event.target;
      console.log(button);
      const newID= 'favorite';
      button.className = newID;
      button.textContent ='👌';
      console.log(button);
    }

    if (event.target.id.includes('getURL')) {
      const imgSrc = event.target.getAttribute('url');
      copyUrl(imgSrc);
    }
  });

});


