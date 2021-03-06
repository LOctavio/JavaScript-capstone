import Icon from './assets/heart.svg';
import getObj from './comments.js';
import addLikesList from './addLikes.js';
import numberOfItems from './ItemsCounter.js';
import getComments from './getComments.js';

const printList = (list, callback) => {
  const mainDom = document.querySelector('body');
  const container = document.createElement('main');
  const listContainer = document.createElement('ul');
  listContainer.setAttribute('class', 'listContainer');
  let count = 0;
  list.forEach((element) => {
    count += 1;
    const item = document.createElement('li');
    item.id = `item${count}`;
    const image = new Image();
    image.src = element.url;
    image.setAttribute('class', 'item-image');
    const titleContainer = document.createElement('div');
    titleContainer.setAttribute('class', 'item-title');
    const title = document.createElement('h3');
    title.innerHTML = element.title;
    const like = new Image();
    like.src = Icon;
    like.setAttribute('class', 'like');
    like.addEventListener('click', (e) => addLikesList(e.target.parentNode.parentNode.id));
    const likeText = document.createElement('p');
    likeText.innerHTML = '0 likes';
    likeText.setAttribute('class', 'amount-likes');
    const button = document.createElement('button');
    button.textContent = 'Comments';
    button.setAttribute('class', 'comments-button');

    button.addEventListener('click', (e) => {
      const title = e.target.parentNode.childNodes[1].childNodes[0].textContent;
      const { id } = e.target.parentNode;
      getObj(title, id, getComments);
    });

    titleContainer.appendChild(title);
    titleContainer.appendChild(like);
    item.appendChild(image);
    item.appendChild(titleContainer);
    item.appendChild(likeText);
    item.appendChild(button);
    listContainer.appendChild(item);
  });
  container.appendChild(listContainer);
  mainDom.appendChild(container);
  const doc = document;
  numberOfItems(doc);
  callback();
};

const getList = async (callback) => {
  await fetch('https://api.nasa.gov/planetary/apod?api_key=tStRhhjFA0HQcsJqbr9OwtfYzYXhQORNoO6K52bg&start_date=2021-05-01&end_date=2021-05-6')
    .then((response) => response.json())
    .then((json) => printList(json, callback));
};

export default getList;