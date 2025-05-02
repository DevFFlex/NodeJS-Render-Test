// index.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware สำหรับ parse JSON
app.use(express.json());

// เส้นทางหลัก
app.get('/', (req, res) => {
  res.send('Hello, Express API!');
});

// ตัวอย่าง API endpoint
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
  ];
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const newUser = req.body;
  // จำลองการเพิ่มผู้ใช้
  newUser.id = Date.now();
  res.status(201).json(newUser);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
