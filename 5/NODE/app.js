const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');
const Blog = require('./models/blog.js');
const { render } = require('ejs');

const app = express();

//connect to mongodb
const dbURI = "mongodb+srv://dinkerxebia:Dinker123@cluster0.fpx5p.mongodb.net/node-tuts?retryWrites=true&w=majority";
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));
app.set('view engine', 'ejs');


// app.listen(3000);
// app.get('/', (req, res) => {
//     res.sendFile('./views/index.html', { root: __dirname});
// });

// //Redirect
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });

// app.use((req, res, next) => {
//     console.log('new request made: ');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });


// middleware and static-files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/',(req, res) => {
    res.redirect('/blogs');
});

app.get('/about' ,(req, res) => {
    res.render('about', {title: 'About'});
});
//blogs

app.get('/blogs',(req, res) => {
    Blog.find()
        .then((result) => {
            res.render('index', {title: 'All Blogs', blogs: result});
        })
        .catch((err) => {
            console.log(err); 
        });
});

app.post('/blogs', (req, res) => {
    // console.log(req.body);
    const blog = new Blog(req.body);
  
    blog.save()
      .then(result => {
        res.redirect('/blogs');
      })
      .catch(err => {
        console.log(err);
      });
  });

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
      .then(result => {
        res.render('details', { blog: result, title: 'Blog Details' });
      })
      .catch(err => {
        console.log(err);
      });
  });

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create a New Blog'});
});


app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: "new blog-2",
        snippet: "about my new blog",
        body: "more about my new blog"
    });
    blog.save()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err); 
    })
})

app.get('/all-blogs',(req, res) => {
    Blog.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    });
});

app.get('/single-blog',(req, res) => {
    Blog.findById('6057bc81b71fb8212cd10e00')
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

//404
app.use((req, res) => {
    res.status(404).render('404', {title: 'Error: 404'});
});