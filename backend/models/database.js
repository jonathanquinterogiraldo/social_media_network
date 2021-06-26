const mongoose = require('mongoose')
const url = 'mongodb+srv://jonathanqgdev:Mybiwis1053@cluster0.we1qx.mongodb.net/twittor'

mongoose.connect(url, { 
    useNewUrlParser: true ,
    useUnifiedTopology: true
});

mongoose.connection.on("error", (error) => console.log(`MONGOOSE ERROR: ${error}`));
mongoose.connection.once("open", () => console.log(`MONGOOSE CONECTED`));

module.exports = mongoose