const {readFile} = require('fs')
const path = require('path')

readFile('./folder/users.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    const user = data
    console.log(user)
})
