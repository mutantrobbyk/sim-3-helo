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
    },
    getPosts: async (req, res) => {
        const db = req.app.get('db')
        const myPosts = req.query.myPosts === 'true' ? true : false
        const search = req.query.search ? req.query.search : ''
        let userId = req.query.id
        userId = +userId
        if(myPosts && search !== '') {
            const posts = await db.search_by_title([ '%' + search + '%'])
            res.status(200).send(posts)
        } else if (!myPosts && search === ''){
            const posts = await db.search_title_notuser([userId])
            res.status(200).send(posts)
        } else if (!myPosts && search) {
            const posts = await db.search_notuser_posts([userId, '%' + search +'%'])
            res.status(200).send(posts)
        } else if(myPosts && !search) {
            const posts = await db.get_posts()
            res.status(200).send(posts)
        } else if(!myPosts && !search) {
            const posts = await db.get_posts()
            res.status(200).send(posts)
        }
       
    }
}