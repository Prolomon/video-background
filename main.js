let menu = document.querySelector('.toggle');
let showcase = document.querySelector('.showcase');

menu.addEventListener('click', () =>  {
  menu.classList.toggle('active');
  showcase.classList.toggle('active');
});
