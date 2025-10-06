const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
// Cấu hình middleware
app.use(bodyParser.json());

// Kết nối tới MongoDB
const mongoURI = process.env.MONGODB_URI || 'mongodb://username:password@localhost:27017/rental_management';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
    res.send('Hệ thống quản lý nhà ở cho thuê hoạt động');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));