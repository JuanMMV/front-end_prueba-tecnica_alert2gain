# front-end_prueba-tecnica_alert2gain

Aplicación diseñada utilizando ReactJS y el entorno de desarrollo Vite.

Demo: https://front-end-prueba-tecnica-alert2gain-c19du9kn7.vercel.app/   
#### Antes de utilizar, asegúrese de ejecutar el comando "npm install" para descargar las dependencias proyecto.

### Descripción aplicación:
En la aplicación se extraen datos de una API para mostrar información en ella. Cuenta con tres vistas:
- LoginScreen: 
    - Se pedirá ingresar un email y una contraseña, el cual lo comprobara con la API.  
    - El email debe tener formato correcto.  
    - Si el email o la contraseña son incorrectas se mostrara un mensaje diciendo que las credenciales no son correctas.
    - Si son correctas permitirá el ingreso, la API retornara un token el cual almacenara en localStorage.  

- DashboardScreen: 
    - Se muestran tarjetas extraídas del End point "/api/Platforms".
    - Las tarjetas muestran imagen, nombre, flota.
    - Se agregó un Button Group con las flotas para ver cada sección y además se agregó una sección con el nombre de "All" para ver todos los ítem de todas la flotas.
    - Al final de la página se agregaron dos botones para avanzar y retroceder las páginas.
    - Se agregó un header con un componente Link para cerrar sesión.

- DetailPlatformScreen:
    - Muestra una tarjeta con la foto, nombre, flota y el último reporte.
    - Abajo de los datos se encuentra un botón el cual si se presiona muestra URL de S3.
    - Bajo esta tarjeta muestra una tabla con los sensores
    - La tabla muestra ID, nombre y tipo del sensor.

#### Otras funciones:
- La aplicación guarda el email y la contraseña en el localStorage.
- Si un usuario que no ha iniciado sesión intenta entrar con una URL, este será redireccionado al LoginScreen.
- Si el token se vence o se cambia en el localStorage, el usuario será redireccionado al LoginScreen y mostrara un mensaje: "Error... Credenciales inválidas"