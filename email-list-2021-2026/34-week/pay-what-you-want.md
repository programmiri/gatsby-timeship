Subject: Gatsby Functions + Stripe checkout = pay-what-you-want

## Ship Ohoi!
## 👋😺⛵

# How did Ola practice Gatsby functions and pay-what-you-want with Stripe checkout?

Lillian (6 🏴‍☠️👸 ) and Ola use the browser as frontend for Ruby's TimeShip.

## Tech stack
-Stripe SDK
-Gatsby version 3+ with Gatsby functions
-Ruby's TimeShip

## Scenario
Gold is fuel for time travel.
Price is pay-what-you-want in test-dollars in stripe test mode.
Ruby Reckless is our one user.

## Question
How does Ruby tell the Gatsby function what price she is willing to pay for gold-fuel?

## Answer
Ruby types her price into the browser:

price=333333

## Question
How do Lillian (6 🏴‍☠️👸 ) and Ola ask for the price in the Gatsby function?

## Answer
```
req.query.price
```

Like this:
```
                    unit_amount: req.query.price * 100,
```

## Question
Where does Stripe want the price to be?

## Answer
Stripe wants the price to be inside an object:

```
             price_data: { 💰 }
```

## Question
How does Stripe want the price to look?

## Answer

Inside the `price_data` object Stripe wants 3 things and one of them is `unit_amount:`. It should look like this:


                price_data: {
                    unit_amount: req.query.price * 100,
                    // thing-2,
                    // thing-3,
                },

## Go and try Ruby's TimeShip yourself at:

[https://timeship.gatsbyjs.io/api/time-ship?city=oslo&year=2026&price=333333](https://timeship.gatsbyjs.io/api/time-ship?city=oslo&year=2026&price=333333)


Stay piraty!
Stay playful!

Ola Vea

P.S
If that's not enough for you, go check out Queen Benedicte @raae 's whole webinar for pay-what-you-want between $5 and $25
[https://www.crowdcast.io/e/get-paid-through-a/](https://www.crowdcast.io/e/get-paid-through-a/)

Or clone Lillian's repo and have a go at building a fancy frontend for Ruby's TimeShip yourself.

[https://github.com/lillian-raae-vea/go-gatsby-funcjam-21](https://github.com/lillian-raae-vea/go-gatsby-funcjam-21)



This has been Gatsby piraty answered questions by Lillian (6 🏴‍☠️👸 ) and Ola Vea.