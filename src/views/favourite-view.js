export const toFavoritesView = (localStorageIDs, className) => {
  `
<div id=${className}>
  <h1>${className[0].toUpperCase()+className.slice(1)} Gifs:</h1>
    <div id="container">
        ${localStorageIDs.map(id => `<img id="gif" src="https://media.giphy.com/media/${id}/giphy.gif" alt="Gif">`).join('\n')}
    </div>
</div>
`;}
