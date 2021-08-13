const numberOfItems = (document) => {
  const container = document.querySelector('.listContainer');
  const numberOfItems = container.getElementsByTagName('li').length;
  const title = document.querySelector('h1');
  title.textContent += `(${numberOfItems})`;
};

export default numberOfItems;