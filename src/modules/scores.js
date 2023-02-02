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

