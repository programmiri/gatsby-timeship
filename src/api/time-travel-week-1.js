const axios = require("axios");

export default async function handler(req, res) {
    const { city, year } = req.body;
    const email = "pirate_princess@lillylabs.no"
    const message = `You time-travelled to ${city}, in year ${year}`;

    axios.post(
        // Leg or endpoint
        "https://push.userlist.com/users",
        // Body,
        {
            email: email,
            properties: {
                city: city,
                year: year,
            },
        },
        // Head-ers
        {
            headers: {
                Authorization:
                `Push ${process.
                    env.
                    USERLIST_PUSH_API_KEY}`,
            }
        },

    );
}