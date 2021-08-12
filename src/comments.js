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
  

  const imgTitle = document.createElement('h1');
  imgTitle.innerHTML = 'Image title';
  imgTitle.className = 'img-title'
  detailsPage.appendChild(imgTitle);

  const extrasCont = document.createElement('div');
  extrasCont.className = 'extras-div';

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
  document.body.appendChild(detailsPage);
  callback();
}

const getObj = async (callback) => {
  await fetch('https://api.nasa.gov/planetary/apod?api_key=tStRhhjFA0HQcsJqbr9OwtfYzYXhQORNoO6K52bg/url')
    .then((response) => response.json())
    .then((json) => popUp(json, callback));
};

export default getObj;
