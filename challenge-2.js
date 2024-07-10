const http = require('http');
const {readFile} = require('fs');

const server = http.createServer((req, res) => {
    if(req.url=== '/users/json' ){
        readFile('./folder/users.txt', 'utf8', (err, data) => {
            if(err) {
                console.error(err);
                res.end('Welcome to our api page.')
                return
            }
            const person = data.trim().split('\n').map((line) => {
                const [firstName, lastName, birth, location, interst] = line.split(', ')
                return {firstName, lastName, birth, location, interst}
            })
            res.end(JSON.stringify(person))
        })
        
    } else {
        res.end('Not Found')
    }
    
})

server.listen(5000, () => console.log('Challenge tow done successfully'))