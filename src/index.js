import footerDom from './footer.js';
import printHeader from './header.js';
import getList from './list.js';
import getLikesList from './likes.js';
import './style.css';

window.onload = () => {
  printHeader();
  footerDom();
  getList(getLikesList);
};