const footerDom = () => {
  const mainDom = document.querySelector('body');
  const footerGrid = document.createElement('footer');
  footerGrid.classList.add('footer-grid');
  footerGrid.innerHTML = 'Created by KK and LO';
  mainDom.appendChild(footerGrid);
  return mainDom;
}

export default footerDom;