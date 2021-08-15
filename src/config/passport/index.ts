import { jwtStrategy } from "./strategies";
import passport from "passport";

passport.use(jwtStrategy);
