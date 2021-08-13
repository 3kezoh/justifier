import express from "express";
import { authRouter } from "@Auth";
import { errorHandler, notFound } from "@middlewares/error";

export const app = express();

app.use(express.json());
app.use("/auth", authRouter);
app.use(notFound);
app.use(errorHandler);
