/* require("dotenv").config(); */
if (process.env.NODE_env !== "production") {
    require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const ListRouter = require("./routes/list");

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("MONGO CONNECTION OPEN"))

app.use(express.json());
app.use(cors());


app.use("/api/list", ListRouter)





app.listen(3000, () => {
    console.log("Listening to PORT 3000");
})