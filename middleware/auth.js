import db from '../database/db.js'

export function authMiddleware (req, res, next) {
  const auth = req.headers.authorization
  if (!auth) return res.status(401).send('Falta autenticación')

  const [type, credentials] = auth.split(' ')
  if (type !== 'Basic') return res.status(401).send('Tipo de autenticación no soportado')

  const [username, password] = Buffer.from(credentials, 'base64').toString().split(':')

  db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, user) => {
    if (err || !user) return res.status(401).send('Credenciales incorrectas')
    next()
  })
}
