import express from 'express';  
import webpack from 'webpack';  
import path from 'path';  
import config from '../webpack.config';  
import open from 'open';  
import favicon from 'serve-favicon';
import data from './assets/data' ;

/* eslint-disable no-console */

const port = 3000;  
const app = express();  
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {  
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));  
app.use(favicon(path.join(__dirname,'assets','public','favicon.ico')));

app.get('/api/v1/books', function(req, res) {  
  res.json(data) ;
});

app.get('*', function(req, res) {  
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {  
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});