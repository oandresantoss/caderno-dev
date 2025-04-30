import {  createServer } from 'node:http'

const server = createServer(() => {
    console.log('Olá Mundo!')
})

server.listen(333)
