# Technical Smart Factory

Este proyecto es una aplicación desarrollada con **React**, **TypeScript** y **Vite** para la gestión y monitoreo de una fábrica inteligente. Incluye funcionalidades como visualización de datos en tiempo real, gráficos interactivos y navegación dinámica.

---

## Tecnologías utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **Vite**: Herramienta de construcción rápida para proyectos modernos de frontend.
- **React Router**: Manejo de rutas dinámicas y navegación.
- **Recharts**: Biblioteca para gráficos interactivos.
- **Axios**: Cliente HTTP para consumir APIs.
- **SASS**: Preprocesador CSS para estilos avanzados.

---

## Estructura del proyecto

El proyecto sigue una arquitectura modular y organizada:

```
src/
├── app/
│   ├── domain/                # Tipos y modelos compartidos
│   ├── infrastructure/        # Conexiones y repositorios
│   └── presentation/          # Componentes y páginas de la aplicación
│       ├── pages/
│       │   ├── home/          # Página principal
│       │   └── production-monitor/ # Página de monitoreo de producción
├── common/
│   ├── infrastructure/        # Conexiones HTTP y utilidades
│   ├── presentation/          # Componentes reutilizables (Loader, NotFound, etc.)
│   └── scss/                  # Estilos globales
├── hooks/                     # Hooks personalizados
├── router/                    # Configuración de rutas
└── main.tsx                   # Punto de entrada principal
```

---

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-repositorio/technical-smart-factory.git
   cd technical-smart-factory
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre la aplicación en tu navegador en [http://localhost:5173](http://localhost:5173).

---

## Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Genera una versión optimizada para producción.
- `npm run preview`: Previsualiza la aplicación después de construirla.
- `npm run lint`: Ejecuta el linter para verificar errores de código.

---

### Home Page

Página principal que muestra un resumen de las áreas de la fábrica.

- **Ruta**: `/home`
- **Componentes**: `HomePage`, `Card`

### Production Monitor

Página para monitorear unidades de trabajo y métricas clave.

- **Ruta**: `/production-monitor/:id`
- **Componentes**: `WorkunitCard`, `ChartSection`

---

## Estilos

El proyecto utiliza **SASS** para organizar y reutilizar estilos. Los estilos globales están definidos en `src/common/scss/`.

---

## API

El proyecto consume datos desde un endpoint remoto utilizando `Axios`. La configuración de las llamadas HTTP está centralizada en `src/common/infrastructure/connection/Http.ts`.

Ejemplo de una llamada a la API:

```ts
const getDataApi = async () => {
  const response = await axios.get('/api/data')
  return response.data
}
```

---

## Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).
