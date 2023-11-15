const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const app=express();
const path=require('path');
const port=process.env.PORT || 8000


app.use(cors());
app.use(bodyParser.json())

app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.get("/admin",(req,res)=>{
  res.sendFile(path.join(__dirname + '/admin.html'))
})

app.get("/delete",(req,res)=>{
  res.sendFile(path.join(__dirname + '/data.html'))
})

app.get("/users",(req,res)=>{
  res.sendFile(path.join(__dirname + '/users.html'))
})

app.listen(port, () => {
  console.log(`Server is successfully running on http://localhost:${port}`);
})