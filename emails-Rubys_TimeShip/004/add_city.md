«Who can help you get your landing city from your TimeShip browser adress bar and into your serverless Gatsby function? Aaare yooou reeeadyyy tooo rrriiiiddle!?» Says Freddie Catsby.

«Ready!» Says Ruby and Lizabeth.

«What neighbour has
a green bird AND
a yellow book?»
Asks Freddie Catsby.

«That Serverless Handbook Captain with the pirate-parrot!? Kiwi! I love Kiwi! He's so cheeky. Byyyeee!» Says Ruby Reckless and starts climbing along the rooftops.

«Aha! Captain Swizec!» Says Lizabeth.

«Good guessing you beautiful people! Give Captain Swizec my regards.» Says Freddie Catsby.

«Bye now Freddie!» Says Lizabeth.

At Captain Swizec's rooftop garden.

Ruby Reckless is typing and Captain Swizec is watching the screen with Kiwi on his shoulder.

«Hack! Hack-Hack-Hack!» Says Ruby's keyboard.

«Now go to your browser bar. Write
?city=oslo after
/api/time-travel/»
Says Captain Swizec.

«Aye! Aye! Captain Swizec. I get “You time-travelled to the city of oslo” great!» Says Ruby  Reckless.

«It works!? Let me see the code please.» Says Lizabeth.



src / api / time-travel.js

export default function timeTravelHandler(req, res) {
 const { city } = req.query;
 res.send(`You time-travelled to the city of ${city}`)
}


«Is req-the-bat taking our landing
city from Ruby's TimeShip browser bar and giving the
city to
res-the-cat
inside our serverless Gatsby function?» Says Lizabeth.

«YESSS!» Says Ruby Reckless.

«Good work! Our next tiny task is landing year.» Says Lizabeth.



