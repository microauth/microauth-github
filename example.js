const { send } = require('micro');
const microAuthGithub = require('./');

const options = {
  clientId: 'CLIENT_ID',
  clientSecret: 'CLIENT_SECRET',
  callbackUrl: 'http://localhost:3000/auth/github/callback',
  path: '/auth/github',
  scope: 'user'
};

const githubAuth = microAuthGithub(options);

module.exports = githubAuth(async (req, res, auth) => {

  if (!auth) {
    return send(res, 404, 'Not Found');
  }

  if (auth.err) {
    // Error handler
    return send(res, 403, 'Forbidden');
  }

  return `Hello ${auth.result.info.login}`;

});
