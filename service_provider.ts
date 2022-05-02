import express from 'express';
import loglevel, { LogLevelDesc } from 'loglevel';
import { ApplicationEnvironment } from './app-environments';
import jwt from 'jsonwebtoken';
const path = require('path');
const app = express();
new ApplicationEnvironment();

// app.use(express.static('public-service'));
loglevel.setLevel(ApplicationEnvironment.SERVICE_ENV_STROE.logLevel as unknown as LogLevelDesc);
app.use(express.static('public-service'));

app.get('/', (req, res) => {
  loglevel.info('Reached /');
  res.status(200).send();
});

app.get('/saml', (req, res) => {
  loglevel.info('Reached GET /saml');
  const cookievalues = {'service-provider': "service-4000"};
  const options = {
    expiresIn:'3600000',
    audience: 'sp-saml',
    issuer: 'sp-server'
  };
  const token = jwt.sign(cookievalues, ApplicationEnvironment.SERVICE_ENV_STROE.SERVICE_JWT, options)
  res.cookie('sp', token).sendFile(path.join(__dirname, '/public-service/index.html'));
});

app.post('/saml', (req, res) => {
  loglevel.info('Reached POST /saml');
  res.status(200).send();
});

app.get('*', (req, res) => {
  loglevel.info('Reached GET *');
  res.redirect('/');
});

app.listen(ApplicationEnvironment.SERVICE_ENV_STROE.PORT, () => {
  return console.log(`Express is listening for Service App at -  http://localhost:${ApplicationEnvironment.SERVICE_ENV_STROE.PORT}`);
});
