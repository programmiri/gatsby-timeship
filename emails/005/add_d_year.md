
«You said your next task is landing year, how do you plan to do it?» Says Captain Swizec.

«I'll put landing year inside the piraty parrot braces with city, like this.» Says Ruby typing away.

src / api / time-travel.js

export default function timeTravelHandler(req, res) {
 const { city, year } = req.query;

 res.send(`You time-travelled to the city of ${city}, in year ${year}`)
}


«Now go to your browser adress bar and write http://localhost:8000/api/time-travel-2?city=oslo&year=2026
Yess! Like that!» Says Captain Swizec.


http://localhost:8000/api/time-travel/oslo?year=2026

“You time-travelled to the city of oslo, in year 2026”

«Beautiful work Ruby! Just one more task and we'll move on to the next neighbour. We need to add a PiRATE PREiNCESS to your TimeShip code Ruby.» Says Lizabeth.
