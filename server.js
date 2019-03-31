const express = require("express");
const app = express();

const port = 5000;

// @homepage route
app.use("/", require("./routes/index"));

// @user route
app.use("/user", require("./routes/users.js"));

// Server listen to PORT 5000
app.listen(port, (req, res) => console.log(`server is running at ${port}...`));
