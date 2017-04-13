# microauth-gituhb

> Github oauth for [micro](https://github.com/zeit/micro/)

[![Build Status](https://travis-ci.org/microauth/microauth-github.svg?branch=master)](https://travis-ci.org/microauth/microauth-github)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![Greenkeeper badge](https://badges.greenkeeper.io/microauth/microauth-github.svg)](https://greenkeeper.io/)

Add [github](https://github.com) authentication to your [micro](https://github.com/zeit/micro/) in few lines of code.
This module is a part of [microauth](https://github.com/microauth/microauth) collection.

## Installation

```sh
npm install --save microauth-github
# or
yarn add microauth-github
```

## Usage

app.js
```js
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

// third `auth` argument will provide error or result of authentication
// so it will { err: errorObject } or { result: {
//  provider: 'github',
//  accessToken: 'blahblah',
//  info: userInfo
// }}
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

```

Run:
```sh
micro app.js
```

Now visit `http://localhost:3000/auth/github`

## Alternatives

Also you can see [micro-github](https://github.com/mxstbr/micro-github). This is ready for deploy microservice from [@mxstbr](https://github.com/mxstbr)

## Author
[Dmitry Pavlovsky](http://palosk.in)
