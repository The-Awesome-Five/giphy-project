import { uploadGif } from '../requests/giphy-service.js';
import { addUploadedGif } from '../data/uploaded-gifs.js';

/**
 * Handles the upload process for a GIF file.
 * Displays a toast notification during the upload process.
 * @param {File} file - The file to be uploaded.
 * @param {Event} event - The event triggered by the upload action.
 * @returns {Promise<Object>} A Promise that resolves with the response from the upload service.
 */
const handleUpload = async (file, event) => {
  const body = new FormData();
  body.append('file', file);

  Toastify({
    text: "The file is uploading right now!",
    style: {
      background: "gray",
    },
    duration: 3000
  }).showToast();

  return await uploadGif(body);
};

/**
 * Handles the upload event triggered by a form submission.
 * Disables the upload button during the upload process, shows notifications, and updates the state with the uploaded GIF.
 * @param {Event} event - The form submission event.
 */
export const handleUploadEvent = async (event) => {
  event.preventDefault();

  const form = event.target;
  const button = form.querySelector('button');
  button.disabled = true;

  const previewImage = document.querySelector('#preview-image');
  const fileInput = form.querySelector('#gif-upload');
  const file = fileInput.files[0];

  if (file) {
    try {
      const response = await handleUpload(file, event);

      if (response.meta.status === 200) {
        Toastify({
          text: "The file has been uploaded!",
          style: {
            background: "orange",
          },
          duration: 3000
        }).showToast();
        addUploadedGif(response.data.id);
        button.disabled = false;
        form.reset();
        previewImage.remove();
      }
    } catch (e) {
      Toastify({
        text: `The file was not uploaded: ${e.message}`,
        style: {
          background: "red",
        },
        duration: 3000
      }).showToast();
      button.disabled = false;
      form.reset();
      previewImage.remove();
    }
  } else {
    form.querySelector('#gif-upload').innerText = 'Please select a file to upload.';
  }
};
