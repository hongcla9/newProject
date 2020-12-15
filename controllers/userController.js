import routes from "../routes";
import User from "../models/User";
import passport from "passport";
export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
      try {
          const user = await User ({
              name,
              email
          });
          await User.register(user,password);
          next();
      }catch (error) {
          console.log (error);
          res.redirect(routes.home);
      }
   
  }
};
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Log In" });

export const postLogin = passport.authenticate('local',{
    failureRedirect:routes.login,
    successRedirect:routes.home
})

export const logout = (req, res) => {
    // To Do: Process Log Out
    res.redirect(routes.home);
  };
export const users = (req, res) => res.render("Users", { pageTitle: "users" });
export const userDetail = (req, res) => res.render("User Detail", { pageTitle: "Detail" });
export const editProfile = (req, res) => res.render("Edit Profile", { pageTitle: "editProfile" });
export const changePassword = (req, res) => res.render("Change Password", { pageTitle: "ChangePassword" });