import './style.css';
import ScoreBoard from './modules/scores';

const Leaderboard = new ScoreBoard

window.onload = () => {
    document.getElementById('submit').addEventListener('click', (e) => {
        e.preventDefault()
        Leaderboard.addScore()
    })

    document.getElementById('refresh').addEventListener('click', () => {
        Leaderboard.refresh()
    })
}