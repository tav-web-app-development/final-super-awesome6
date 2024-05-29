// import("dotenv").config();
const port = 3000;
// const app = import("./src/app");
import app from "./src/app.js";

// Set server to Listen
app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`);
});
