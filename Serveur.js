const express = require("express");
const connectDB = require("./Config/db");
const dotenv = require("dotenv").config ();
const cors = require("cors");
const Routers = require("./Routes/Routes");
const cookiesParser = require("cookie-parser");

connectDB();
const app = express();
app.listen(8081,()=>{
    console.log("Server started on port 8081")
})
app.use(cors({
    origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
  optionsSuccessStatus: 204,
  allowedHeaders: 'Content-Type,Authorization',
}));
// bodyParser middleware
app.use(express.json());
app.use(cookiesParser());

// routes
app.use("/api/contacts", Routers);