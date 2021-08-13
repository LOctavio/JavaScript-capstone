const commentCount = (document, id) => {
  const container = document.querySelector(`#${id}_comments`);
  const numberOfItems = container.childNodes.length;
  const title = document.querySelector(`#${id}_count`);
  title.textContent += `(${numberOfItems})`;
};

export default commentCount;