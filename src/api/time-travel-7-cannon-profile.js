export default async function cannonHandler(req, res) {
    console.log(`pro api req`, req.body)
    try {
        let 🚀 = ""

        const token = req.cookies.token

        const 🔑 = "my_jwt_signing_key"

        🚀 = jwt.verify(token, 🔑, {
            alcoRythms: [HS256, RS256, HS384]
        })
    }
}
