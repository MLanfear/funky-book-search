const express = require('express');
const path = require('path');

const {ApolloServer} = require('apollo-server-express');
const {typeDefs, resolvers} = require("./schemas");

const db = require('./config/connection');
const {authMiddleware} = require ('./utils/auth');


const PORT = process.env.PORT || 3001;

//APOLLO SERVER BUILD
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//  ¥¥¥¥¥ APOLLO SERVER ¥¥¥¥¥
const startApolloServer = async (typeDefs,resolvers) => {
  await server.start();
  //SERVER INEGRATION WITH EXPRESS
  server.applyMiddleware({app});
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

  app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

  db.once('open',()=> {
    app.listen(PORT, () => {
      console.log(`Apollo Server running on port ${PORT}`);
      console.log(`Use GraphQL to test at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};
startApolloServer(typeDefs,resolvers);