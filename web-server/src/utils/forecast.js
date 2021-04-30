const request = require('request')


const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=6ebab0c139949f5b762e40594bb63e7b&query=${lat},${long}&units=f`
    request({
        url,
        json: true
    }, (err, { body }) => {
        if (err) {
            callback('unable to connect to the weather service')
        } else if (body.error) {
            callback('unable to find location')
        } else {
            callback(undefined, `the current temperature is ${body.current.temperature} and it feels like ${body.current.feelslike} with a ${body.current.precip}% of precipitation`)
        }
    })
}

module.exports = forecast