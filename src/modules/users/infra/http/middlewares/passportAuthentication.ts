import passport from "passport";
import { NextFunction, Request, Response } from "express";
import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import authConfig from '@config/auth';

type PassportJWTProps = typeof passport;

export function passportJWTConfig(passportInstance: PassportJWTProps) {
  const options: StrategyOptions = {
    jwtFromRequest: cookieExtractor,
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

const cookieExtractor = function(req:Request) {
  if (req && req.headers.cookie)
  {
    const cookieValue = req.headers.cookie.split('; ').find(x => x.startsWith('token='));
    let token
    if (cookieValue) token = cookieValue.split('=')[1]
    return token
  }
};

export function isTokenAuthenticated(req: Request, res: Response, next: NextFunction) {
  return passport.authenticate("jwt", { session: false })(req, res, next);
}
