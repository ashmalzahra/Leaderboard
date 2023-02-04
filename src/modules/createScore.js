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

export const refresh = async () => {
  const { data, stat } = await getScores();
  const scores = document.querySelector('.scores');
  if (stat !== 200) scores.innerHTML = `Error ${stat}: ${data.message}`;
  else {
    scores.innerHTML = '';
    data.result.forEach((e) => {
      const score = document.createElement('li');
      score.classList.add('each-score');
      score.innerHTML = `${e.user}: ${e.score}`;
      scores.appendChild(score);
    });
  }
};
