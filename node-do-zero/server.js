import {  createServer } from 'node:http'

const server = createServer((request, response) => {
    console.log('Olá Mundo!')

    return response.end()
})

server.listen(3333)
