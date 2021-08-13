export default async function (req, res) {
    const {city} = req.query
    res.send(`Ahoy ${city}`)
}