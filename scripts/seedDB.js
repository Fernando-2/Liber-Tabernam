const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/liber-tabernam"
);

const bookSeed =
{
    authors: [""],
    description: "",
    image: "",
    link: "",
    title: "",
}


db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });