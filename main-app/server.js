const express = require('express')
const app = express()

const fibonacciCheck = (num) => {

    firstNum = 0;
    secondNum = 1;
    let fibNum
    
    for(let i = 0; i <= num; i++) {
        fibNum = firstNum + secondNum
        if(num === fibNum) {
            return true
        }
        firstNum = secondNum
        secondNum = fibNum
    }
    
    return false
}

app.get('/', (req, res) => {
    res.send('<h1>This is a Fibonacci Number Check</h1>')
})

app.get('/:number', (req, res) => {
    let fibNumber = req.params.number
    let checkNumber = parseInt(fibNumber)
    if(fibonacciCheck(checkNumber)) {
        res.send(`<h1>Very good. ${fibNumber} is Fibonacci.</h1>`)
    } else {
        res.send(`<h1>I can tell ${fibNumber} is not a fibonacci number.</h1>`)
    }
})

app.listen(3000, function () {
    console.log('Listening on port 3000');
});