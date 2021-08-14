import { readFileSync } from "fs";
import { join } from "path";

export const lorem = readFileSync(join(__dirname, "lorem.txt"), "utf-8");
