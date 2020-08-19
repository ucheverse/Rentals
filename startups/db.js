const mongoose = require('mongoose');

module.exports = (db) => {
    mongoose
        .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true 
        })
        .then(() => console.log('DB connection successful!'));

}
