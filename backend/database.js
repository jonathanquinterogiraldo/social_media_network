const mongoose = require('mongoose')
const url = process.env.DB_URL

function db() {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const { connection } = mongoose

  connection.on("error", (error) => console.log(`MONGOOSE ERROR: ${error}`));
  connection.once("open", () => console.log(`MONGOOSE CONECTED`));

  return connection
}

module.exports = db