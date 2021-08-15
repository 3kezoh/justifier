import { jwt } from "@config/globals";
import { Strategy as JwtStrategy, StrategyOptions, ExtractJwt, VerifyCallback } from "passport-jwt";
import { User } from "@User";

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwt.secret,
};

const verify: VerifyCallback = async ({ sub }, done) => {
  try {
    const user = await User.findById(sub);
    if (user) return done(null, user);
    return done(null, false);
  } catch (error) {
    return done(error, false);
  }
};

export const jwtStrategy = new JwtStrategy(options, verify);
