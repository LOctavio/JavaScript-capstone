import Icon from './assets/logo.svg';

const printHeader = () => {
  const mainDom = document.querySelector('body');
  const header = document.createElement('header');
  const logo = new Image();
  logo.src = Icon;
  const title = document.createElement('h1');
  title.innerHTML = 'Nasa picture of the day';
  header.appendChild(logo);
  header.appendChild(title);
  mainDom.appendChild(header);
};

export default printHeader;