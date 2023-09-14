const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

// Use async/await with mongoose.connect
async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/demo", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

connectToDatabase(); // Call the function to establish the database connection

const db = mongoose.connection;

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});
db.once("open", () => {
  console.log("Connected to the database");
});

const customerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Customer = mongoose.model("Customer", customerSchema);

app.get("/", cors(), (req, res) => {
  // Your GET endpoint logic here
});

app.post("/", async (req, res) => {
  const { username, password } = req.body;

  try {
    const check = await Customer.findOne({ username });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("fail");
  }
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  // Check if username and password are not empty
  if (!username || !password) {
    res.json("blankfields");
    return;
  }

  const data = {
    username: username,
    password: password,
  };

  try {
    const check = await Customer.findOne({ username });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
      await Customer.insertMany([data]);
    }
  } catch (e) {
    res.json("fail");
  }
});

app.post("/contact", async (req, res) => {
  const { fullname, email, message } = req.body;

  // Check if any of the fields are empty
  if (!fullname || !email || !message) {
    res.json("blankfields");
    return;
  }

  const contactData = {
    fullname: fullname,
    email: email,
    message: message,
  };

  try {
    const contact = new Contact(contactData);
    const savedContact = await contact.save();
    res.json(savedContact);
  } catch (e) {
    res.json("fail");
  }
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
