# Examen final BBDD + LMSGI

## Contexto

Tienes un backend creado con Express que actualmente gestiona un sistema de autenticacion HTTP Basic.

No existe base de datos, los usuarios y contraseñas están almacenados en el archivo `database/users.js` en un objeto con la siguiente estructura:

```javascript
{
  "user1": "password1",
  "user2": "password2"
}
```

Dispones de un middleware para autenticarlos, está localizado en `middleware/auth.js`.

El archivo `index.js` es el punto de entrada de la aplicación.

## Objetivo

Deberás implementar cuantas más funcionalidades puedas de las siguientes:

- Mejora el entorno de desarrollo, crea un script `dev` en el `package.json` que reinicie el servidor automáticamente al detectar cambios en el código fuente.
- Sustituir el objeto de usuarios por una base de datos SQLite3 o mySQL.
- Añade una pagina de registro de usuarios:
  - El registro debe ser accesible desde la ruta `/register`.
  - El formulario de registro debe solicitar un `username`, `password`.
- Añade un linter y crea un script `lint` en el `package.json` que arregle los errores de estilo.
- Busca información sobre el sistema de autenticación usado en este proyecto, documenta **como funciona**, además de **sus ventajas y desventajas** frente a otros mecanismos de autenticación.

npm run start = node
npm run dev = nodemon

### Sistema de autenticación usado: HTTP Basic Auth

Aquí usamos lo más básico: HTTP Basic Auth. Básicamente, cuando quieres entrar a una parte privada, el navegador te pide usuario y contraseña. Eso se manda al servidor (en cada petición) y si coincide con lo que hay en la base de datos, te deja pasar.

Fuente: https://es.wikipedia.org/wiki/Autenticaci%C3%B3n_de_acceso_b%C3%A1sica

**Ventajas:**  
- Es fácil de poner, no hay que instalar casi nada.
- Funciona en cualquier navegador o programa que haga peticiones.

**Desventajas:**  
- No es seguro si no usas HTTPS, porque cualquiera puede ver tu usuario y contraseña si intercepta la red.
- No hay sesiones ni nada moderno, solo usuario y contraseña cada vez.
- No es buena idea para proyectos grandes o importantes.

está bien para pruebas o cosas pequeñas, pero para algo serio mejor usar otro sistema