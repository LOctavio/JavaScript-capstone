const appURL = '7XuoMsU1STtgmjOxNrxL'

async function createAppID() {
  try {
    const getResp = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const appID = await getResp.text();
  console.log(appID);
  }

  catch(err) {
    console.log('API fail to get APP ID');
  }
};
createAppID();

