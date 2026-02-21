const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Frontend dikhane ke liye logic
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Save API (Data abhi memory mein save hoga bina error ke)
app.post('/api/save', (req, res) => {
    console.log("Resume Data Received:", req.body);
    res.json({ status: "Success", message: "Data saved!" });
});

app.listen(5000, () => {
    console.log("========================================");
    console.log("SERVER RUNNING: http://localhost:5000");
    console.log("========================================");
});