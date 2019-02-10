import express from "express";
import cors from "cors";
import graphqlHTTP from "express-graphql";

import { schema } from "./schema/schema";

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4002, () => {
  console.log("Server is running on 4002 port");
});