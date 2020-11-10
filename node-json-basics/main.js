const fs = require('fs')

// Load and Parse the data
const dataBuffer = fs.readFileSync('info.json')
const data = dataBuffer.toString()
const dataJSON = JSON.parse(data)

// Change the name and age property with my own information
dataJSON.name = "Sam"
dataJSON.age = 55

// Stringify the changed object and overwrite the original data
fs.writeFileSync('info.json',JSON.stringify(dataJSON))