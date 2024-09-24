const express = require('express')  // Gives us access to express
const app = express()   // wherever we see 'app' we're using 'express'
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
    'bad bunny': {
        'age': 30,
        'birthName': 'Benito Antonio Martínez Ocasio',
        'birthLocation': 'Vega Baja, Puerto Rico'
    },
    'myke towers': {
        'age': 30,
        'birthName': 'Michael Anthony Torres Monge',
        'birthLocation': 'Río Piedras, Puerto Rico'
    },
    'random': {
        'age': 0,
        'birthName': 'Unknown',
        'birthLocation': 'Unknown'
    }
}

// Set up server to hear request and respond with 
// simple HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const rapperName = req.params.name.toLowerCase()
    if(rappers[rapperName]) {
        res.json(rappers[rapperName])
    }else {
        res.json(rappers['random'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})