const express = require('express');
const app = express();
const fs=require('fs');
const port = 3000;
app.use(express.urlencoded({extended:true}));
// If you send a form with data like this:
// name=Purushotham&age=25
// The middleware will parse it and make it available as req.body:
// {
//   name: 'Purushotham',
//   age: '25'
// }
// With extended: true, you can also handle more complex data like this:
// user[name]=Purushotham&user[age]=25
// This will be parsed as
// {
//   user: {
//     name: 'Purushotham',
//     age: '25'
//   }
// }
app.use(express.json());

// If you send a JSON request like this:
// {
//   "name": "Purushotham",
//   "age": 25
// }
// This middleware will parse the JSON and make it available as:
// req.body = {
//   name: 'Purushotham',
//   age: 25
// }

app.get('/',(req,res)=>{
  res.sendFile('data.html',{root:'./'});
})
app.get('/getdata',(req,res)=>{
  let data=JSON.parse(fs.readFileSync('data.json'));
  res.json(data);
})

// app.get('/data',(req,res)=>{
//   let cond=req.query.condition;
//   // console.log(cond);
//   let data=JSON.parse(fs.readFileSync('data.json'));
//   let fil=data.filter(item => {
//   return item.conditioin == cond;
//   })
//   res.json(fil);
// })


app.post('/data', (req, res) => {
  let cond = req.body.condition;
  console.log(cond);
  let data = JSON.parse(fs.readFileSync('data.json','utf-8'));
  let fil = data.filter(item => {
      return item.conditioin == cond; 
  });
  res.json(fil);
});

app.listen(port, () => {
  console.log("Server Started 3000");
});