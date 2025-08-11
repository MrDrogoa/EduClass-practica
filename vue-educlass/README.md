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

El objetivo de EduClass es facilitar la gestión educativa con una interfaz clara y funcional para estudiantes y profesores.


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
│   │   ├── DashboardComponents.vue
│   │   ├── FormComponents.vue
│   │   ├── HeroComponents.vue
│   │   └── NavbarComponents.vue
│   ├── layouts/
│   │   └── HeaderLayouts.vue
│   ├── router/
│   │   └── index.js
│   ├── stores/
│   │   └── form.js
│   ├── views/
│   │   ├── DashboardViews.vue
│   │   ├── HomeViews.vue
│   │   └── LoginViews.vue
```