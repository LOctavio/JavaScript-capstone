const popUp = () => {
  const detailsPage = document.createElement('div');
  detailsPage.classList.add('details-modal-on');
  document.body.appendChild(detailsPage);

  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'Close';
  closeBtn.classList.add('close-btn');
  detailsPage.appendChild(closeBtn);

  const imgTitle = document.createElement('h1');
  imgTitle.innerHTML = 'Image title';
  detailsPage.appendChild(imgTitle);
  document.body.appendChild(detailsPage);

  closeBtn.addEventListener('click', (e) => {
    detailsPage.classList.replace('details-modal-on', 'details-modal');
  })

  document.body.onclick = function(event) {
    if (event.target == detailsPage ) {
      detailsPage.classList.replace('details-modal-on', 'details-modal');
    }
    
  }

}

export default popUp;
