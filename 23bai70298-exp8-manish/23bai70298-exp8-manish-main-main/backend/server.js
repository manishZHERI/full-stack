const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 🔍 Global request logger (VERY IMPORTANT)
app.use((req, res, next) => {
  console.log("Incoming:", req.method, req.url);
  next();
});

const SECRET = "mysecretkey";

// LOGIN API
app.post("/login", (req, res) => {
  console.log("LOGIN HIT");
  console.log("BODY:", req.body);

  const { username, password } = req.body;

  // allow both admin and user
  if (
    (username === "admin" && password === "1234") ||
    (username === "Kunal" && password === "12345")
  ) {
    const role = username === "admin" ? "ADMIN" : "USER";

    const token = jwt.sign({ username, role }, SECRET, {
      expiresIn: "1h"
    });

    return res.json({ token, role });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
});

// PROTECTED API
app.get("/protected", (req, res) => {
  console.log("PROTECTED HIT");

  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.sendStatus(403);

  const token = authHeader.split(" ")[1];

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    res.json(`Hello ${user.username}, Protected data accessed!`);
  });
});

// START SERVER
app.listen(5001, () => {
  console.log("Backend running on http://localhost:5001");
});
