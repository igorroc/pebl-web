export default {
    jwt: {
        secret: String(process.env.JWT_SECRET),
        expiresIn: "1d",
    }
}