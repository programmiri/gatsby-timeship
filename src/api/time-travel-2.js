export default function handler(req, res) {
  const { location, year } = req.query;
  res.send(`You time-travelled to ${location}, in year ${year}`);
}
