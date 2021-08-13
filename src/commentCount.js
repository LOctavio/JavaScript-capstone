const commentCount = (document, id) => {
  const container = document.querySelector(`#${id}_comments`);
  const numberOfItems = container.childNodes.length;
  console.log(numberOfItems);
  const title = document.querySelector(`#${id}_count`);
  console.log(title);
  title.textContent += `(${numberOfItems})`;
};

export default commentCount;