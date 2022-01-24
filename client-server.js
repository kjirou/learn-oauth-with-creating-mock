const express = require('express')

const portArg = process.argv[2]
if (portArg === undefined) {
  throw new Error('Specify the port for the authorization server as the first argument.')
}
const port = parseInt(portArg)

const app = express()

app.get('/', function (req, res) {
  const html = `<html><body>
    <h1>Client Server</h1>
  </body></html>`
  res.set({
    'Content-Type': 'text/html',
    'Cache-Control': 'no-store',
  })
  res.send(html)
})

app.listen(port, () => {
  console.log(`Listening on ${port} port.`)
})
