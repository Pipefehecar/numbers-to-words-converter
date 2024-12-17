# 🗂️ Proyecto - Number to Words Converter

Este repositorio es un **monorepo** que contiene dos aplicaciones principales:
- 🚀 **Backend**: Desarrollado con **NestJS**, que expone endpoints para convertir números en palabras y almacena las conversiones.
- ⚛️ **Frontend**: Desarrollado con **Next.js**, que permite a los usuarios interactuar con la API para realizar las conversiones.

---

## 📂 **Estructura del Proyecto**

```plaintext
monorepo/
├── backend/       # Backend desarrollado en NestJS
├── frontend/      # Frontend desarrollado en Next.js
└── README.md      # Documentación raíz
```

---

## ⚙️ **Requisitos Previos**

- **Node.js** (v20.x)
- **npm** (v9.x)
- **Docker** (opcional para ejecutar PostgreSQL y backend)

---

## 🚀 **Instalación y Configuración**

1. **Clonar el Repositorio**

   ```bash
   git clone https://github.com/Pipefehecar/numbets-to-words-converter
   cd number-to-words-monorepo
   ```

2. **Configurar el Backend**
   Dirígete a la carpeta **backend** y sigue las instrucciones en su [README](./backend/README.md):
   ```bash
   cd backend
   npm install
   npm run start:dev
   ```

3. **Configurar el Frontend**
   Dirígete a la carpeta **frontend** y sigue las instrucciones en su [README](./frontend/README.md):
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. **Correr Backend y Frontend Simultáneamente** (opcional)
   Si estás en la raíz del monorepo, puedes ejecutar ambos servicios usando **concurrently**:

   ```bash
   npm run dev
   ```
   > Asegúrate de tener configurado el script `dev` en la raíz para ejecutar backend y frontend simultáneamente.

---

## 🌐 **Acceso a la Aplicación**

- **Backend**: `http://localhost:3001`
- **Frontend**: `http://localhost:3000`

---

## 📄 **Documentación de Subproyectos**

- 🔧 [**Backend** - Documentación completa](./backend/README.md)
- 🎨 [**Frontend** - Documentación completa](./frontend/README.md)

---

## 👨‍💻 **Créditos**

Desarrollado por Luis Herrera Cardenas 🚀

---

## 📝 **Licencia**

Este proyecto está bajo la licencia **MIT**.
