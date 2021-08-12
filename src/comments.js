import { add } from 'lodash';
import closeIcon from './assets/x-circle.svg';

const popUp = (obj, callback) => {
  const detailsPage = document.createElement('div');
  detailsPage.classList.add('details-modal-on');
  document.body.appendChild(detailsPage);

  const closeBtn = new Image();
  closeBtn.src = closeIcon;
  closeBtn.className = 'close-btn';
  closeBtn.addEventListener('click', (e) => {
    detailsPage.classList.replace('details-modal-on', 'details-modal');
  });
  detailsPage.appendChild(closeBtn);

  const detailImage = document.createElement('img');
  detailImage.className = 'img-detail';
  detailImage.src = obj.url;
  detailsPage.appendChild(detailImage);
  



  const extrasCont = document.createElement('div');
  extrasCont.className = 'extras-div';

  const imgTitle = document.createElement('h1');
  imgTitle.innerHTML = 'Image title';
  imgTitle.className = 'img-title'
  extrasCont.appendChild(imgTitle);

  const description = document.createElement('p');
  description.classList.add('description', 'extras');
  description.innerHTML = 'Description:'
  extrasCont.appendChild(description);

  const date = document.createElement('p');
  date.classList.add('date', 'extras');
  date.innerHTML = 'Date:'
  extrasCont.appendChild(date);

  const copyright = document.createElement('p');
  copyright.classList.add('copyright', 'extras');
  copyright.innerHTML = 'Copyright:'
  extrasCont.appendChild(copyright);

  const resource = document.createElement('p');
  resource.classList.add('resource', 'extras');
  resource.innerHTML = 'Resource:'
  extrasCont.appendChild(resource);
  detailsPage.appendChild(extrasCont);

  const commentsBox = document.createElement('div');
  commentsBox.classList.add('comments-box');

  const commentsCount = document.createElement('h3');
  commentsCount.classList.add('comments-count');
  commentsCount.innerHTML = 'Comments(3)';
  commentsBox.appendChild(commentsCount);

  const commentsList = document.createElement('ul');
  commentsList.classList.add('comments-list');
  const commentOne = document.createElement('li');
  commentOne.innerHTML = '2021/08/12  User1:  Hello';
  commentsList.appendChild(commentOne);
  const commentTwo = document.createElement('li');
  commentTwo.innerHTML = '2021/08/12  User2:  Hello back';
  commentsList.appendChild(commentTwo);
  commentsBox.appendChild(commentsList);
  detailsPage.appendChild(commentsBox);

  const addComment = document.createElement('div');
  addComment.classList.add('add-comment');

  const addAComm = document.createElement('h2');
  addAComm.classList.add('add-acomm');
  addAComm.innerHTML = 'Add a comment'
  addComment.appendChild(addAComm);
  const commentForm = document.createElement('form');
  const yourName = document.createElement('input');
  yourName.setAttribute('type', 'text');
  yourName.setAttribute('placeholder', 'Your name')
  yourName.classList.add('your-name');
  commentForm.appendChild(yourName);

  const yourComm = document.createElement('input');
  yourComm.setAttribute('type', 'textarea');
  yourComm.setAttribute('placeholder', 'Your insights')
  yourComm.classList.add('your-name');
  commentForm.appendChild(yourComm);

  const commBtn = document.createElement('button');
  yourComm.setAttribute('type', 'submit');
  yourComm.classList.add('comm-btn');
  commentForm.appendChild(commBtn);
  addComment.appendChild(commentForm);
  detailsPage.appendChild(addComment);

  document.body.appendChild(detailsPage);
  callback();
}

const getObj = async (callback) => {
  await fetch('https://api.nasa.gov/planetary/apod?api_key=tStRhhjFA0HQcsJqbr9OwtfYzYXhQORNoO6K52bg/url')
    .then((response) => response.json())
    .then((json) => popUp(json, callback));
};

export default getObj;
