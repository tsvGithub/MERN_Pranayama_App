const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

//-------------------------
//ROUTES
const pranayamasRouter = require("./routes/pranayamas");
app.use("/pranayamas", pranayamasRouter);

const disablingPranayamasRouter = require("./routes/disabling");
app.use("/disabling", disablingPranayamasRouter);

//-------------------------
//MongoDB Atlas
const URI = "mongodb+srv://only4Me:only4MeDB@cluster0-ztzuu.mongodb.net/pranayama?retryWrites=true&w=majority";
mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected successfully");
});

//------------------------
//SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
