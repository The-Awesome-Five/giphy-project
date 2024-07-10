export const toFavoritesView = (localURL) => `
<div id="favorite">
  <h1>Favorite Gifs:</h1>
    <div class="container">
        ${localURL.map(url => `<img id="gif" src="${url}" alt="Gif">`).join('\n')}
    </div>
</div>
`;