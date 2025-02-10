const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json()); // Middleware to parse JSON requests
// GET endpoint
app.get("/", (req, res) => {
    res.send("Hello, Render Deployment!");
});
// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
