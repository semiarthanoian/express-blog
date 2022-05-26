const process = require("process");
const path = require("path");
const express = require("express");

const logger = require("morgan");
const cookieParser = require("cookie-parser");

const pathToViewFolder = path.join(__dirname, "view");
const pathToPublicFolder = path.join(__dirname, "public");

   /* --- Create App */

const app = express();

   /* --- Setup View Engine */

app.set("views", pathToViewFolder);
app.set("view engine", "ejs");

   /* --- Utility Middlewares */

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(pathToPublicFolder));

   /* --- Adding Routers */

app.use("/api", require("./route/api/index"));

app.use(require("./route/session-filter"));

app.use("/"        , require("./route/home"));
app.use("/article" , require("./route/article/index"));
app.use("/category", require("./route/category/index"));
app.use("/admin"   , require("./route/admin/index"));
app.use(require("./route/oops"));

   /* --- Starting Server */

app.listen(
   process.env.PORT || 8080,
   (_) => console.log(
      "Server started",
      `Process ID: ${process.pid}`
   )
);
