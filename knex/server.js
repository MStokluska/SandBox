const express = require('express');
const bodyParser = require('body-parser');
const knex = require('./knexfile');
const port = process.env.PORT || 4000;
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ALT WAY
// app.get('/todos', (req, res) => {
//     console.log("inside todos")
//     knex.raw('select * from todos')
//         .then((todos) => {
//             res.send(todos.rows);
//         })
// })

// BETTER WAY
app.get('/todos', (req, res) => {
    knex.select().from('todos').then((todos) => {
        res.send(todos);
    })
});

// get by id
app.get('/todos/:id', (req, res) => {
    console.log(req.params.id)
    knex.select().from('todos').where('id', req.params.id)
        .then((todos) => {
            res.send(todos);
        })
});

// insert 
app.post('/todos', (req, res) => {
    knex('todos').insert({
        title: " go play some sports",
        user_id: 1
    })
        .then((todos) => {
            res.send(todos);
        })
});

// delete
app.delete('/todos/:id', (req, res) => {
    knex('todos').where('id', req.params.id).del()
        .then(() => {
            knex.select().from('todos').then((todos) => {
                res.send(todos)
            })
        })
})

app.listen(port, () => {
    console.log("listening on port: ", port)
});