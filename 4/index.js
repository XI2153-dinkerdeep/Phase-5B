const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});

const books = [
    {id: 1, name: 'book1'},
    {id: 2, name: 'book2'},
    {id: 3, name: 'book3'}
];

app.get('/api/books', (req, res) => {
    res.send(books);
})

app.post('/api/books', (req, res) => {
    const book = {
        id: books.length + 1,
        name: req.body.name
    };
    books.push(book);
    res.send(book);
});

app.get('/api/books/:id', (req, res) => {
    const book = books.find(x => x.id === parseInt(req.params.id));
    if(!book) res.status(404).send('Not found');
    res.send(book);
});

app.put('/api/books/:id', (req,res) => {
    
});
const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Listening to port ${port}...`);});