## Descripcion
Esta aplicación es un gestor de tareas.
Backend desarrollado en NestJS (framework de Node.js), utilizando base de datos no relacional con MongoDB.


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
# URLS importantes
- http://localhost:5000/api/swagger (Para ver la documentación en swagger y respuesta de cada endpoint, por defecto en local se ejecuta en el puerto 5000) 
- https://tasksback-72ow.onrender.com/api/swagger  (URL de producción, desplegado en render, puede tardar unos segundos por el plan free de render)
- AlejoFabianV/Blog-back (repositorio del backend)
- AlejoFabianV/tasksFront (repositorio del Frontend donde está siendo llamado este backend)

# Schema de la base de datos
- _id (identificador único, autogenerado por mongo)
- timestamps: true (se genera automáticamente la propiedad createdAt y updateAt)
- title (título de la tarea, debe ser único, es de carácter obligatorio)
- description (descripción de la tarea en cuestión, es de carácter opcional)
- completed (indica si la tarea está pendiente o completada por defecto es false)

# Tasks Service y sus funciones
- findAll(): Método GET, devuelve todas las tareas
- findOne(): Método GET, devuelve una tarea mediante su ID único
- create(): Método POST, crea una tarea donde el title es requerido, tiene un manejo de error para cuando el title esta repetido o se intenta enviar vacio
- delete(): Método Delete, elimina una tarea mediante su ID único
- update(): Método PUT, actualiza un campo o todos de una tarea mediante su ID único.

## Tasks Controller y sus funciones
 # En este archivo se puede ver las ApiResponse, donde se informa el tipo de status que puede devolver.
- findall(): llama al método findAll() del service, devuelve todas las tareas
- findOne(): llama al método findOne() del service, devuelve una tarea por su ID
- create(): llama al método create() del service, crea una nueva tarea, donde debe tener de manera obligatoria un título y no puede tener un título repetido
- delete(): llama al método delete() del service, elimina una tarea mediante su ID único, si el ID no existe devuelve un error
- update(): llama al método update() del service, actualiza un campo o todos de una tarea mediante su ID único.
