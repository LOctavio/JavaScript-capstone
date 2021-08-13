import addComments from './addComments.js';
import closeIcon from './assets/x-circle.svg';
import commentCount from './commentCount.js';

const popUp = (obj, title, id) => {
  const detailsPage = document.createElement('div');
  detailsPage.classList.add('details-modal-on');
  document.body.appendChild(detailsPage);

  const closeBtn = new Image();
  closeBtn.src = closeIcon;
  closeBtn.className = 'close-btn';
  closeBtn.addEventListener('click', () => {
    detailsPage.classList.replace('details-modal-on', 'details-modal');
  });
  detailsPage.appendChild(closeBtn);

  obj.forEach((element) => {
    if (element.title === title) {
      const detailImage = document.createElement('img');
      detailImage.className = 'img-detail';
      detailImage.src = element.url;
      detailsPage.appendChild(detailImage);
      detailImage.id = `${id}_image`;

      const extrasCont = document.createElement('div');
      extrasCont.className = 'extras-div';

      const imgTitle = document.createElement('h1');
      imgTitle.innerHTML = element.title;
      imgTitle.className = 'img-title';
      extrasCont.appendChild(imgTitle);

      const descCont = document.createElement('div');
      descCont.classList.add('desc-cont', 'extras-flex');

      const description = document.createElement('p');
      description.classList.add('description', 'extras');
      description.innerHTML = 'Description:';
      descCont.appendChild(description);

      const descriptionTxt = document.createElement('p');
      descriptionTxt.classList.add('description-txt', 'extras');
      descriptionTxt.innerHTML = element.media_type;
      descCont.appendChild(descriptionTxt);
      extrasCont.appendChild(descCont);

      const dateCont = document.createElement('div');
      dateCont.classList.add('date-cont', 'extras-flex');

      const date = document.createElement('p');
      date.classList.add('date', 'extras');
      date.innerHTML = 'Date:';
      dateCont.appendChild(date);

      const dateTxt = document.createElement('p');
      dateTxt.classList.add('date', 'extras');
      dateTxt.innerHTML = element.date;
      dateCont.appendChild(dateTxt);
      extrasCont.appendChild(dateCont);

      const copyCont = document.createElement('div');
      copyCont.classList.add('copy-cont', 'extras-flex');

      const copyright = document.createElement('p');
      copyright.classList.add('copyright', 'extras');
      copyright.innerHTML = 'Service version:';
      copyCont.appendChild(copyright);

      const copyrightTxt = document.createElement('p');
      copyrightTxt.classList.add('copyright', 'extras');
      copyrightTxt.innerHTML = element.service_version;
      copyCont.appendChild(copyrightTxt);
      extrasCont.appendChild(copyCont);

      const resourceCont = document.createElement('div');
      resourceCont.classList.add('resource-cont', 'extras-flex');

      const resource = document.createElement('p');
      resource.classList.add('resource', 'extras');
      resource.innerHTML = 'Resource:';
      resourceCont.appendChild(resource);

      const resourceTxt = document.createElement('p');
      resourceTxt.classList.add('resource', 'extras');
      resourceTxt.innerHTML = element.date;
      resourceCont.appendChild(resourceTxt);
      extrasCont.appendChild(resourceCont);
      detailsPage.appendChild(extrasCont);
      const commentsBox = document.createElement('div');
      commentsBox.classList.add('comments-box');

      const commentsCount = document.createElement('h3');
      commentsCount.classList.add('comments-count');
      commentsCount.id = `${id}_count`;
      commentsCount.innerHTML = 'Comments';
      commentsBox.appendChild(commentsCount);

      const commentsList = document.createElement('div');
      commentsList.id = `${id}_comments`;
      commentsList.classList.add('comments-list');
      commentsBox.appendChild(commentsList);
      detailsPage.appendChild(commentsBox);

      const addComment = document.createElement('div');
      addComment.classList.add('add-comment');

      const addAComm = document.createElement('h2');
      addAComm.classList.add('add-acomm');
      addAComm.innerHTML = 'Add a comment';
      addComment.appendChild(addAComm);
      const yourName = document.createElement('input');
      // yourName.setAttribute('type', 'text');
      yourName.setAttribute('placeholder', 'Your name');
      yourName.classList.add('your-name');
      addComment.appendChild(yourName);

      const yourComm = document.createElement('input');
      yourComm.setAttribute('type', 'textarea');
      yourComm.setAttribute('placeholder', 'Your insights');
      yourComm.classList.add('your-comm');
      addComment.appendChild(yourComm);

      const commBtn = document.createElement('button');
      commBtn.classList.add('comm-btn');
      commBtn.textContent = 'Submit';
      commBtn.addEventListener('click', () => {
        const name = yourName.value;
        const comment = yourComm.value;
        addComments(id, commentsList, name, comment);
      });

      addComment.appendChild(commBtn);
      detailsPage.appendChild(addComment);
      document.body.appendChild(detailsPage);

    }

  });
  document.body.appendChild(detailsPage);
};

const getObj = async (title, id, callback) => {
  await fetch('https://api.nasa.gov/planetary/apod?api_key=tStRhhjFA0HQcsJqbr9OwtfYzYXhQORNoO6K52bg&start_date=2021-05-01&end_date=2021-05-21')
    .then((response) => response.json())
    .then((json) => {
      popUp(json, title, id);
      const container = document.getElementById(`${id}_image`).nextSibling.nextSibling.childNodes[1];
      callback(id, container);
    });
};

export default getObj;
