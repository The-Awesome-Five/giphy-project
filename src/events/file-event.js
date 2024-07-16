/**
 * Previews the selected image file in an <img> element with the ID 'preview-image'.
 * @param {Event} event - The event triggered by selecting an image file.
 */
export const previewImage = (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const imgElement = document.getElementById('preview-image');
      imgElement.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};
