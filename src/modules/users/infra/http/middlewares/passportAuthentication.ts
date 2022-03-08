import passport from "passport";
import { NextFunction, Request, Response } from "express";
import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import authConfig from '@config/auth';

type PassportJWTProps = typeof passport;

export function passportJWTConfig(passportInstance: PassportJWTProps) {
  const options: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:  authConfig.jwt.secret,
    algorithms: ["HS256"],
  };

  passportInstance.use(
    new Strategy(options, (payload, done) => {
      // Just repassing the token payload
      done(null, payload);
    }),
  );
}

export function isTokenAuthenticated(req: Request, res: Response, next: NextFunction) {
  return passport.authenticate("jwt", { session: false })(req, res, next);
}
