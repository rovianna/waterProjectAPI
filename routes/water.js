module.exports = (app, WaterModel) => {
    //GET /locais
    app.get('/locais', (req, res) => {
        WaterModel.find({}, (err, water) => {
            if (err) res.sendStatus(404)
            res.status(200).send(water)
        })
    })

    //GET /locais/:id
    app.get('/locais/:id', (req, res) => {
        WaterModel.findById(req.params.id, (err, water) => {
            if (err) res.sendStatus(404)
            res.status(200).send(water)
        })
    })

    //POST /locais
    app.post('/locais', (req, res) => {
        WaterModel.create(req.body, (err, water) => {
            if (err) res.sendStatus(412)
            res.status(201).send(water)
        })
    })

    //
}
