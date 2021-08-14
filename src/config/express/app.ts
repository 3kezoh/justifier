import { authRouter } from "@Auth";
import { errorHandler, notFound } from "@middlewares/error";
import { textRouter } from "@Text";
import express from "express";

export const app = express();

app.use(express.json());
app.use(express.text());
app.use("/auth", authRouter);
app.use("/api", textRouter);
app.use(notFound);
app.use(errorHandler);
