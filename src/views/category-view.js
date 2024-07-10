export const toGifCategorieView = async (data, name) => {

    const gifUrls = await Promise.all(data.map(el => toGif(el)));
    return `
      <div id="gifs">
        <h1>${name}:</h1>
        <div class="container">
          ${gifUrls.map(url => `<img id="gif" src="${url}" alt="Gif">`).join('\n')}
        </div>
      </div>
    `;
  };
  
  export const toGif =  (data) => {
    return  data.images.original.url;
  };