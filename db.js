const mongoose = require("mongoose");
console.log(process.env.MONGO_USER);
mongoose
    .connect(
        `mongodb+srv://${process.env.MONGO_USER}:${process.env.MongoPassword}@cluster0.zalcn.mongodb.net/<dbname>?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        }
    )
    .then(function () {
        console.log("Mongo db compass connected");
    })
    .catch(function (err) {
        console.log(err.message);
    });
