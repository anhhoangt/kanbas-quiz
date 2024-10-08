import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import "dotenv/config";
import session from "express-session";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AssignmentsRoutes from "./Kanbas/assignments/routes.js";
// create questionsroutes
import UsersRoutes from "./Kanbas/users/routes.js";
import QuizzesRoutes from "./Kanbas/quizzes/routes.js";
import QuestionsRoutes from "./Kanbas/questions/routes.js";
import AnswersRoutes from "./Kanbas/answers/routes.js";
// import SecurityController from "./SecurityController.js";
import mongoose from "mongoose";

const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://localhost:27017/kanbas";
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: "https://kanbas-node-server-app-bshj.onrender.com",
  };
}
app.use(session(sessionOptions));

CourseRoutes(app);
ModuleRoutes(app);
AssignmentsRoutes(app);
UsersRoutes(app);
QuizzesRoutes(app);
QuestionsRoutes(app);
AnswersRoutes(app);
// SecurityController(app);
Hello(app);
Lab5(app);
// app.listen(4000);
app.listen(process.env.PORT || 4000);
