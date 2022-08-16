const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");


dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

app.use(express.json());

// app.get("/test", (req,res)=>{
//     res.send("it works");
// })

mongoose.connect(process.env.MDB_CONNECT,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, 
(err) => {
        if(err) return console.error(err);
        console.log("connected to mongodb");
    });


app.use("/auth",require("./routers/userRouter"));