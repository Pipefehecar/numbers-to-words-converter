# 🚀 Frontend - Number to Words Converter

Este proyecto es un frontend desarrollado con **Next.js** que permite a los usuarios convertir números en palabras utilizando una API backend. También muestra las últimas 5 conversiones realizadas y almacenadas en la base de datos.

---

## 🛠️ **Tecnologías Utilizadas**

- ⚛️ **React**: Librería para construir interfaces de usuario.
- ⚡ **Next.js**: Framework de React para aplicaciones web modernas.
- 🎨 **TailwindCSS**: Framework para estilizar componentes de forma eficiente.
- 📦 **Axios**: Cliente HTTP para consumir la API backend.
- 🧪 **React Hook Form**: Manejo eficiente de formularios.
- ✅ **Yup**: Validación de formularios.
- 🧩 **Clsx** y **Tailwind Merge**: Manejo y optimización de clases dinámicas.

---

## 📁 **Estructura del Proyecto**

```plaintext
frontend/
├── src/
│   ├── app/                 # Páginas principales
│   │   └── page.tsx         # Página principal de la aplicación
│   ├── components/          # Componentes reutilizables
│   ├── lib/                 # Configuración de Axios y utilidades
│   ├── hooks/               # Custom hooks
│   └── styles/              # Estilos globales (TailwindCSS)
├── public/                  # Recursos estáticos
├── .eslintrc.json           # Configuración de ESLint
├── tailwind.config.js       # Configuración de TailwindCSS
├── postcss.config.js        # Configuración de PostCSS
├── tsconfig.json            # Configuración de TypeScript
└── package.json             # Dependencias y scripts
```

---

## ⚙️ **Requisitos Previos**

- **Node.js** (v20.x)
- **npm** (v9.x)
- **Backend API** en funcionamiento (`http://localhost:3001`)

---

## ⚡ **Instalación y Configuración**

1. **Clonar el Repositorio**

   ```bash
   git clone https://github.com/Pipefehecar/numbets-to-words-converter
   cd frontend
   ```

2. **Instalar Dependencias**

   ```bash
   npm install
   ```

3. **Configurar el Backend**

   Asegúrate de que el backend esté corriendo en `http://localhost:3001`.

4. **Iniciar el Servidor de Desarrollo**

   ```bash
   npm run dev
   ```

   La aplicación estará disponible en `http://localhost:3000`.

---

## 🌐 **Funcionalidad**

### 📝 **Formulario de Conversión**
- Un campo de entrada para ingresar el número.
- Botón **Convertir** para enviar la solicitud al backend.
- Validación con **Yup** para asegurar que el número:
  - Sea **positivo**.
  - No exceda el valor máximo permitido (1 cuadrillón).

### 🔄 **Resultado de la Conversión**
- El resultado de la conversión se muestra debajo del formulario.

### 📋 **Últimas 5 Conversiones**
- Una lista que muestra las últimas 5 conversiones obtenidas desde el backend.

---

## 🚀 **Scripts Disponibles**

- **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

- **Construir el proyecto para producción**:
   ```bash
   npm run build
   ```

- **Ejecutar en producción**:
   ```bash
   npm start
   ```

- **Verificar errores de linting**:
   ```bash
   npm run lint
   ```

---

## 🔌 **Consumo de Endpoints**

1. **POST /convert** - Convertir número a palabras:
   - Entrada:
     ```json
     {
       "number": 123
     }
     ```
   - Respuesta:
     ```json
     {
       "id": 1,
       "number": 123,
       "words": "one hundred twenty-three"
     }
     ```

2. **GET /conversions** - Obtener últimas 5 conversiones:
   - Respuesta:
     ```json
     [
       { "id": 1, "number": 123, "words": "one hundred twenty-three" },
       { "id": 2, "number": 456, "words": "four hundred fifty-six" }
     ]
     ```

---

## 🎨 **Estilos**

La aplicación utiliza **TailwindCSS** para estilizar componentes con clases reutilizables y optimizadas.

- **Clsx** y **tailwind-merge**: Optimización de clases dinámicas y utilitarias.

---

## ✅ **Validación de Formulario**

La validación de formularios se realiza utilizando **React Hook Form** y **Yup**, asegurando:
- Entradas numéricas positivas.
- Valores dentro del rango permitido por la API.

---

## 🔧 **Mejoras Futuras**

- Implementar manejo de errores más detallado.
- Agregar un loader visual mientras se procesan las solicitudes.
- Internacionalización (i18n) para múltiples idiomas.

---

## 👨‍💻 **Créditos**

Desarrollado por Luis Herrera Cardenas 🚀

---

## 📝 **Licencia**

Este proyecto está bajo la licencia **MIT**.
