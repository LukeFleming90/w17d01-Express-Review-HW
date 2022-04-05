const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>99 Bottles of Beer on the Wall <a href=/98> Take one down, pass it around</a></h1>')
})

app.get('/:number_of_bottles', (req, res) => {
    let bottle = req.params.number_of_bottles;
    
    if(bottle !== '0') {
        res.send(`<h1>${bottle} Bottles of Beer on the Wall <a href=/${parseInt(bottle) - 1}> Take one down, pass it around</a></h1>`)
    }

    if(bottle === '0') {
        res.send(`<h1><a href=/>Go back to the beginning</a></h1>`)
    }
})

app.listen(3000, function () {
    console.log('Listening on port 3000');
});