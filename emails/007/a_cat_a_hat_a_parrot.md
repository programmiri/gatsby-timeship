«Who is the best neighbour to help res-the-cat send your PiRATE_PRiNCESS and your message out of your Gatsby function and into Ruby's TimeShip? Aaare yooou reeeady tooo a rrriiiiddleee!» Says Captain Swizec.

«Yes! Ding!» Shouts Ruby, dancing like a butterfly.

«Who. Was a piratical rockstar-as-a-youngster AND also serves the best barbeque burger on Our Bridge?» Asks Captain Swizec.

«Freddie Caaatsbyyy....?» Says Lizabeth.

«No! No!» Croaks Kiwi.

«Aha! Captain Json» Says Ruby, already climbing along the rooftops.

«Excellent! See you at Freddie's Friday Show!» Says Captain Swizec with a tip of his hat.

«Go! Go! Help! Help!» Croaks Kiwi.

«You want to help them MORE? Even though they call you pirate-parrot behind your back?» Says Captain Swizec.

«YARR! A trip! A trip! Kiwi wants a trip!» Croaks Kiwi.

«Ok. Bye bye bird!» Says Captain Swizec.

A few rooftops up London Bridge, at Eat With Json.

«Boop! Captain Json! Oooh! THAT smells heavenly» Says Ruby.

«Ah Ruby! You look like you have brought a tasty programming problem. Let's see it!» Says Captain Json.

«Here!» Says Ruby.

«Hmm.... I see.... You are going to find a Pirate Princess in the far future and bring her here to help stop murderous Mary's mad masterplan. Clever.... Clever.... Ok. So you need to add code.... I'll give you two tiny tasks. Firstly I'll put Res-the-cat and Kiwi on my .json( hat like this. Kiwi holds the message and the PiRATE_PRiNCESS like this. How would you code that?! Hmmm....» Says Captain Json.

«Øøøh.... like that?» Says Ruby.

   res.json({ message: message, princess: PIRATE_PRINCESS })



«Yes! Secondly, if your TimeShip lands in the wrong city or year you will not find a Pirate Princess and thus only send the message. Now code it! YARR! Lizabeth! Welcoooome and if you eat this new burger and tell me honestly how it tastes to you, I would be honored to give you my .json( hat.» Says Captain Json.

«Deal! Munch-Munch-Munch!» Says Lizabeth.

«Finished! Look!» Says Ruby.
 
src / api / time-travel.js

const PIRATE_PRINCESS = {
 age: "_ _ _",
 hairColor: "blond",
}
  
export default function timeTravelHandler(req, res) {
  const { city, year } = req.query
  const message = `You time-
    -travelled to the city of ${city},
    in year ${year}`
 
 if (city === "oslo" && year === "2026") {
   res.json({ message: message, princess: PIRATE_PRINCESS })
 } else {
   res.send(message)
 }
}


«Now run it!» Says Captain Json.

( // browser)

http://localhost:8000/api/time-travel/oslo?year=2026 result {"message":"You time-travelled to the city of oslo, in year 2026","princess":{ age: "_ _ _", "hairColor":"blond"}}

«Here I ask for the wrong year.» Says Ruby.

http://localhost:8000/api/time-travel/oslo?year=2023 result “You time-travelled to the city of oslo, in year 2023”

«Your Gatsby function is LOOKING sharp!» Says Captain Json.

«Shall we get my whole TimeShip deployed?» Says Ruby.

«Yes! We. Shall. Ruby!» Says Captain Json climbing the rooftops towards Ruby's pink and yellow TimeShip on Lizabeths rooftop.