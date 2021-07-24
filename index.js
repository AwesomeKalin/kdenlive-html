/**
 * Required External Modules
 */
 
const express = require('express');
const path = require('path');

/**
 * App Variables
 */
 
const app = express();
const port = '8000';

/**
 *  App Configuration
 */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions
 */

app.get('/', (req, res) => {
    res.render("index", { title: "Example / HD 1080p 25 fps" });
});

/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});