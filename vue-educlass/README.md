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
│   │   ├── ErrorComponents.vue
│   ├── layouts/
│   │   └── HeaderLayouts.vue
│   ├── router/
│   │   └── index.js
│   ├── stores/
│   │   ├── form.js
│   │   ├── firebase.js
│   ├── views/
│   │   ├── DashboardViews.vue
│   │   ├── HomeViews.vue
│   │   ├── LoginViews.vue
│   │   ├── RegisterViews.vue
│   │   ├── ErrorViews.vue
```
## Animación de texto en el Hero

Se implementó una pequeña animación en el texto del hero para que, al aparecer en pantalla, se escriba letra por letra con un intervalo de 70ms. Esto se logró utilizando el ciclo de vida `onMounted` de Vue, que inicia la animación cuando el componente está en el DOM.

Para ello:
- Se creó una constante con el texto a mostrar y una variable reactiva para el texto animado.
- Se recorrió cada carácter del texto usando un `forEach` y se utilizó `setTimeout` para controlar el tiempo de aparición de cada letra.
- Así, el texto se va mostrando progresivamente, simulando el efecto de escritura.
  
El objetivo de EduClass es facilitar la gestión educativa con una interfaz clara y funcional para estudiantes y profesores.

## Nuevos componentes y rutas de registro

Se creó un nuevo botón llamado `ButtonRegister` para controlar los registros de usuario. Además, se desarrolló un componente de registro y una vista de registro (`RegisterView`) para que el registro de usuarios tenga su propia ruta independiente en la aplicación.
