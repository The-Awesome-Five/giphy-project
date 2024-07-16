/**
 * The state array that holds GIF data.
 * @type {Array<Object>}
 */
let gifState = [];

/**
 * The current offset for loading GIFs.
 * @type {number}
 */
let offset = 15;

/**
 * The current offset for loaded GIFs.
 * @type {number}
 */
let currOffset = 0;

/**
 * The count of loaded images.
 * @type {number}
 */
let loadedImages = 0;

/**
 * Populates the GIF state with the provided data.
 * @param {Array<Object>} data - The array of GIF data objects.
 */
export const populateGifState = (data) => {
  const temp = data.map(gif => ({
    id: gif.id,
    username: gif.username,
    date: gif.import_datetime,
    url: gif.images.original.url,
  }));

  gifState = [...gifState, ...temp];
};

/**
 * Retrieves the current state of GIFs.
 * @returns {Array<Object>} A copy of the current GIF state.
 */
export const getGifState = () => [...gifState];

/**
 * Resets the GIF state and associated offsets.
 */
export const resetGifState = () => {
  gifState = [];
  offset = 15;
  currOffset = 0;
};

/**
 * Retrieves the count of loaded images.
 * @returns {number} The number of loaded images.
 */
export const getLoadedImages = () => loadedImages;

/**
 * Increments the count of loaded images by one.
 */
export const incrementLoadedImages = () => loadedImages++;

/**
 * Resets the count of loaded images to zero.
 */
export const resetLoadedImages = () => loadedImages = 0;

/**
 * Retrieves the current offset for loading GIFs.
 * @returns {number} The current offset.
 */
export const getOffset = () => offset;

/**
 * Increments the offset for loading GIFs by 45.
 */
export const incrementOffset = () => offset += 45;

/**
 * Retrieves the current offset for loaded GIFs.
 * @returns {number} The current offset for loaded GIFs.
 */
export const getCurrOffset = () => currOffset;

/**
 * Increments the offset for loaded GIFs by 15.
 */
export const incrementCurrOffset = () => currOffset += 15;
