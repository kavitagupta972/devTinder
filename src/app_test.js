const express = require('express');

const app = express();

// app.get(/p/, (req, res)=>{
//     console.log('req query', req.query);
//     res.send({firstname : 'kavita', lastname : 'gupta'});
// })

app.get(/.*fly$/, (req, res)=>{
    res.send({firstname : 'kavita', lastname : 'gupta'});
});

app.get('/profile/:profileId', (req, res)=>{
    console.log('req params' , req.params);
    res.send({firstname : 'kavita', lastname : 'gupta'});
})
app.use("/hello/2", (req,res)=>{
    res.send("hello devtinder 2222");
})


app.use("/hello", (req,res)=>{
    res.send("hello devtinder");
})

app.use("/test/3", (req, res)=>{
    res.send("hello test 3");
})


app.use('/', (req, res) =>{
    res.send("root path");
})

app.listen(7777, ()=>{
    console.log("listening to port 7777");
});