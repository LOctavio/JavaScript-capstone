const commentCount = (document, id) => {
  const container = document.querySelector(`#${id}_comments`);
  const numberOfItems = container.getElementsByTagName('p').length;
  const title = document.querySelector(`#${id}_count`);
  title.textContent = 'Comments';
  title.textContent += `(${numberOfItems})`;
};

export default commentCount;