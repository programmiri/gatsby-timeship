export default function timeTravelHandler(req, res) {
  const { city, year } = req.query;
  res.send(`You time-travelled to ${city}, year ${year}`);
}
