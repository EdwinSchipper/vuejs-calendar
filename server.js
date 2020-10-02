require('dotenv').config({ silent: true });

const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const http = require('http');
const moment = require('moment-timezone');
moment.tz.setDefault("UTC"); 
const serialize = require('serialize-javascript');


app.use('/public', express.static(path.join(__dirname, 'public')));


let events = [
  { description: 'Random event 1', date: moment('2020-09-28', 'YYYY-MM-DD') },
  { description: 'Random event 2', date: moment('2020-10-01', 'YYYY-MM-DD') },
  { description: 'Random event 3', date: moment('2020-10-17', 'YYYY-MM-DD') }
];


app.get('/', (req, res) => {
  let template = fs.readFileSync(path.resolve('./index.html'), 'utf-8');
  let contentMarker = '<!--APP-->';
  res.send(template.replace(contentMarker, `<script>var __INITIAL_STATE__ = ${ serialize(events) }</script>`));
});


// Body parser
app.use(require('body-parser').json());


// Add new route in express framework
app.post('/add_event', (req, res) => {
  console.log('received');
  console.log(req.body); // body is incoming request
  events.push(req.body); // Push incoming request in events array
  res.sendStatus(200);
 });


const server = http.createServer(app);

if (process.env.NODE_ENV === 'development') {
  const reload = require('reload');
  const reloadServer = reload(app);
  require('./webpack-dev-middleware').init(app);
}

server.listen(process.env.PORT, function () {
  console.log(`Example app listening on port ${process.env.PORT}!`);
  if (process.env.NODE_ENV === 'development') {
    require("opn")(`http://localhost:${process.env.PORT}`);
  }
});
