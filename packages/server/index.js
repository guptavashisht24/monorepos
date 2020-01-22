const express = require('express');

const app = express();


app.get('/hello',(req, res)=>{
  res.json({ message : 
  "API seems to be working" });
})


const PORT = 4000

app.listen(PORT, () => {
  console.log(`SERVER is up and running at ${PORT}`)
})