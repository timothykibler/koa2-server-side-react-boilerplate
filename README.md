# Koa2/React boilerplate with server side rendering and routing

### Usage

```JAVASCRIPT
yarn install
yarn start
```

Or if you want to use nodemon

```JAVASCRIPT
yarn dev
```

##

Separate route files can be created to handle specific paths while everything else will fall to React, just make sure index is always the last route.

The components themselves are rendered server side using renderToString and passed to pug. Babel is loaded in the entry point bin/www file.
