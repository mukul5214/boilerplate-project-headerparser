let express = require("express");
let path = require("path");
let dotenv = require("dotenv");
let cors = require("cors");
let app = express();

dotenv.config();
app.use(cors());
app.use(express.static("public"));
console.log(path.join(__dirname,"views","index.html"))

app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"views","index.html"));
})

app.get("/api/whoami",(req,res)=>{
  let response = {
    ipaddress: req.ip,
    language: req.get("Accept-Language"),
    software: req.get("User-Agent")
  }
  res.json(response);
})

app.listen(process.env.PORT || 3000,()=>{
  console.log("server active");
})