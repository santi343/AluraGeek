const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
app.use(express.static("public"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "src/views", "index.html"))
);

app.listen(port, () => console.log(`Serviddor corriendo en puerto ${port}`));
