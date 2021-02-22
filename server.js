
const fastify = require('fastify')({
  logger: { level: process.env.DEBUG ? 'debug' : 'error' }
})

const statusPlugin = require('fastify-status')

fastify.register(statusPlugin, {
  endpoint: '/health',
  method: 'GET',
  hide: true
})

// ---- Run the server! ----
const start = async () => {
  try{
    await fastify.listen(3000, '0.0.0.0')
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    mongoClient.close()
    mysqlCon.end()
    process.exit(1)
  }
}

start()

