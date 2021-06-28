const mongoose = require('mongoose')
const url = process.env.DB_URL

mongoose.connect(url, { 
    useNewUrlParser: true ,
    useUnifiedTopology: true
});

mongoose.connection.on("error", (error) => console.log(`MONGOOSE ERROR: ${error}`));
mongoose.connection.once("open", () => console.log(`MONGOOSE CONECTED`));

module.exports = mongoose