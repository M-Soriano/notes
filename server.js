const express = require("express");
//Setting up server
const app = express();
const PORT = process.env.PORT || 2000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

app.use()


















app.listen(2000, () => {
    console.log(`API server now on port ${PORT}`);
  });