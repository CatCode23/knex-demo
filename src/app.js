const express = require('express')
const app = express();
const port = 8081;
const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV||'development']);

app.use(express.json())

app.get('/', (request,response) =>{
    response.send('application up and running')
})

app.get('/pets', (request,response) =>{
    knex('pet')
        .select('*')
        .then(pets => {
            var petNames = pets.map(pet => pet.name)
            response.json(petNames);
        })
        .catch(err => 
            response.status(404).json({
                message: 
                'the data you are looking for could not be found. Please try again'
            })
        )
})

app.listen(port, () => {
    console.log('your knex and express app are running successfully')
})
