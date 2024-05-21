const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db = require("./utils/db");
const authRouter = require("./routes/auth");
const jobRouter = require("./routes/job");
const errorMiddleware = require("./Middlewares/errorMiddleware");
const corsOptions = {
  origin: "https://job-finder-frontend-beige.vercel.app/",
  optionsSuccessStatus:200
};
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api/auth/", authRouter);
app.use("/api/", jobRouter);
app.use("/*", (req, res, next) => {
  res.status(404).json({ message: "page not found" });
  next();
});

app.use(errorMiddleware);
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 3000;

db()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`http://${HOST}:${PORT}`);
    });
  })
  .catch((e) => {
    console.log("server not connected");
  });
// routes
// 1.register ❌
// 2.login❌
// 3.Home
// 4.create
// 5.edit
