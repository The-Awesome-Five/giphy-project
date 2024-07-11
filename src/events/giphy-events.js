import {uploadGif} from "../requests/giphy-service.js";
import {addUploadedGif} from "../data/uploaded-gifs.js";

const handleUpload = async (file) => {

    const body = new FormData();

    body.append('file', file);

    return await uploadGif(body);
}

export const handleUploadEvent = async (event) => {

    event.preventDefault();

    const form = event.target;
    const fileInput = form.querySelector('#gif-upload');

    const file = fileInput.files[0];
    if (file) {
        try {
            const response = await handleUpload(file);

            if (response.meta.status === 200) {
                alert('File Uploaded Successfully!');
                addUploadedGif(response.data.id);
            }
        } catch(e) {
            console.log(e.message)
        }
    } else {
        form.querySelector('#gif-upload').innerText = 'Please select a file to upload.';
    }
}
