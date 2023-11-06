import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { getXataClient, Questions } from "./xata";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const xata = getXataClient();

type customResponse =
  | {
      data: Questions[];
    }
  | {
      err: string;
    };

app.get(
  "/api/frontend-questions",
  async (req: Request, res: Response<customResponse>) => {
    try {
      const questions = await xata.db.Questions.getAll();
      res.status(200).json({ data: questions });
    } catch (err) {
      console.error(err);
      res.status(500).json({ err: "Internal Server Error" });
    }
  }
);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
