# 🚀 Backend - Number to Words Converter

Este proyecto es un backend desarrollado en **NestJS** que expone endpoints para convertir números en palabras utilizando una **API SOAP externa**. Además, almacena las conversiones en una base de datos **PostgreSQL** y permite consultar las últimas 5 conversiones realizadas.

---

## 🛠️ **Tecnologías Utilizadas**

- 🧩 **NestJS**: Framework para aplicaciones Node.js.
- 🛢️ **Sequelize**: ORM para manejar la base de datos PostgreSQL.
- 🗄️ **PostgreSQL**: Base de datos relacional.
- 🛜 **SOAP**: Integración con una API SOAP externa.
- 🔍 **Zod**: Validación robusta de datos de entrada.
- 🧪 **Jest**: Framework para realizar pruebas unitarias, de integración y E2E.

---

## 📁 **Estructura del Proyecto**

```plaintext
backend/
├── src/
│   ├── controllers/         # Controladores HTTP
│   ├── services/            # Lógica de negocio
│   ├── providers/           # Integración con la API SOAP externa
│   ├── models/              # Modelos de Sequelize
│   ├── repositories/        # Repositorio para la base de datos
│   ├── dto/                 # Schemas y DTOs para validación
│   ├── pipes/               # Pipes para validación con Zod
│   ├── app.module.ts        # Módulos de NestJS
│   └── main.ts              # Punto de entrada principal
├── test/
│   ├── unit/                # Pruebas unitarias
│   ├── integration/         # Pruebas de integración
│   └── e2e/                 # Pruebas end-to-end
├── .env                     # Variables de entorno
├── jest.config.js           # Configuración de Jest
├── package.json             # Dependencias y scripts
└── README.md                # Documentación del proyecto
```

---

## ⚙️ **Requisitos Previos**

- **Node.js** (v20.x)
- **PostgreSQL** (v12 o superior)
- 🐳 **Docker** (opcional para entorno de desarrollo)

---

## ⚡ **Configuración del Proyecto**

1. **Clonar el Repositorio**

   ```bash
   git clone https://github.com/Pipefehecar/numbers-to-words-converter
   cd backend
   ```

2. **Instalar Dependencias**

   ```bash
   npm install
   ```

3. **Configurar Variables de Entorno**

   Crea un archivo `.env` en la raíz con la siguiente configuración:

   ```plaintext
   PORT=3001
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=converter_user
   DB_PASSWORD=converter_password
   DB_DATABASE=converter
   SOAP_WSDL_URL=https://example.com/soap?wsdl
   ```

4. **Ejecutar la Base de Datos con Docker** (opcional)

   ```bash
   docker-compose up -d 
   ```
    O docker-compose de desarrollo construido con volumenes para ejecucion mas rapida en desarrollo
     ```bash
   docker-compose -f docker-compose.dev.yml up -d 
   ```

5. **Iniciar el Servidor en Desarrollo**

   ```bash
   nest start --watch
   ```

---

## 🌐 **Endpoints Disponibles**

### 🔄 **1. Convertir un Número a Palabras**

- **Método**: `POST`
- **URL**: `/convert`
- **Entrada**:
  ```json
  {
    "number": 123
  }
  ```
- **Respuesta**:
  ```json
  {
    "id": 1,
    "number": 123,
    "words": "one hundred twenty-three"
  }
  ```
- **Validaciones**:
  - El número debe ser **positivo**.
  - Máximo permitido: **un cuadrillón** (1e15).

### 📋 **2. Obtener las Últimas 5 Conversiones**

- **Método**: `GET`
- **URL**: `/conversions`
- **Respuesta**:
  ```json
  [
    { "id": 1, "number": 123, "words": "one hundred twenty-three" },
    { "id": 2, "number": 456, "words": "four hundred fifty-six" }
  ]
  ```

---

## 🧪 **Pruebas**

### ✅ **Ejecutar Pruebas Unitarias e Integración**

```bash
npm run test
```

### 🚀 **Ejecutar Pruebas End-to-End (E2E)**

```bash
npm run test:e2e
```

### 📊 **Cobertura de Pruebas**

```bash
npm run test:cov
```

---

## 🔒 **Mejoras de Seguridad**

- **CORS** habilitado de forma controlada.
- Validación robusta con **Zod** para prevenir entradas inválidas.

---

## 🐳 **Ejecución con Docker**

Puedes ejecutar el backend junto con PostgreSQL usando **Docker Compose**:
Docker de desarrollo con volumenes para construccion agil de las imagenes en desarrollo

```bash
docker-compose up --build o docker-compose -f docker-compose.dev.yml up --build 
```

Esto levantará:
- La base de datos PostgreSQL en el puerto `5432`.
- El backend en el puerto `3001`.

---

## 👨‍💻 **Créditos**

Desarrollado por Luis Herrera Cardenas 🚀
