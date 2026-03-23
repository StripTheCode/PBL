import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("<h1> Hello World from <u>StripTheCode</u></h1>");
});

app.listen(PORT, () => {
    console.log(`Server is running on port number : ${PORT}`);
});

