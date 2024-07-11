export const toGifCategorieView = async (data, name) => {
  let counter = 0;
  let cols = [[], [], []];
  const gifUrls = await Promise.all(data.map(el => toGif(el)));

  gifUrls.forEach((url, index) => {
    const gifElement = `<div class="gif"><img src="${url}" alt="Gif"></div>`;
    cols[counter].push(gifElement);
    counter = (counter + 1) % 3;
  });

  return `
    <h1>${name}:</h1>
    <div id="container">
      <div class="gif-gallery">
        ${cols.map((col, index) => `
          <div id="col-${index}">
            ${col.join('\n')}
          </div>
        `).join('\n')}
      </div>
    </div>
  `;
};

export const toGif = (data) => {
  return data.images.original.url;
};