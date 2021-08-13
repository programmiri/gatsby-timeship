const { GoogleSpreadsheet } = require("google-spreadsheet")
const crypto = require('crypto')
// 15:30
const gingerBreadHashIp = ({ ipAdress, salt }) => {
    // 18:30
    const hash = crypto
        .createHash("sha256")
        .update(`${ipAdress}-${salt}`)
        .digest("hex");
    return hash;
}
// 5:33
export default async function timeTravelHandler(req, res) {

    // Get the data from body. Should add validation!
    const { city, year, email } = req.query
    // 10:30
    const ipAdress = req.headers["client-ip"];
    // 16:30
    const gingerBreadHashedIpAdress = hashIp({ ipAdress, salt: process.env.IP_HASH_SALT });
    try {
        // Set up the connection to the correct Google Sheet
        const sheet = await initSheet({
            sheetId: process.env.GOOGLE_SHEET_ID,
            clientEmail: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            privateKey: Buffer.from(process.env.GOOGLE_PRIVATE_KEY, "base64"),
        });
        // Add a row with our time travel data and when someone hits opur function we will add aq new row
        await sheet.addRow({
            // 15:30
            id: gingerBreadHashedIpAdress,
            timestamp: new Date(),
            city,
            year,
            email,
        });
        // respond

        res.json({ message: `You time-travelled to ${city}, in year ${year} with email ${email}` });

    } catch (error) {
        // Something went wrong, log it
        // 12:00
        console.log(error.message);
        // 5:33
        // Send back generic error message
        res.status(500).json({
            message: `Faulty TimeShip`,
        });
    }
}

const initSheet = async ({ sheetId, clientEmail, privateKey }) => {
    const doc = new GoogleSpreadsheet(sheetId);

    await doc.useServiceAccountAuth({
        client_email: clientEmail,
        private_key: privateKey,
    });

    await doc.loadInfo();

    return doc.sheetsByIndex[0];
};

// tiny task from week 2
// once a day because L-space?