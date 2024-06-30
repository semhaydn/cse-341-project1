const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(port, () => {console.log(`Server is running on port ${PORT}`)});

app.use('/', require('./routes'));