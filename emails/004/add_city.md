«Who can help you get your landing city from your TimeShip browser bar and into your Gatsby function? Aaare yooou reeeady tooo a rrriddle!» Says Freddie Catsby.

«Ready!» Says Ruby and Lizabeth.

«What neighbour has a green bird AND a yellow book?» Asks Freddie Catsby.

«That Serverless Handbook Captain with the parrot!? Kiwi! I love Kiwi! He's so cheeky.» Says Ruby and starts climbing along the rooftops.

«Aha! Captain Swizec!» Says Lizabeth.

«Good guessing you beautiful people! Give Captain Swizec my regards.» Says Freddie Catsby.

«Bye now!» Says Lizabeth.

At Captain Swizec's.

Ruby is typing and Captain Swizec stands behind her, Kiwi on his shoulder.

«Hack! Hack-Hack-Hack!» Says Ruby's keyboard.

«Now go to your browser bar. Write ?city=oslo after /api/time-travel/» Says Captain Swizec.

«Aye! Aye! Captain Swizec. I get “You time-travelled to the city of oslo” great!» Says Ruby.

«It works!? Let me see the code please.» Says Lizabeth.



src / api / time-travel.js

export default function timeTravelHandler(req, res) {
 const { city } = req.query;
 res.send(`You time-travelled to the city of ${city}`)
}


«Is req-the-bat taking our landing city from Ruby's TimeShip browser bar and giving the city to res-the-cat inside our Gatsby function?» Says Lizabeth.

«YESSS!» Says Ruby.

«Good work! Our next task is landing year.» Says Lizabeth.

(// illu)


(// cut)



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

«I see....» Says Captain Swizec.

«Look I already made an object.» Says Ruby.


{
 age: "_ _ _",
 hairColor: "blond",
}


«Good, where should you put that object?» Says Captain Swizec.

«Outside of the Gatsby function like thiiis!» Says Ruby.


src / api / time-travel.js

const PIRATE_PRINCESS = {
 age: "_ _ _",
 hairColor: "blond",
}
export default function timeTravelHandler(req, res) {


«Good work Ruby! Our next task is to get our PIRATE_PRINCESS and our message to res-the-cat.» Says Lizabeth.





