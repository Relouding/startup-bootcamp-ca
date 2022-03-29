function previewFullscreen() {}
const imgs = document.querySelectorAll('.--work_content-content img');
const fullPage = document.querySelector('#--fullpage');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    fullPage.style.backgroundImage = 'url(' + img.src + ')';
    fullPage.style.display = 'block';
  });
});