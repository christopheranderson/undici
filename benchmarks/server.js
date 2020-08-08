'use strict'

const { createServer } = require('http')

createServer((req, res) => {
  req.pipe(res)
}).listen(3009)
