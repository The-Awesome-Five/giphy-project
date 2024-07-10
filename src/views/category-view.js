export const toGifCategorieView = async (data) => {
    const gifUrls = await Promise.all(data.map(el => toGif(el)));
    return `
      <div id="gifs">
        <h1>${data[0].name}:</h1>
        <div class="container">
          ${gifUrls.map(url => `<img id="gif" src="${url}" alt="Gif">`).join('\n')}
        </div>
      </div>
    `;
  };
  
  export const toGif = async (data) => {
    return await data.image.original.url;
  };