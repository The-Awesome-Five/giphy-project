import {uploadGif} from "../requests/giphy-service.js";

export const handleUpload = async (file) => {

    const body = new FormData();

    body.append('file', file);

    const response = await uploadGif(body);

    return response.meta.status;
}

export const handleUploadEvent = async (event) => {

    event.preventDefault();

    const fileInput = document.getElementById('gif-upload');
    const file = fileInput.files[0];
    if (file) {
        try {
            const status = await handleUpload(file);

            if (status === 200) {
                alert('File Uploaded Successfully!')
            }
        } catch(e) {
            console.log(e.message)
        }
    } else {
        document.getElementById('upload-status').innerText = 'Please select a file to upload.';
    }
}
