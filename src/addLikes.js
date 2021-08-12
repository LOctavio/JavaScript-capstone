const appURL = '7XuoMsU1STtgmjOxNrxL';

const addLikesList = async (id) => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appURL}/likes/`, {
    method: 'POST',
    body: JSON.stringify({ item_id: id }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(() => window.location.reload());
};

export default addLikesList;