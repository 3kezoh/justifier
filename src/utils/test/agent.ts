import { app } from "@config";
import request from "supertest";

export const agent = request.agent(app);
