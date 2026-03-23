import express from 'express';

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
    res.send("<h1> Hello World from <u>StripTheCode</u></h1>");
});

app.listen(PORT, () => {
    console.log(`Server is running on port number : ${PORT}`);
});

