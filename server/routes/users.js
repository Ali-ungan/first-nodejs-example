import express from "express"

const router = express.Router()


router.get('/', (req, res) => {
    res.send("burası /users anasayfası")
})


router.get('/:slug', (req, res) => {
    res.render('index', {
        title: `${req.params.slug}`,
        heading: `${req.params.slug} - profil`
    })
})


export default router