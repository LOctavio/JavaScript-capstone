

const appURL = '7XuoMsU1STtgmjOxNrxL';

const printComments = (id, json) => {
  json.forEach((item) => {
    const commentsBox = document.querySelector('comments-box');
    let nameDom = document.createElement('p');
    nameDom.innerHTML = item.username;
    let commDom = document.createElement('p');
    commDom.innerHTML = item.comment;
    commentsBox.appendChild(nameDom);
  })
}
const getComments = async (id) => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appURL}/comments?item_id=${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((response) => response.json())
  .then((json) => printComments(id, json));
  console.log(json);
}

export default getComments;

