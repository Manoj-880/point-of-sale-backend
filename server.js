const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose
    .connect("mongodb://127.0.0.1:27017/kirana_store")
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(err));
app.use(bodyParser.json());

const filepath = path.join(__dirname, "logs", "request.log");
const stream = fs.createWriteStream(filepath, { flags: "a" });
app.use(morgan("tiny", { stream: stream }));

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const catagories = require('./Routes/catagoriesRoutes');
const products = require('./Routes/productRoutes');
const customers = require('./Routes/customersRoute');
const bills = require('./Routes/billRoute');

// Endpoints
app.use('/api/user/catagories', catagories);
app.use('/api/user/products', products);
app.use('/api/user/customers', customers);
app.use('/api/user/bills', bills);

// Serve the HTML file for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));