const path = require('path');
const express = require('express');
const apiRouter = require('./routes/api');
const cookieParser = require('cookie-parser');
const cookieController = require('./controllers/cookieController');

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRouter);

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/cookie', cookieController.setCookie, (req,res)=>{
  return res.sendStatus(204);
});

app.get('/', cookieController.setCookie, express.static(path.join(__dirname, '../build')));

app.use((req, res)=>res.sendStatus(404));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});