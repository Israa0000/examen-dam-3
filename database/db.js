import sqlite3 from 'sqlite3'
sqlite3.verbose()

const db = new sqlite3.Database('./database/users.db')

db.run(`CREATE TABLE IF NOT EXISTS users (
  username TEXT PRIMARY KEY,
  password TEXT NOT NULL
)`)

export default db
