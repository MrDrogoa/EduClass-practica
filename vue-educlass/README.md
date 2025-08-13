# Integración de Firebase y manejo de errores

Primero creé mi base de datos en Firebase, después lo instalé en mi proyecto con:

	npm install firebase

Luego lo implementé en mi carpeta `stores` como archivo JS y aquí puse el código que te da Firebase para que puedas trabajar.

Después hice mis funciones asíncronas para poder llamar a Firebase y conectarlo en mis componentes `RegisterComponents` y `LoginComponents` para traer la información que me registraba y poder guardarla en Firebase.

También creé el error 404 como `ErrorComponents` y le agregué una vista `ErrorViews` para manejar mis errores cuando no esté registrado un usuario en la base de datos.

# Actividades realizadas el 9 de agosto

 Inicié el desarrollo del proyecto EduClass. Los pasos realizados fueron:

- Instalé Vue para comenzar el desarrollo de la idea principal: una plataforma con registro de estudiantes y profesores, login y dashboard.
- Instalé Tailwind como librería de CSS para el diseño responsivo y moderno.
- Creé las carpetas `layouts` y `views` para organizar los layouts y las vistas del proyecto.
- Generé los componentes principales que voy a necesitar: `Navbar`, `Form`, `Hero` y `Login`.
- Avancé en la implementación del Navbar y el Hero, que forman la página de inicio.

**Resumen de avances del día:**

- Pasé a código lo pensado previamente en Figma, llevando el diseño a componentes funcionales.
- Implementé el Navbar usando colores decimales como fondo, definí la estructura del menú y agregué funcionalidad al ícono del menú hamburguesa para desplegar/cerrar el menú usando `ref` y lo integré al código.
- Creé el componente del botón de login para reutilizarlo en diferentes secciones de la aplicación.
- Realicé el Dashboard y agregué la función para mostrar usuarios registrados, diferenciando entre estudiantes y profesores.
- Desarrollé el formulario para guardar usuarios registrados usando un objeto reactivo y funciones para validar el login, guardar usuarios y mostrar alertas si el formulario está incompleto.
- Implementé el Hero como una imagen interactiva.
- Integré todo en el layout para que el Navbar se muestre siempre al cambiar de ruta.
- Instalé el enrutador para navegar entre las vistas.
- Añadí validación para guardar usuarios registrados, aunque aún falta resolver completamente la visualización del dashboard tras el registro.

## Animación de texto en el Hero

Se implementó una pequeña animación en el texto del hero para que, al aparecer en pantalla, se escriba letra por letra con un intervalo de 70ms. Esto se logró utilizando el ciclo de vida `onMounted` de Vue, que inicia la animación cuando el componente está en el DOM.

Para ello:
- Se creó una constante con el texto a mostrar y una variable reactiva para el texto animado.
- Se recorrió cada carácter del texto usando un `forEach` y se utilizó `setTimeout` para controlar el tiempo de aparición de cada letra.
- Así, el texto se va mostrando progresivamente, simulando el efecto de escritura.
  
El objetivo de EduClass es facilitar la gestión educativa con una interfaz clara y funcional para estudiantes y profesores.

## Nuevos componentes y rutas de registro

Se creó un nuevo botón llamado `ButtonRegister` para controlar los registros de usuario. Además, se desarrolló un componente de registro y una vista de registro (`RegisterView`) para que el registro de usuarios tenga su propia ruta independiente en la aplicación.

# Dashboard de Profesores y manejo de autenticación

- Creé el componente `DashboardProfComponents` y la vista `DashboardViews`.
- Enlacé ambos en el archivo de rutas para que exista una vista dedicada a los profesores.
- Generé la API en la carpeta `api` y el archivo `profesores.json`, donde agregué 10 profesores de diferentes materias.
- En el componente utilicé el ciclo de vida `onMounted` para que, al mostrarse, cargue la información de la API.
- Usé el token de Vuex para autenticar y verificar si los profesores están disponibles (`disponibilidad: true`).
- Si el usuario está autenticado, llamo a la API con `fetch` y filtro los profesores disponibles.
- Si no está autenticado, se redirige automáticamente a la página de error 401 (autenticación) usando la ruta `/errorauth`.

## Solución de permisos y mejoras en la navegación

- Resolví el problema de permisos en Firestore ajustando las reglas de la base de datos.
- Cambié la condición de autenticación de `true` a `false` para probar el acceso y ver la redirección.
- Registré una cuenta en Firebase con el rol de `admin` y ahora, si el usuario tiene otro rol, se redirige al home.
- Quité el apartado de dashboard del Navbar para visualizar mejor los registros de usuarios.
- Modifiqué las reglas de seguridad en Firestore para permitir el acceso adecuado según el rol.

# Estructura de carpetas del proyecto

```
vue-educlass/
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── vite.config.js
├── public/
│   └── vite.svg
├── src/
│   ├── App.vue
│   ├── main.js
│   ├── style.css
│   ├── assets/
│   │   ├── hero.svg
│   │   ├── logo.svg
│   │   └── vue.svg
│   ├── components/
│   │   ├── ButtonComponents.vue
│   │   ├── ButtonLoginComponents.vue
│   │   ├── ButtonRegisterComponents.vue
│   │   ├── DashboardComponents.vue
│   │   ├── FormComponents.vue
│   │   ├── HeroComponents.vue
│   │   ├── NavbarComponents.vue
│   │   ├── RegisterComponents.vue
│   │   ├── LoginComponents.vue
│   │   ├── ErrorAuthComponents.vue
│   │   ├── ErrorComponents.vue
│   │   ├── DashboardProfComponents.vue
│   ├── layouts/
│   │   └── HeaderLayouts.vue
│   ├── router/
│   │   └── index.js
│   ├── stores/
│   │   ├── form.js
│   │   ├── firebase.js
│   ├── views/
│   │   ├── DashboardViews.vue
│   │   ├── DashboardProfViews.vue
│   │   ├── HomeViews.vue
│   │   ├── LoginViews.vue
│   │   ├── RegisterViews.vue
│   │   ├── ErrorAuthViews.vue
│   │   ├── ErrorViews.vue
│   ├── api/
│   │   └── profesores.json
```