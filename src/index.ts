import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import questions from "./questions.json";

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/api/frontend-questions", (req: Request, res: Response) => {
  res.json(questions);
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
