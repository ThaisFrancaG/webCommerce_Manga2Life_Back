import express, { json } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(json());

app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
