export const toUploadView = () =>`
  <div id="upload">
    <h1>Upload Gif:</h1>
    <form id="upload-form">
      <input type="file" id="gif-upload" accept="image/gif" required />
      <button type="submit">Upload</button>
    </form>
    <div id="upload-status"></div>
  </div>
`;