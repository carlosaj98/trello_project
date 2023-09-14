require("express-async-errors")
const { json } = require("express")
const morgan = require("morgan")
// const helmet = require("helmet")
// const compression = require("compression")
// const errors = require('../middlewares/errors')
// const cors = require('cors')

module.exports = function (app) {
  app.use(json())
  app.use(morgan("tiny"))

  // app.use(helmet())
  // app.use(compression())
  // app.use(cors())

  app.use("/api/users", require("../routes/userRoutes"))
  // app.use(errors)
}

// Repaso manejo de errores
// Autorización auth/admin
// optimizar para producción (helmet/compression)
