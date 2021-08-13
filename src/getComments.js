import commentCount from "./commentCount";
const appURL = '7XuoMsU1STtgmjOxNrxL';

const getComments = async (id, container) => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appURL}/comments?item_id=${id}`)
    .then((response) => response.json())
    .then((json) =>{
      container.innerHTML = '';
      json.forEach((item) => {
        const comment = document.createElement('p');
        comment.innerHTML = `${item.creation_date} ${item.username}: ${item.comment}`;
        container.appendChild(comment);
      })
      const doc = document;
      commentCount(doc, id);
    }
    ); 
};

export default getComments;