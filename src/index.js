import footerDom from './footerjs';
import printHeader from './header.js';
import getList from './list.js';
import './style.css';

window.onload = () => {
  printHeader();
  footerDom();
  getList();
};