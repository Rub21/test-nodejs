#Pruebas e instalacion de algunos paquetes

### Intalar dependencias:
 - npm install instala todos los paquetes que vamos  a necesitar en el proyecto, si en caso de que se tenga ya en  archivo package.json

`npm install express --save`

instalamos express, y se pone el --save para que este paquete se ponga automaticamente en package.json `"express": "^4.6.1"`


### Como cargar los paquetes facilmente.
si el archivo package.json  esta bien elaborado, y tiene las dependencias, se le puede llamar con `npm install` todos los paquetes y estos seran cargados al proyecto.


### Intalar libreria supervisor
libreria para que ya no estemos iniciando el servidor.

`sudo npm install -g supervisor`

y luego iniciar con `supervisor server.js`

#### Instalando node-inpestor

`sudo npm install -g node-inspector`

corremos un comando para saber donde se instalo `which node-inspector` y recibimos `/usr/bin/node-inspector`


#### Instando forever

 libreria para produccion, 

`npm install -g forever`


luego ejecutamos lo siguiente:

`backend$ which node-inspector`

Optenemos como respuesta :`/usr/bin/node-inspector`
luego ejecutamos con forever.

`backend$ forever /usr/bin/node-inspector`

nos para como respuesta `Visit http://127.0.0.1:8080/debug?port=5858 to start debugging.` y ya sabemos que esta corriendo.

luego abrimos otro terminal y ejecutamos  supervisor

`backend$ supervisor --debug server.js`

esto nos dira que ya esta corriendo en modo de debuger.


![screenshot from 2014-07-23 18 58 46](https://cloud.githubusercontent.com/assets/1152236/3682140/59c268cc-12c5-11e4-824d-d7deec8d0bf2.png)

![screenshot from 2014-07-23 19 02 26](https://cloud.githubusercontent.com/assets/1152236/3682167/dd793cb8-12c5-11e4-8614-721d8a001d9b.png)
