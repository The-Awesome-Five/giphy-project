
export const toDetailedView =  (info, views) => {
    return `
     
          <img id="gif" src=${info.images.original.url} alt="Gif">
          ${'\n'}
          <h1> User: ${info.username}</h2>
           ${'\n'}
          <h2> Views: ${views}</h2>
           ${'\n'}
          <h2> Upload Date: ${info.import_datetime}</h2>

            <button id='favorite'>Add to Favorite</button>
            <button id='getURL">Get URL</button>
        </div>
      </div>
    `;
  };

