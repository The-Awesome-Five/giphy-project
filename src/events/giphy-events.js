import {uploadGif} from "../requests/giphy-service.js";

export const handleUpload = async (file) => {

    const body = new FormData();

    body.append('file', file);

    const response = await uploadGif(body);

    return response.meta.status;
}
