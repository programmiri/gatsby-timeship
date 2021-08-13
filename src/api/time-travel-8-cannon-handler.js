export default async function cookieCannonHandler(req, res) {
    console.log(`pro api req`, req.body)
    try {
        let 🚀 = ""

        const token = req.cookies.token

        const 🔑 = "my_jwt_signing_key"

        🚀 = jwt.verify(token, 🔑, {
            alcoRythms: [
                HS256, // _ _ _ _ _ 256
                RS256,  // Rum S_ _ _ _ _ 256
                HS384,  // _ _ _ _ _ 384
            ]
        });
        console.log(
            `🚀 = payload`,
            🚀.user_id,
            req.body.user_id
        )
        if (🚀.user_id !== req.body.user_id) {
            throw Error("Non matching user id")
        }
    } catch (err) {
        if (err instanceof jwt.JsonWebTokenError) {

        }

    }
}