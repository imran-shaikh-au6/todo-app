const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
require("./db");
const path = require("path");
const PORT = process.env.PORT || 5000;

const user = require("./Routes/UserRoutes");
const passport = require("passport");
require("./config/passport")(passport);
// const admin = require("./Routes/AdminRoutes");
// const course = require("./Routes/CourseRoutes");

app.use(passport.initialize());
app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(express.static("client/build"));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.use(user);
// app.use(admin);
// app.use(course);

app.listen(PORT, () => console.log("server started"));
