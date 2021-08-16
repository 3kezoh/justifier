import passport from "passport";
import { jwtStrategy } from "./strategies";

passport.use(jwtStrategy);
