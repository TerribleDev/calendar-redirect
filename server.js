const fastify = require('fastify')({ logger: false })

// Declare a route
fastify.get('/*', async (request, reply) => {
  return reply.redirect(302, "https://calendly.com/terribledev")
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT || 8081 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()