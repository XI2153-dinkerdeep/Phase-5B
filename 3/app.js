const express = require('express');
const app = express();
const members = require('./Members');
 
const PORT = process.env.PORT || 5000;

app.get('/',(req, res) => {
    res.send('hello World!!');
});

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

app.use(logger);

// Get all members
app.get('/api/members', (req, res) => res.json(members));

//Get Single Member
app.get('api/members/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }
    else {
        res.status(400).json({msg: "member not found"});
    }
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));