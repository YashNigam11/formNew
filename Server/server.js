const express = require("express");
const cors = require("cors"); 
const mongoConnect = require("./db");
const userRouter = require("./user.routes");

const app = express(); 


app.use(express.json());
app.use(cors());

app.use("/user", userRouter);

app.get("/", (req, res)=> {
    try{
      res.send("Hello World!")
    }catch(error){
        res.status(500).send({status:500, data: error.message})
    }
}) 

mongoConnect();
app.listen(8080, () => {
    console.log("server started on http://localhost:8080")
})


