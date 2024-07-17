import { loadPage, renderHome } from './events/nav-events.js';
import { copyUrl } from './events/giphy-events.js';
import { renderSearchGifs } from './events/search-event.js';
import { renderDetailedView } from './events/detailed-events.js';
import { previewImage } from './events/file-event.js';
import { getLoadedImages, resetGifState, resetLoadedImages } from './state/gif-state.js';
import { handleScroll } from './events/scroll-event.js';
import { handleUploadEvent } from './events/upload-events.js';
import { handleAddFavourite, handleRemoveFavourite } from './events/favourite-events.js';

/**
 * Initializes the event listeners when the DOM content is fully loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
  renderHome();

  /**
   * Handles the change event for file inputs to preview the selected image.
   * @param {Event} event - The change event.
   */
  document.addEventListener('change', (event) => {
    previewImage(event);
  });

  /**
   * Handles form submission events, specifically for uploading GIFs.
   * @param {Event} event - The submit event.
   */
  document.addEventListener('submit', event => {
    event.preventDefault();
    if (event.target.classList.contains('upload')) {
      handleUploadEvent(event);
    }
  });

  /**
   * Handles the keydown event for searching GIFs when the Enter key is pressed.
   * @param {Event} event - The keydown event.
   */
  document.addEventListener('keydown', event => {
    if (event.target.classList.contains('search') && event.key === 'Enter') {
      event.preventDefault();
      resetGifState();
      resetLoadedImages();
      renderSearchGifs(event.target.value);
    }
  });

  /**
   * Handles the scroll event to load more GIFs when the user scrolls to the bottom of the page.
   * @param {Event} event - The scroll event.
   */
  document.addEventListener('scroll', async (event) => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight - 100;
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll >= scrollableHeight && getLoadedImages() === 15) {
      const isTrending = event.target.querySelector('h1').textContent === 'trending';
      resetLoadedImages();
      await handleScroll(isTrending);
    }
  });

  /**
   * Handles various click events for navigation, search, and other interactions.
   * @param {Event} event - The click event.
   */
  document.addEventListener('click', event => {
    if (event.target.classList.contains('nav-link')) {
      resetGifState();
      resetLoadedImages();
      loadPage(event.target.getAttribute('data-page'));
    }

    // Handle navigation categories
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
      const newSrc = icon.style.transform === 'rotate(45deg)' ? '/img/bucket-icon-glue.png' : '/img/bucket-icon.png';
      icon.src = newSrc;
    }

    if (event.target.classList.contains('single-gif')) {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      renderDetailedView(event);
    }

    if (event.target.classList.contains('favorite')) {
      handleAddFavourite(event);
    } else if (event.target.classList.contains('remove')) {
      handleRemoveFavourite(event);
    }

    if (event.target.id.includes('getURL')) {
      const imgSrc = event.target.getAttribute('url');
      copyUrl(imgSrc);
    }
  });
});
