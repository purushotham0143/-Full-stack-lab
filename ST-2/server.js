const express = require('express');
const app = express();
const fs=require('fs');
const port = 3000;
app.get('/',(req,res)=>{
  res.sendFile('data.html',{root:'./'});
})
app.get('/getdata',(req,res)=>{
  let data=JSON.parse(fs.readFileSync('data.json'));
  res.json(data);
})
app.get('/data',(req,res)=>{
  let cond=req.query.condition;
  // console.log(cond);
  let data=JSON.parse(fs.readFileSync('data.json'));
  let fil=data.filter(item => {
  return item.conditioin == cond;
  })
  res.json(fil);
})
app.post('')
app.listen(port, () => {
  console.log("Server Started 3000");
});
