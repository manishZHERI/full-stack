const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Secret key
const SECRET = "mysecretkey";

// 🔍 Logger
app.use((req, res, next) => {
  console.log("Incoming:", req.method, req.url);
  next();
});


// ================= USERS =================
const users = [
  { username: "admin", password: "1234", role: "ADMIN" },
  { username: "Kunal", password: "1234", role: "USER" }
];


// ================= LOGIN =================
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  console.log("LOGIN ATTEMPT:", username, password);

  // Trim inputs
  const userInput = username?.trim();
  const passInput = password?.trim();

  // Find user
  const user = users.find(
    (u) => u.username === userInput && u.password === passInput
  );

  if (user) {
    const token = jwt.sign(
      { username: user.username, role: user.role },
      SECRET,
      { expiresIn: "1h" }
    );

    return res.json({
      message: "Login Successful",
      token,
      role: user.role
    });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});


// ================= VERIFY TOKEN =================
const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ message: "No Token Provided" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid Token" });
    }

    req.user = decoded;
    next();
  });
};


// ================= USER API =================
app.get("/api/user/profile", verifyToken, (req, res) => {
  res.json({
    message: `Hello ${req.user.username}, USER data accessed`
  });
});


// ================= ADMIN API =================
app.get("/api/admin/dashboard", verifyToken, (req, res) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ message: "Access Denied" });
  }

  res.json({
    message: `Welcome ${req.user.username}, ADMIN data accessed`
  });
});


// ================= START SERVER =================
app.listen(5001, () => {
  console.log("🚀 Server running at http://localhost:5001");
});
