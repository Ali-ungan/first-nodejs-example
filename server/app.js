import express from 'express';
import expressLayouts from 'express-ejs-layouts';

//routes
import users from "./routes/users.js"

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)


app.get('/', (req, res) => {
    res.render('index', {
        title: 'Site Başlığı',
        heading: 'Hoşgeldin Gardaş :D'
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'İletişim',
        heading: 'İletişim Sayfası'
    })
})
app.post('/contact', (req, res) => {
    const { name } = req.body
    res.render('contact', {
        heading: `Mesajını aldım ${name}`
    })
})


app.use('/users', users)

app.use((req, res) => {
    res.status(404).send("Sayfa Bulunamadı")
})

app.listen(port, () => console.log(`uygulama localhost:${port} adresinde`))