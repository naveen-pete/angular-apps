const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const postsRoutes = require("./routes/posts");

dotenv.config();
const app = express();

const connectToDb = async () => {
  try {
    const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env;
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&useNewUrlParser=true`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log('Connected to database!');
  } catch (e) {
    console.log('Database connection failed!');
    console.log('Error:', e.message);
  }
};

const cors = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
}

connectToDb();

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/images', express.static('images'));
app.use(cors);
app.use("/api/posts", postsRoutes);

module.exports = app;
