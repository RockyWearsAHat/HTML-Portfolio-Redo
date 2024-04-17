import express from "express";
import path from "path";

const app = express();

app.use("/css", express.static(path.join(process.cwd(), "/css")));
app.use("/js", express.static(path.join(process.cwd(), "/js")));
app.use("/images", express.static(path.join(process.cwd(), "/images")));

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/index.html");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on http://localhost:3000");
});
