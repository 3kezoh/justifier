import { authRouter } from "@Auth";
import "@config/passport";
import { errorHandler, notFound } from "@middlewares/error";
import { textRouter } from "@Text";
import compression from "compression";
import express from "express";
import passport from "passport";

export const app = express();

app.use(compression());
app.use(express.json());
app.use(express.text());
app.use(passport.initialize());
app.use("/auth", authRouter);
app.use("/api", textRouter);
app.use("/docs", express.static("docs"));
app.use(notFound);
app.use(errorHandler);
