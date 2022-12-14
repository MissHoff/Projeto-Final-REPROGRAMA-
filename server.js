const app = require("./src/app");
require('dotenv').config();

const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});