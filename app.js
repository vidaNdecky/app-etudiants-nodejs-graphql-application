const express = require('express');
// const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./shema');
const services = require('./services');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: services,
  graphiql: true
}));

// app.use(bodyParser.json());

app.listen(4001, () => {
  console.log('Le serveur GraphQL est en écoute sur le port 4001...');
});