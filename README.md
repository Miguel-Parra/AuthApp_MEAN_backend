# AuthApp MEAN (Mongo, Express, Angular, Node)
 <br>

## **FUNCIONALIDAD**

La aplicaión permite:

- Crear un token
- Registras usuarios en la base de datos
- Renovar los tokens

<br>

 ## **TEMAS**

- Fundamentos de Node
- REST Services
- JWT
- MongoDB - Mongo Atlas
- Express framework
- Express validator
- CRUD
- Validaciones
- Modelos de base de datos
- Encriptar contraseñas

<br>

 ## **TECNOLOGIAS**

En backend se utilizó lo siguiente:

 ### **Express**
 Framework que permitió crear la API. Aqui se implementó:
 - Rutas y controladores
 - Middlewares para servir el directorio público, leer el body de las peticiones, colocar los CORS y enlazar las rutas.

 ### **MongoDB Atlas**
 Servicio en la nube de Base de Datos que permitió crear una base de datos documental con MongoDB. 

 ### **Mongoose**
 ODM que permitió:
  - Conectar la aplicación de Node con la base de datos de MongoDB Atlas.
  - Crear los modelos para la DB.
  - Realizar inserciones, lecturas, queries, etc. 

   ### **Heroku**
 Plataforma utilizada para desplegar el proyecto. Aquí se configuró las variables de entorno personalizadas que utiliza la aplicación.

 ### **Bcryptjs**
 Paquete que Node que permitió encriptar la contraseña mediante un hash de una sola vía.

 ### **Express-validator**

 Paquete de Node que contiene una gran colección de Middlewares utilizados para las validaciones, por ejemplo: si llega vacío algún campo, hacer validaciones personalizadas, etc.

 ### **Dotenv**
 Paquete que Node que permitió crear las variables de entorno utilizadas de manera local en el proyecto. 

 ### **JSON Web Token**
 Utilizado para autenticar y validar al cliente en el backend.
 
<br>

## **Frontend**
Para el frontend se utilizo angular.
El proyecto se encuentra en: https://github.com/Miguel-Parra/-AuthApp_MEAN_frontend_Angular 

<br>

## **Heroku**

<br>

La aplicación se encuentra desplegada en:

https://authapp-mean-angular-node.herokuapp.com/



<br>

## **RECOMENDACIONES**

Recuerden reconstruir los módulos de Node con:
```
npm install 
```
Y para correr la aplicación con:
```
node app.js
```