const uploaded = JSON.parse(localStorage.getItem('uploaded')) || [];

export const addUploadedGif = (gifId) => {
  if (uploaded.find(id => id === gifId)) {
    // Uploaded gif already added to localStorage
    return;
  }

  uploaded.push(gifId);
  localStorage.setItem('uploaded', JSON.stringify(uploaded));
};

export const getUploadedGifs = () => [...uploaded];
