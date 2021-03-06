const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const input = process.argv[2]

if (!input) {
    return console.log('please provide a location')
}
geocode(input, (err, data) => {
    if (err) {
        return console.log(err)
    }
    forecast(data.lat, data.long, (err, forecastData) => {
        if (err) {
            return console.log(err)
        }

        console.log(data.location)
        console.log(forecastData)
    })
})