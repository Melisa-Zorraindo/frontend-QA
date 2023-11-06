import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { getXataClient, Questions } from "./xata";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const xata = getXataClient();

app.get("/api/frontend-questions", async (req: Request, res: Response) => {
  const data = await xata.db.Questions.getAll();
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
