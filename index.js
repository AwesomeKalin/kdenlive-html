/**
 * Required External Modules
 */
 
const express = require('express');
const path = require('path');

/**
 * App Variables
 */
 
const app = express();
const port = '8080';

/**
 *  App Configuration
 */

/**
 * Routes Definitions
 */

app.get('/', (req, res) => {
    res.status(200).send('Kdenlive-html, coming soon!');
});

/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
}); 