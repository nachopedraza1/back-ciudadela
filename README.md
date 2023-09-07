# Prueba técnica ciudadela.

- Tecnologías utilizadas: 
```bash
- Nodejs
- Express
- GraphQL
- Nextjs
- TypeScript
```

El objetivo del proyecto es consumir los datos de la API Rick and Morty utilizando GraphQL y devolver a nuestro cliente solo los personajes cuya especie sean humanos, 
tuve que realizar un filtro adicional, ya que al enviar la query "filter: { species: "Human" }" nos devolvía humanos y también humanoides.
En el Back-end comencé el proyecto creando una clase Server que se encarga de la configuración básica de nuestro servidor, aquí se encontraran las rutas de nuestra API, los middlewares y la inicialización de nuestro servidor que escuchara el puerto 8000.
El file sistem está organizado de esta manera para que los controladores solo se encarguen de la lógica y las rutas solo de llamar a los endpoints. Por otro lado utilizamos axios para las peticiones http y typescript para tener el mayor 
control posible de las respuestas de nuestra api y de los tipos. Con respecto a la paginación desde el front-end tenemos un customhook que llamara dinámicamente los endpoints con el query param ?page.

En el Front-end realicé una tabla con todos los personajes humanos, creamos un custom hook utilizando SWR para lograr que nuestro componente obtenga automáticamente el último flujo de datos almacenado en caché, y así lograr que
nuestra interfaz se vea mucho más rápida, además le agregue la funcionalidad de poder enviarle dinámicamente el número de página que estamos solicitando y asi realizar la paginación y mantener la fluidez. Aprovechando que SWR nos devuelve el estado de
carga de nuestra petición realicé un skeleton de carga en cada una de las filas para mejorar la experiencia de usuario.

- Para ejecutar el proyecto back-end:

```bash
1 - clonar el repositorio: git clone https://github.com/nachopedraza1/back-ciudadela
2 - instalar dependencias: npm install
3 - asegurarnos de tener las variables de entorno correctamente
4 - ejecutar app.js
5 - realizar la petición a http://localhost:8000/api/characters
```

- Para ejecutar el proyecto front-end:

```bash
1 - clonar el repositorio: git clone https://github.com/nachopedraza1/front-ciudadela
2 - instalar dependencias: npm install
3 - npm run dev
```
