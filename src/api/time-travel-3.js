const PIRATE_PRINCESS = {
  birthYear: "2015",
  hairColor: "blond",
  nickName: "Lilly",
};

export default function handler(req, res) {
  const { location, year } = req.query;
  const message = `You time-travelled to ${location}, in year ${year}`;

  if (location === "oslo" && year === "2026") {
    res.json({ message: message, princess: PIRATE_PRINCESS });
  } else {
    res.send(message);
  }
}
