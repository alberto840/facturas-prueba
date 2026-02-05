# FacturacionExamen

This project is an invoice management application built with Angular 18, PrimeNG 17, and TailwindCSS. It simulates a backend using `json-server`, this readme has instructions in English and Spanish.

Este proyecto es una aplicación de gestión de facturas construida con Angular 18, PrimeNG 17 y TailwindCSS. Simula un backend utilizando `json-server`, este readme tiene instrucciones en inglés y español.

---

## 🇺🇸 English

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. Clone the repository (if applicable) or navigate to the project directory.
2. Install dependencies:

```bash
npm install
```

### Running the Application

To run the application properly, you need to start both the mock backend and the Angular frontend.

#### 1. Start the Mock Backend (JSON Server)

This command starts `json-server` on port 3000 to serve the data from `db.json`.

```bash
npm run api
```

#### 2. Start the Angular Development Server

Open a **new terminal** and run:

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Running Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

```bash
ng test
```

### Technologies Used

- **Angular**: v18
- **PrimeNG**: v17
- **TailwindCSS**: v3.4
- **JSON Server**: Mock backend

---

## 🇪🇸 Español

### Prerrequisitos

- Node.js (v18+ recomendado)
- npm

### Instalación

1. Clona el repositorio (si aplica) o navega al directorio del proyecto.
2. Instala las dependencias:

```bash
npm install
```

### Ejecutar la Aplicación

Para ejecutar la aplicación correctamente, necesitas iniciar tanto el backend simulado como el frontend de Angular.

#### 1. Iniciar el Backend Simulado (JSON Server)

Este comando inicia `json-server` en el puerto 3000 para servir los datos de `db.json`.

```bash
npm run api
```

#### 2. Iniciar el Servidor de Desarrollo de Angular

Abre una **nueva terminal** y ejecuta:

```bash
ng serve
```

Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

### Ejecutar Pruebas Unitarias

Ejecuta `ng test` para correr las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

```bash
ng test
```

### Tecnologías Utilizadas

- **Angular**: v18
- **PrimeNG**: v17
- **TailwindCSS**: v3.4
- **JSON Server**: Backend simulado
