const express = require('express');
const blog = require("../router/blog.js");

const app = express();
const PORT = process.env.PORT || 3000 ;

app.use("/api",blog);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
