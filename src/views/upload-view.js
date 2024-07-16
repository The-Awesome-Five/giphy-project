/**
 * Generates the HTML view for the GIF upload page.
 * @returns {string} The HTML string for the upload view.
 */
export const toUploadView = () => `
  <div id="upload">
    <h1>Upload Gif</h1>
    <div id="container-upload">
      <img id="preview-image" src="" alt="" />
      <form id="upload-form" class="upload">
        <label for="gif-upload" class="file-upload-label">Choose a GIF</label>
        <input type="file" id="gif-upload" accept="image/gif" required />
        <button type="submit">Upload</button>
      </form>
    </div>    
    <div id="upload-status"></div>
  </div>
`;
