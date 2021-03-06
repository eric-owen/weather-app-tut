const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiZXJpY293ZW4iLCJhIjoiY2tseDYxeGhnMzdjbTJ3cG0xc3c3bGY0NCJ9.nzP_636_M7oybRWnPqGtig`
    request({
        url: url,
        json: true
    }, (err, resp) => {
        if (err) {
            callback('unable to connect to geocode services')
        } else if (resp.body.features.length == 0) {
            callback('no results found')
        } else {
            callback(undefined, {
                lat: resp.body.features[0].center[1],
                long: resp.body.features[0].center[0],
                location: resp.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode