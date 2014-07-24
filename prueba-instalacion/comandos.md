
#intalar dependencias:
 - npm install intala todos los paquetes que vasmo  a necesitar en node
`npm install express --save`

instalamos express, y se pone el --save para que este paquete se ponga untomaticamente en package.json `"express": "^4.6.1"`


# como cargar los paquetes facilmente.
si el archivo package.json  esta bien elaborado, y tiene las dependencias, se le puede llamar con `npm install` todos los paquetes y estos seran cargados al proyecto.


#intalar libreria supervisor
libreria para que ya no estemos iniciando del servidor.

`npm install -g supervisor`

y luego iniciar con `supervisor server.js`

#### instalando node-inpestor

`npm install -g node-inspector`

corremos un comando para `which node-inspector` y recibimos /usr/bin/node-inspector


#### instando forever

 libreria para produccion, 

`npm install -g forever`


luego ejecutamos lo siguiente:

`ruben@rub21:~/apps/nodejs/backend$ which node-inspector`
da como respuesta :`/usr/bin/node-inspector`
luego ejecutasmo con forever.
`ruben@rub21:~/apps/nodejs/backend$ forever /usr/bin/node-inspector`
nos para como respuesta `Visit http://127.0.0.1:8080/debug?port=5858 to start debugging.` y ya sabesmos que esta corriendo.

luego abrimos otro terminal y ejecutamos : supervisor

`supervisor --debug server.js`
es to nos dira que ya esta corriendo en modo de debuger.


![screenshot from 2014-07-23 18 58 46](https://cloud.githubusercontent.com/assets/1152236/3682140/59c268cc-12c5-11e4-824d-d7deec8d0bf2.png)

![screenshot from 2014-07-23 19 02 26](https://cloud.githubusercontent.com/assets/1152236/3682167/dd793cb8-12c5-11e4-8614-721d8a001d9b.png)
