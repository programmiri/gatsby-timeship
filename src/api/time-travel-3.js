const PIRATE_PRINCESS = {
  birthYear: "2015",
  hairColor: "blond",
  nickName: "Lilly",
  identifier: "userId",
};

export default function timeTravelHandler(req, res) {
  const { city, year } = req.query;
  const message = `You time-travelled to ${city}, year ${year}`;

  if (city === "oslo" && year === "2026") {
    res.json({ message: message, princess: PIRATE_PRINCESS });
  } else {
    res.send(message);
  }
}
