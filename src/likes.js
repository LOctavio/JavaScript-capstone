const appURL = '7XuoMsU1STtgmjOxNrxL';

const getLikesList = async () => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appURL}/likes/`)
    .then((response) => response.json())
    .then((json) => {
      json.forEach((element) => {
        document.getElementById(element.item_id).childNodes[2].innerHTML = `${element.likes} likes`;
      });
    });
};

export default getLikesList;
