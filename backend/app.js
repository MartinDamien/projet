const express = require("express");
const app = express();

app.set("port", process.env.PORT || 3000);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(app.get("port"), () => {
  console.log(`http://localhost:${app.get("port")}, press Ctrl+C to quit`);
});
