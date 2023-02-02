const { createHtmlTagObject } = require("html-webpack-plugin");

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const submit = async (user, score) => {
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            { 
                user: `${user}`,
                score: `${score}`
            }
        )
    })
}

class ScoreBoard {
    constructor(){
        this.list = []
    }

    addScore(){
        const scoresObject = {}
         scoresObject.user = document.getElementById('name').value
         scoresObject.score = document.getElementById('score').value
        if(scoresObject.user != '' && scoresObject.score != ''){
            this.list.push(scoresObject)
            submit(scoresObject.user, scoresObject.score)
        }
        createHtml()
        document.getElementById('name').value = null
        document.getElementById('score').value = null

    }

    createHtml(){
        scores = document.querySelector('.scores')
        scores.innerHtml = ''
        this.list.forEach((object) => {
            const element = document.createElement('li')
            element.classList.add('each-score')
            element.innerText = `${scoresObject.user}: ${scoresObject.score}`
            scores.appendChild(element)
        })
    }
}