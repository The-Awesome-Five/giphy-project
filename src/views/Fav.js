export const toFavoritesView = (localID) => `
<div id="favorite">
  <h1>Favorite Gifs:</h1>
    <div class="container">
        ${localID.map(id => `<img id="gif" src="https://media.giphy.com/media/${id}/giphy.gif" alt="Gif">`).join('\n')}
    </div>
</div>
`;
