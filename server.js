const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/v1", routes);
app.listen(PORT, () => {
  console.log("> Server running on PORT ", PORT);
});
