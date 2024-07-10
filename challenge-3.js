const http = require('http');
const {readFile} = require('fs');

const server = http.createServer((req, res) => {
    if(req.url=== '/users/page' ){
        readFile('./folder/users.txt', 'utf8', (err, data) => {
            if(err) {
                console.error(err);
                res.end('Welcome to our api page.')
                return
            }
            const people = data.trim().split('\n').map((line) => {
                const [firstName, lastName, birth, location, interest] = line.split(', ')
                return {firstName, lastName, birth, location, interest}
            })
            let html = '<div style="display: flex; gap: 20px;">'
            people.forEach(person => {
                html += `
                    <div style="text-align:center; font-family: Tahoma, sans-serif; width: 300px; background-color: #96C9F4; border: 1px solid #d3d3d3; border-radius: 10px; padding: 20px; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);">
                        <img src="https://cdn-icons-png.flaticon.com/512/4715/4715330.png" alt="profile of user" style="border-radius:50%; width:70px" />
                        <h2 style="color: #333; font-size: 20px; margin-bottom: 10px;">${person.firstName} ${person.lastName}</h2>
                        <p style="color: #555; font-size: 14px; margin: 5px 0;"><strong>Date of Birth:</strong> ${person.birth}</p>
                        <p style="color: #555; font-size: 14px; margin: 5px 0;"><strong>Country:</strong> ${person.location}</p>
                        <p style="color: #555; font-size: 14px; margin: 5px 0;"><strong>Interest:</strong> ${person.interest}</p>
                    </div>
                    `
            })
            html += '</div>'
            res.end(html)
        })
        
    } else {
        res.end('Not Found')
    }
    
})

server.listen(5000, () => console.log('Challenge three done successfully'))