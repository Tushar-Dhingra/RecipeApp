import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
    "mongodb+srv://testuser:i5VedqxOzsPo5PHX@recipes.n9cdbub.mongodb.net/recipes",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }    
)  

app.listen(process.env.PORT, ()=>console.log("SERVER STARTED!"))
