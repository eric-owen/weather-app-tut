const request = require('request')


const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=6ebab0c139949f5b762e40594bb63e7b&query=${lat},${long}&units=f`
    request({
        url: url,
        json: true
    }, (err, resp) => {
        if (err) {
            callback('unable to connect to the weather service')
        } else if (resp.body.error) {
            callback('unable to find location')
        } else {
            callback(undefined, resp.body.current)
        }
    })
}

module.exports = forecast