import express from 'express';
import loglevel, { LogLevelDesc } from 'loglevel';
import { ApplicationEnvironment } from './app-environments';
import bodyParser from 'body-parser';

const app = express();

new ApplicationEnvironment();
loglevel.setLevel(ApplicationEnvironment.IDP_ENV_STORE.logLevel as unknown as LogLevelDesc);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// public static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  loglevel.info('Reached path /');
  res.send('Hello World!');
});

app.post('/form-submit', (req, res) => {
  loglevel.info('/form-submit');
  res.send('ok');
});

app.get('*', (req, res) => {
  loglevel.info('Reached path *');
  res.redirect('/');
});

app.listen(ApplicationEnvironment.IDP_ENV_STORE.PORT, () => {
  return console.log(`Express is listening for IDP store at http://localhost:${ApplicationEnvironment.IDP_ENV_STORE.PORT}`);
});