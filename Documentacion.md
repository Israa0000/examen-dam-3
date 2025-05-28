# Documentación del proyecto

## ¿Qué es este proyecto?

Este proyecto es una pequeña aplicación backend hecha con Node.js y Express. El objetivo principal es hacer pruabas de la autenticación básica HTTP y el manejo de usuarios usando una base de datos SQLite3. Para poder registrar usuarios, iniciar sesión y acceder a rutas protegidas.

---

## ¿Qué he hecho paso a paso?

1. **Inicialización del proyecto**
   - He creado el proyecto con `npm i` y he añadido las dependencias principales: `express` para el servidor, `sqlite3` para la base de datos, y herramientas de desarrollo como `nodemon` y `standard` para el linting.

2. **Configuración de la base de datos**
   - He montado una base de datos SQLite3 y he programado la creación automática de la tabla `users` si no existe. Así, cada vez que arranca el servidor, la base de datos está lista para usarse. Ahora `users.js` no existe

3. **Middleware de autenticación**
   - He implementado un middleware que protege las rutas privadas usando autenticación HTTP Basic. Este middleware comprueba que el usuario y la contraseña enviados existan en la base de datos.

4. **Rutas principales**
   - `/` → Ruta pública, accesible para cualquiera.
   - `/private` → Ruta protegida, solo accesible si te autenticas correctamente.
   - `/register` → Formulario para registrar nuevos usuarios.
   - `/logout` → Ruta para "cerrar sesión" (en realidad, pide autenticación de nuevo).

5. **Registro de usuarios**
   - He añadido un formulario HTML sencillo para que cualquiera pueda crear un usuario nuevo, que se guarda en la base de datos.

6. **Scripts útiles**
   - `npm run dev` para desarrollo con recarga automática.(nodemon)
   - `npm run lint` para mantener el código limpio y ordenado.

---

## HTTP Basic Auth y mejoras

- **HTTP Basic Auth** es fácil de implementar, pero no es lo más seguro si no se usa HTTPS. Es ideal para aprender, pero no para producción.
- Usar SQLite3 es muy cómodo para proyectos pequeños o pruebas, ya que no requiere instalar un servidor de base de datos.
- El middleware personalizado me ha permitido entender mejor cómo funcionan las cabeceras HTTP y la autenticación en Express.

---

## ¿Qué se podría mejorar?

- Guardar las contraseñas con hash en vez de texto plano.
- Añadir validaciones más estrictas en el registro.
- Implementar sesiones o tokens para una autenticación más robusta.
- Mejorar la interfaz del formulario de registro.

---

## Resumen

Este proyecto es una base sencilla para entender cómo funciona la autenticación básica y el manejo de usuarios en Node.js. Está pensado para aprender y experimentar, y puede servir como punto de partida para proyectos más grandes o seguros.

---