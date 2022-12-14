const mongoose = require("mongoose")
mongoose.set("strictQuery", true);

const connect = async () => {
    try {
        mongoose.connect("mongodb+srv://AlineHoffmann:1234@cluster0.5hbucqg.mongodb.net/blogapi", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Database Connected")
    } catch (error) {
        console.log(error)
    }
}
module.exports = {connect};
