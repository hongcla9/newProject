import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    // To Do: Register User
    // To Do: Log user in
    res.redirect(routes.home);
  }
};
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Log In" });
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
    // To Do: Process Log Out
    res.redirect(routes.home);
  };
export const users = (req, res) => res.render("Users", { pageTitle: "users" });
export const userDetail = (req, res) => res.render("User Detail", { pageTitle: "Detail" });
export const editProfile = (req, res) => res.render("Edit Profile", { pageTitle: "editProfile" });
export const changePassword = (req, res) => res.render("Change Password", { pageTitle: "ChangePassword" });