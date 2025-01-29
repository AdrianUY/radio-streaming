1 - Puesta en funcionamiento:
Cargar temas en carpeta public/music
radio-frontend/public/music 
(asegurate de que sean en formato mp3)
2 - Ejecutar el script para generar la lista de música
Este script lee los archivos de la carpeta public/music y genera automáticamente la lista de canciones en el archivo musicList.json.
Ejecuta el siguiente comando desde la raíz del proyecto:
node generateMusicList.js
Verifica que el archivo radio-frontend/src/musicList.json se haya actualizado correctamente con los nombres de los temas.
3 - Iniciar el servidor de desarrollo
Navega a la carpeta del frontend:
cd radio-frontend
Inicia el servidor React:
npm start
Abre tu navegador y ve a http://localhost:3000 para ver la aplicación.

Automatizar con un script
Si prefieres simplificar los pasos, puedes usar el archivo start-radio.sh:

Uso del script start-radio.sh
Asegúrate de que el script esté en la raíz del proyecto.
Dale permisos de ejecución:
chmod +x start-radio.sh
Ejecútalo:
./start-radio.sh
Esto ejecutará automáticamente el script de generación de la lista y levantará el servidor React.





