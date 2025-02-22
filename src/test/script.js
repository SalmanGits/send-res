const express = require('express');
const { sendResponse } = require('..');
const app = express();

app.get("/", (req, res) => {
    sendResponse({ res, status: 200, data:{success:true}})
})
app.listen(3000, () => console.log("Server is running on port 3000"))