const app = require("./server.js");
const mongodb = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();
const {mongoDbUrl} = require("./config/config.js");
const ReviewsDAO = require("./dao/reviewsDAO.js");

const MongoClient = mongodb.MongoClient
const port = 8000

MongoClient.connect(
    mongoDbUrl, {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    }
).catch(err => {
    console.error(err.stack)
    process.exit(1)
}).then(async client => {
    await ReviewsDAO.injectDB(client)
    app.listen(port, () =>{
        console.log(`listening on port ${port}`)
    })
})