const express = require("express");
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
//Setting up server
const app = express();
const PORT = process.env.PORT || 2000;
//middleware function
app.use(express.urlencoded({extended: true}));

app.use(express.json());
app.use(express.static('public'));



app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(2000, () => {
    console.log(`API server now on port ${PORT}`);
  });
  