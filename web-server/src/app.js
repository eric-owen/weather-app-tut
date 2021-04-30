const path = require('path')
const express = require('express')

const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const app = express()

//paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


// setup handlebars engine and views locations
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'title from express',
        name: 'Eric Owen'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'about',
        name: 'Eric Owen'
    })
})


app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'this is helpful text',
        title: 'help',
        name: 'Eric Owen'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'Please enter an address'
        })
    }
    geocode(req.query.address, (error, { lat, long, location }) => {
        if (error) return res.send({ error })

        forecast(lat, long, (error, forecastData) => {
            if (error) return res.send({ error })
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })

    })

})

app.get('/help/*', (req, res) => {
    res.render('404', {
        error: 'help article not found',
        title: '404',
        name: 'Eric Owen'
    })
})
app.get('*', (req, res) => {
    res.render('404', {
        error: 'page not found',
        title: '404',
        name: 'Eric Owen'
    })
})

app.listen(3000, () => {
    console.log('server is up on port 3000')
})