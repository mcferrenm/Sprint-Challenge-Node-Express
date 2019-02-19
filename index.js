require('dotenv').config();

const server = require("./server.js");

const PORT = process.env.PORT;

server.get("/", (req, res) => {
  res.send("Welcome to the Projects API");
});

server.listen(PORT, () => {
  console.log(`\n\n*** Now listening on port ${PORT} ***\n`);
});
