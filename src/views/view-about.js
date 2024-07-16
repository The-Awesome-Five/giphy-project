/**
 * Generates the HTML view for the About page.
 * @returns {string} The HTML string for the About view.
 */
export const toAboutView = () => `
<div id="about-view">
  <div id="container">
    <h1>Welcome to GifHub</h1>
    <p>
      At GifHub, we believe in the power of visual storytelling. 
      Our platform is dedicated to providing a seamless and enjoyable experience for 
      sharing, and discovering animated GIFs that capture the essence of your moments, ideas, and emotions.
    </p>
    <h1>Developers</h1>
    <div id="container-dev">
      <img src="img/avatars/svet.png" height="130" alt="Svet Avatar">
      <img src="img/avatars/vlad.png" height="130" alt="Vlad Avatar">
      <img src="img/avatars/doni.png" height="130" alt="Doni Avatar">
      <p>Vlad</p>
      <p>Svet</p>
      <p>Doni</p>
    </div>
  </div>
</div>
`;
