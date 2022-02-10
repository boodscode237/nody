'use strict'
const http = require('http')

const PORT = 3000

const friends = [
    {
        id: 0,
        name: "Gogopro"
    },
    {
        id: 1,
        name: "Ghost"
    },
    {
        id: 2,
        name: "Maka"
    }
]
const server = http.createServer((req, res) => {
    const items = req.url.split('/')
    console.log(items)
    if (items[1] == 'friends') {
        // res.writeHead(200, {
        //     'Content-Type': 'application/json',
        // })
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        if (items.length === 3) {
            const friendIndex = Number(items[2])
            res.end(JSON.stringify(friends[friendIndex]))
        }
        else{
            res.end(JSON.stringify(friends))
        }
        
    } else if (items[1] == 'messages') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<body>')
        res.write('<ul>')
        res.write('<li>Hello Donald</li>')
        res.write('<li>Hello Brice</li>')
        res.write('</ul>')
        res.write('</body>')
        res.write('</html>')
        res.end()
    } else{
        res.statusCode = 404
        res.end()
    }
    
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
})
