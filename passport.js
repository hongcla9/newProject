import passport from "passport";
import User from "./models/User";
import GithubStrategy from "passport-github";
import {
    githubLoginCallback,
    facebookLoginCallback
  } from "./controllers/userController";
import routes from "./routes";
import FacebookStrategy from "passport-facebook";
passport.use(User.createStrategy());



    passport.use(
        new GithubStrategy(
          {
            clientID: process.env.GH_ID,
            clientSecret: process.env.GH_SECRET,
            callbackURL: `http://localhost:4000${routes.githubCallback}`
          },
          githubLoginCallback
        )
      );

      passport.use(
        new FacebookStrategy(
          {
            clientID: process.env.FB_ID,
            clientSecret: process.env.FB_SECRET,
            callbackURL: `https://afraid-baboon-46.localtunnel.me${
              routes.facebookCallback
            }`,
            profileFields: ["id", "displayName", "photos", "email"],
            scope: ["public_profile", "email"]
          },
          facebookLoginCallback
        )
      );
      
    passport.serializeUser(function (user, done) {
        done(null, user);
        });
        
    passport.deserializeUser(function (user, done) {
        done(null, user);
        });