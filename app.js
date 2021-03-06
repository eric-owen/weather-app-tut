const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=6ebab0c139949f5b762e40594bb63e7b&query=37.8267,-122.4233&units=f'

// request({
//     url: url,
//     json: true
// }, (error, response) => {
//     console.log(response.body.current)
// })

const mapBoxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZXJpY293ZW4iLCJhIjoiY2tseDYxeGhnMzdjbTJ3cG0xc3c3bGY0NCJ9.nzP_636_M7oybRWnPqGtig`
request({
    url: mapBoxUrl,
    json: true
}, (e, res) => {
    console.log(res.body.features[0].center)
})