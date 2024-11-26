const hamburger = document.querySelector('.hamburger-btn');
const icon = document.querySelector('.hamburger-icon');
const list = document.querySelector('.menu-list');
const contactBtn = document.querySelector('.btn-1');
// const downloadCV = document.querySelector('.btn-2');

hamburger.addEventListener('click', () => {
    icon.classList.toggle('open')
    list.classList.toggle('open');
})

contactBtn.addEventListener('click', () => location.href='./#contact');

// downloadCV.addEventListener('click', () => {
//     const link = document.createElement('a');
//     link.download = "Angelito-CV.pdf";
//     link.href = "./assets/Angelito-CV.pdf";
//     link.click();
// })