import multer from "multer";
import "./db";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });
const multerAvatar = multer({ dest: "uploads/avatars/" });
export const localsMiddleware = (req,res,next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.loggedUser = req.user || null;
    next();
  };


  export const uploadVideo = multerVideo.single("videoFile");
  export const uploadAvatar = multerAvatar.single("avatar");