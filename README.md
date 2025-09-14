# To-Do List — Backend

Backend API para la aplicación To-Do List. Construido con Express y MongoDB (Mongoose). Proporciona endpoints para gestionar usuarios y tareas.

## Resumen

- Tecnologías: Node.js, Express, MongoDB (Mongoose), dotenv, express-session
- Estructura principal: `index.js` arranca el servidor y registra las rutas definidas en `src/Tasks` y `src/users`.

## Requisitos

- Node.js (recomendado v18+)
- MongoDB (cadena de conexión a Mongo Atlas o instancia local)

## Instalación

1. Sitúate en la carpeta del backend:

```powershell
cd c:\Users\rjstu\Documents\Proyects\TODOLIST\backend
```

2. Instala dependencias:

```powershell
npm install
```

## Variables de entorno

Crea un archivo `.env` en la carpeta `backend/` con las siguientes variables. No incluyas secretos en repositorios públicos.

Ejemplo (`.env`):

```
PORT=5000
DB_URI=<tu-mongodb-connection-string>
SESSION_SECRET=<una-clave-secreta-para-sesiones>
```

Hecho: este repositorio contiene un archivo `.env` local con valores de desarrollo — reemplaza `DB_URI` y `SESSION_SECRET` por tus propios valores en producción.

## Scripts útiles

En `package.json` del backend hay estos scripts:

- `npm run dev` — arranca el servidor en modo desarrollo (usa `nodemon` y activa `DEBUG=app:*` en Windows).

Ejecutar servidor en desarrollo:

```powershell
npm run dev
```

## Endpoints principales

Los controladores registran las siguientes rutas base (prefijo `/users` y `/tasks`):

Usuarios (`/users`):
- `POST /users/register` — registrar un nuevo usuario. Body JSON: `{ fullName, email, password }`.
- `POST /users/login` — iniciar sesión. Body JSON: `{ email, password }`.
- `GET /users` — listar todos los usuarios.

Tareas (`/tasks`):
- `GET /tasks/` — obtener todas las tareas.
- `POST /tasks/create` — crear una tarea. Body JSON con campos de la tarea.
- `PUT /tasks/update/:id` — actualizar tarea por id.
- `DELETE /tasks/delete/:id` — eliminar tarea por id.

Respuesta estándar

El proyecto usa un helper `Response` para enviar respuestas con formato consistente. En caso de error, el controlador devuelve errores manejados por `Response.error`.


