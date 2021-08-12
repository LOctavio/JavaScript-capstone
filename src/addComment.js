const appURL = '7XuoMsU1STtgmjOxNrxL';

const addComments = async (id, username, comment) => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appURL}/comments/`, {
    method: 'POST',
    body: JSON.stringify({
      "item_id": id,
      "username": username,
      "comment": comment
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(() => window.location.reload());
};

export default addComments;