# Midway GPT – Frontend

Midway GPT Frontend es una aplicación web construida con **Angular** que le da vida a la experiencia visual de Midway GPT. Está pensada para ser rápida, accesible y fácil de usar, con una interfaz moderna que hace que interactuar con la inteligencia artificial sea simple y agradable.

---

## 🚀 Tecnologías utilizadas

- **Angular** – En su versión 18 con todos sus poderes
- **Angular Material** – Para los componentes UI accesibles y bien integrados con Angular
- **TailwindCSS** – Para desarrollar interfaces de una manera veloz y precisa
- **DaisyUI** – Componentes estilizados sobre Tailwind para prototipado rápido

---

## 🎨 Paleta de colores

| Nombre de variable         | Código HEX                    | Descripción                    |
|---------------------------|-------------------------------|--------------------------------|
| `--color-main`            | `#d371dd`                     | Color principal de marca       |
| `--color-primary`         | `#4557da`                     | Color de acción principal      |
| `--color-warn`            | `#e31629`                     | Indicador de advertencia       |
| `--color-black`           | `#3f3e45`                     | Color neutro oscuro            |
| `--color-stroke`          | `#d7d7d7`                     | Bordes y contornos sutiles     |
| `--color-gray-primary`    | `#f9f9f9`                     | Fondo general claro            |
| `--color-gray-stroke`     | `rgb(224 224 224 / 71%)`      | Bordes con transparencia       |
| `--color-hover-light`     | `#e3e3e3`                     | Hover para elementos claros    |
| `--sidebar-primary-light` | `var(--color-gray-primary)`   | Fondo de la barra lateral      |

---

## 📦 Biblioteca interna de componentes – `@midway-ui`

Midway GPT Frontend cuenta con una biblioteca interna personalizada para la reutilización de componentes a lo largo de toda la aplicación. Esta biblioteca se encuentra ubicada en:

- `src/app/@midway-ui`

Esta librería concentra todos los **componentes globales reutilizables** utilizados a lo largo de la aplicación, permitiendo una experiencia visual coherente, un mantenimiento más ágil y mayor escalabilidad.

| Componente | Descripción                                                                 |
|------------|------------------------------------------------------------------------------|
| `avatar`   | Componente para mostrar la imagen de perfil del usuario o su inicial         |
| `button`   | Botón universal con soporte para variantes (primario, secundario, icon, etc.)|
| `input`    | Incluye directivas personalizadas para validación, errores y estilos         |
| `text`     | Controla todos los tamaños y estilos de tipografía utilizados en la app      |

> 🔧 Esta librería fue desarrollada 100% in-house para garantizar organización, desacoplamiento y facilidad de mantenimiento.

## 🛠️ Instalación del proyecto

```bash
# Clona el repositorio
git clone https://github.com/tuusuario/midway_gpt_frontend.git

# Accede al directorio
cd midway_gpt_frontend

# Instala las dependencias
npm install

# Ejecuta el servidor de desarrollo
ng serve
```

## 🤝 ¡Colabora con Midway GPT!

Este proyecto está abierto a ideas, mejoras y contribuciones. Si tienes propuestas para nuevos componentes, optimizaciones de rendimiento o mejoras en la experiencia de usuario, ¡eres más que bienvenido!

### ¿Cómo contribuir?

1. Haz un fork del repositorio
2. Crea una rama con tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios y haz commit (`git commit -m 'feat(modulo de la nueva funcionalidad): descripción breve de los cambios'`)
4. Sube los cambios a tu rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request explicando tus aportes

> 🧠 Este proyecto valora el código limpio, accesible y documentado.

Si deseas contactarme directamente o conversar sobre ideas, puedes escribirme en [Twitter (X)](https://x.com/so_tic0).

¡Gracias por tomarte el tiempo de pasar por aquí! 🤝🫂

