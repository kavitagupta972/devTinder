const express = require('express');

const app = express();


app.get('/profile', (req, res)=>{
    res.send({firstname : 'kavita', lastname : 'gupta'});
})
app.post('/profile', (req, res)=>{
    res.send("profile added successfully");
})

app.delete("/profile", (req, res)=>{
    res.send("profile deleted successfully");
})

app.patch("/profile", (req, res)=>{
    res.send("profile updated successfully");
})


app.use('/', (req, res) =>{
    res.send("root path");
})


app.listen(7777, ()=>{
    console.log("listening to port 7777");
});