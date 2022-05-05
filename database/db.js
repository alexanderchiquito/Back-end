const mongoose = require('mongoose')
const uri = 'mongodb://127.0.0.1/base_adminbro'
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
const conexion = mongoose.connection

module.exports = conexion