module.exports = {
    login: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        const user = await db.find_credentials({username, password})
        res.status(200).send(user[0])
    },
    register: async (req, res) => {
        const db = req.app.get('db')
        const {username, password, profilePic} = req.body
        const user = await db.find_username([username])
        if (user.length > 0) {
            return res.status(400).send({ message: "username in use." })
        }
        const newUser = await db.create_user({username, password, profilePic})
        res.status(200).send(newUser)
    }
}