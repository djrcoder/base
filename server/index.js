const express = require("express");
const path = require("path");
const knexfile = require("../knexfile")
const knex = require("knex")
const db = knex(knexfile);


const port = process.env.PORT || 8080;
const app = express()


app.listen(port, () => console.log(`Listening on Port ${port}`));

app.use(express.static(path.join(__dirname, "..", 'build')));

// api here

app.get("/api/people", async (req, res) => {

    const welcomeMessage = await db.select().table("persons")
    console.log("hi")
    res.json(welcomeMessage)

})

app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, "..", 'build', 'index.html'));
});
module.exports = app;