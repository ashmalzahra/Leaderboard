import './style.css';
import { refresh, addScore } from './modules/createScore';

const refreshBtn = document.querySelector('#refresh');
const form = document.querySelector('#form');
const name = document.getElementById('name');
const score = document.getElementById('score');

form.onsubmit = (e) => {
  e.preventDefault();
  const Name = name.value;
  const Score = score.value;
  addScore(Name, Score);
  form.reset();
};

refreshBtn.onclick = () => refresh();