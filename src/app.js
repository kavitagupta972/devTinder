const express = require('express');

const app = express();
app.use("/hello", (req,res)=>{
    res.send("hello devtinder");
})

app.use("/test", (req, res)=>{
    res.send("hello test");
})

app.use('/', (req, res) =>{
    res.send("root path");
})

app.listen(7777, ()=>{
    console.log("listening to port 7777");
});