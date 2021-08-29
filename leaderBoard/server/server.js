const webSocketServer =  require('ws').Server
const wss = new webSocketServer({port: 9090})

const clients = []

wss.on('connection', (connection) => {
    clients.push(connection)

    connection.on('message', (data) => {
        const datas = JSON.parse(data)
        clients.forEach(client => client.send(JSON.stringify(datas)))
    })
})