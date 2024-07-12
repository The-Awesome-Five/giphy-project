export const toUploadView = () =>`
  <div id="upload">
    <h1>Upload Gif:</h1>
        <div id="container">
            <form id="upload-form" class="upload">
                <input type="file" id="gif-upload" accept="image/gif" required />
                <button type="submit">Upload</button>
            </form>
        </div>    
    <div id="upload-status">
    <img id="preview-image" src="" alt="preview-image" />
</div>
  </div>
`;

