import { jwt } from "@config/globals";
import { Strategy as JwtStrategy, StrategyOptions, ExtractJwt, VerifyCallback } from "passport-jwt";
import { User } from "@User";

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwt.secret,
};

const verify: VerifyCallback = async (payload, done) => {
  try {
    const { email } = payload;
    const user = await User.findOne({ email }, null, { upsert: true });
    if (user) return done(null, user);
    return done(null, false);
  } catch (error) {
    return done(error, false);
  }
};

export const jwtStrategy = new JwtStrategy(options, verify);
