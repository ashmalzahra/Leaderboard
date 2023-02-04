import { createScore, getScores } from './scores';

export const renderScore = (user, score) => {
  const eachScore = document.createElement('li');
  eachScore.innerHTML = `${user}: ${score}`;
  eachScore.classList.add('each-score');
  document.querySelector('.scores').appendChild(eachScore);
};

export const addScore = async (user, score) => {
  const { data, stat } = await createScore(user, score);
  if (stat !== 201) return `Error ${stat}: ${data.message}`;
  return renderScore(user, score);
};
