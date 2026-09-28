import giftCards from "./routes/giftCards";
import express from "express";

const app = express();

app.use(express.json());
app.use("/api/giftcards", giftCards);



app.listen(5588, () => console.log("Listening on port 5588..."));

