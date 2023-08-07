const express =require("express")
const app = express();
const port =8000;

app.get("/good",(req,res)=>{
    req.send("Hello everyone!")
})

app.listen(port,()=>{
    console.log("server is listening")
})