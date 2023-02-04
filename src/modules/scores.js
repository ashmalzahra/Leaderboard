const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/y3PbjeUWfIHeWdOysNrq/scores/';

export const createScore = async (user, score) => {
  const API = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  });
  const data = await API.json();
  const stat = API.status;
  return { data, stat };
};

export const getScores = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const stat = response.status;
  return { data, stat };
};
