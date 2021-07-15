

«Who can help you get your landing city from your TimeShip browser bar and into your Gatsby function? Aaare yooou reeeady tooo a rrriddle!» Says Freddie Catsby.

«Ready!» Says Ruby and Lizabeth.

«What neighbour has a green bird AND a yellow book?» Asks Freddie Catsby.

«That Serverless Handbook Captain with the parrot!? Kiwi! I love Kiwi! He's so cheeky.» Says Ruby and starts climbing along the rooftops.

«Aha! Captain Swizec!» Says Lizabeth.

«Good guessing you beautiful people! And Lizabeth, I do hope to see you at my, so please don’t get caught out of house arrest. Look down there on the bridge is a wolfy spy paid by Queen Mary.» Says Freddie Catsby.

«I promise I'll be at your show at The Tower, but maybe behind the prison bars. He-He!» Jokes Lizabeth.

«Yo-Ho-Ho! If you ARE in jail, I'll write a jail break into my SHOW. Won’t my piratical band love THAT?!» Says Freddie Catsby.

«Meeeooow! Pruuit!» Says Res-the-cat.

«My cat, Res wants to help you after Ruby saved her. Bring my backend bat as well. Res and Req, they are a team.» Says Freddie Catsby.

«Thank you sooo much Freddie. I’ll watch out for wolfy spies, bye now!» Says Lizabeth.

«Run along now my sweet! Give Captain Swizec my regards.» Says Freddie Catsby.

Ruby is typing and Captain Swizec stands behind her, Kiwi on his shoulder.

«Now go to your browser bar. Write ?city=oslo after /api/time-travel/» Says Captain Swizec.

«Aye! Aye! Captain Swizec. I get “You time-travelled to oslo” great!» Says Ruby.

«It works!? Let me see the code please.» Says Lizabeth.



src / api / time-travel.js

export default function timeTravelHandler(req, res) {
 const { city } = req.query;
 res.send(`You time-travelled to ${city}`)
}


«You said your next task is landing year, how do you plan to do it?» Says Captain Swizec.

«I put it in with city, like this.» Says Ruby typing away.



src / api / time-travel.js

export default function timeTravelHandler(req, res) {
 const { city, year } = req.query;

 res.send(`You time-travelled to ${city}, year ${year}`)
}


«Now go to your browser bar and write ?city=oslo?year=2026 Yess! Like that!» Says Captain Swizec.


http://localhost:8000/api/time-travel/oslo?year=2026

“You landed in oslo, year 2026”

«Beautiful work Ruby! Just one more task and we'll move on to the next neighbour. We need to add a PiRATE PREiNCESS to your TimeShip code Ruby.» Says Lizabeth.

«I see....» Says Captain Swizec.

«Look I already made an object.» Says Ruby.


{
 birthYear: "2015",
 hairColor: "blond",
 nickName: "Lilly",
 identifier: "userId",
}



«Good, where should you put that object?» Says Captain Swizec.

«Outside of the Gatsby function like thiiis!» Says Ruby.


src / api / time-travel.js

const PIRATE_PRINCESS = {
 birthYear: "2015",
 hairColor: "blond",
 nickName: "Lilly",
}

export default function timeTravelHandler(req, res) {


«Good work Ruby! Our next task is to get our PIRATE_PRINCESS and our message to  res-the-cat.» Says Lizabeth.
