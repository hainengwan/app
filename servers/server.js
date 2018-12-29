
const express = require('express')
const app = express()
var appData = require('./src/data/goodlist.json')
var seller = appData
var apiRoutes = express.Router();
app.use('/api',apiRoutes)

module.exports={
    app:app
}
