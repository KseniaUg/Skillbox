

const burger = document.querySelector('.header__burger');
const navigation = document.querySelector('.nav');
const body = document.querySelector('body');

if (burger) burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navigation.classList.toggle('active');
  body.classList.toggle('body-static');
});
