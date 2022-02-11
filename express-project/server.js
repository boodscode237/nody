const express = require('express')
const path = require('path')
const friendsRouter = require('./routes/friends.router')
const messagesRouter = require('./routes/messages.router')

const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
const PORT = 3000


app.use((req, res, next) => {
    const start = Date.now()
    next()
    // actions on middleware
    const delta = Date.now() - start
    console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`)
})

// The path is reative depending on where we start the app (if we start the project in a different directory we will get a different answer). To fix that we need to use teh path.join(__dirname, 'public')

app.use('/site', express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.get('/', (req, res) =>{
    res.render('index.hbs', {
        title: "My friends are very clever",
        caption: "Let\'s go skiing",
    })
})
app.use('/friends', friendsRouter)
app.use('/messages', messagesRouter)


app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`))

