import getComments from './getComments.js';

const appURL = '7XuoMsU1STtgmjOxNrxL';

const addComments = async (id, container, name, comm) => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appURL}/comments?item_id=${id}`, {
    method: 'POST',
    body: JSON.stringify(
      {
        item_id: id,
        username: name,
        comment: comm,
      },
    ),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(() => getComments(id, container));
};

export default addComments;