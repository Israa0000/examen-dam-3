import express from 'express'
import bodyParser from 'body-parser'
import db from './database/db.js'
import { authMiddleware } from './middleware/auth.js'

const app = express()

  app.use(bodyParser.urlencoded({ extended: false }))

  app.get('/', (req, res) => {
    res.send('Público')
  })

  app.get('/private', authMiddleware, (req, res) => {
    res.send('Entraste al área protegida')
  })

  app.get('/logout', (req, res) => {
    res.set('WWW-Authenticate', 'Basic realm="logout"')
    return res.status(401).send('Has cerrado sesión. Recarga la página para volver a iniciar sesión.')
  })

  app.get('/register', (req, res) => {
    res.send(`
      <form method="POST" action="/register">
        <h2>Register</h2>
        <input name="username" placeholder="Username" required />
        <input name="password" type="password" placeholder="password" required />
        <button type="submit">register</button>
      </form>
    `)
  })

  app.post('/register', (req, res) => {
    const { username, password } = req.body
    db.run('INSERT INTO users(username, password) VALUES (?, ?)', [username, password], function (err) {
      if (err) {
        return res.send('Error: usuario ya existe o datos inválidos')
      }
      res.send('Usuario registrado correctamente')
    })
  })

  app.listen(3000, () => console.log('Servidor en http://localhost:3000'))
