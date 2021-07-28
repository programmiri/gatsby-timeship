«Who is the best neighbour to help send your PiRATE_PRiNCESS and your message out of your Gatsby function and into Ruby's TimeShip? Aaare yooou reeeady tooo a rrriiiiddleee!» Says Captain Swizec.

«Rooound THREEE! Ding!» Shouts Ruby, dancing like a butterfly.

«Who. Was a piratical rockstar-as-ayoungster AND also serves the best barbeque baby back ribs on Our Bridge?» Asks Captain Swizec.

«Freddie Caaatsbyyy....?» Says Lizabeth.

«No! No!» Croaks Kiwi.

«Aha! Captain Json» Says Ruby, already climbing along the rooftops.

«Excellent! See you at Catsby's Crazy Show!» Says Captain Swizec with a tip of his hat.

«Go! Go! Help! Help!» Croaks Kiwi.

«You want to help them MORE? Even though they call you pirate-parrot? Ok. Stay away from super spy Renard, that wiley fox and her wolfy buddies, they are the baddest backend engineers I've seen. Bye bye bird!» Says Captain Swizec.

«Boop! Captain Json! Oooh! THAT smells heavenly» Says Ruby.

«Boop! Ruby! You look like you have brought a tasty programming problem. Let's see it! I cannot wait!» Says Captain Json.

«Here!» Says Ruby.

«Hmm.... You are going to find a PiRATE_PRiNCESS in the far future and bring her here to stop murderous Mary's Mad Masterplan. Clever.... Clever.... Ok. So you need to add code.... I'll give you two tasks. Firstly I'll put Res-the-cat and Kiwi on my .json( hat like this. Kiwi holds the message and the PiRATE_PRiNCESS like this. How would you code that?! Hmmm....» Says Captain Json.

«Øøøh.... like this?» Says Ruby.

( // codesnippet)

   res.json({ message: message, princess: PIRATE_PRINCESS })



«Yes! Secondly, if your TimeShip lands in the wrong city or year you will not find a PiRATE_PRiNCESS, only send the message. Now code it! YARR! Lizabeth! Welcoooome and if you eat this new _ _ _ _ and tell me honestly how it tastes to you, I would be honored to give you my .json( hat.» Says Captain Json.

«Deal! Munch-Munch-Munch!» Says Lizabeth.

«Finished! Look!» Says Ruby.

( // codesnippet)
 
src / api / time-travel.js

const PIRATE_👑 = {
 age: "_ _ _",
 hairColor: "blond",
}
  
export default function timeTravelHandler(req, res) {
  const { city, year } = req.query
  const message = `You time-
    travelled to ${city},
    in year ${year}`
 
 if (city === "oslo" && year === "2026") {
   res.json({ message: message, princess: PIRATE_👑 })
 } else {
   res.send(message)
 }
}




«Now run it!» Says Captain Json.

( // browser)

http://localhost:8000/api/time-travel/oslo?year=2026 result {"message":"You landed in oslo, year 2026","princess":{"birthYear":"2015","hairColor":"blond","nickName":"Lilly"}}

«Here I ask for the wrong year.» Says Ruby.


http://localhost:8000/api/time-travel/oslo?year=2023 result “You landed in oslo, year 2023”

«Your Gatsby function is LOOKING sharp!» Says Captain Json.

«Shall we get my whole TimeShip deployed?» Says Ruby.

«Yes! We. Shall. Ruby!» Says Captain Json climbing the rooftops towards the pink and yellow TimeShip on Lizabeths rooftop.