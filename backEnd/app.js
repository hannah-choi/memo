const express = require('express');
const app = express();
const port = 8440;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const postRouter = require('./routes/post.js');
const userRouter = require('./routes/user.js');

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('../frontEnd'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  })


