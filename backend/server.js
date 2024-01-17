const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');

const connectDB = require('./utils/connectDB');
const keyword = require('./models/keyword');
const keywordRoutes = require('./routes/keyword');

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1", keywordRoutes);

app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
});