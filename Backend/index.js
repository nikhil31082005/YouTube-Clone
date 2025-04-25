require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoute = require("./routes/route");
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

const uri = process.env.MONGODB_URI;
mongoose.connect(uri)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(cors()); 
app.use(express.json());
app.use(authRoute);



// app.get('/', (req, res) => {
//   res.send('MERN backend is running!');
// });

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});