# Proyecto Spring Boot con Formulario HTML y CORS

Este proyecto demuestra cómo crear y consumir un formulario desde un front-end HTML utilizando un back-end con Spring Boot, con soporte para CORS.

## Descripción

El proyecto se divide en dos partes:
1. **Backend**: Un servidor Spring Boot que maneja las solicitudes del formulario.
2. **Frontend**: Una página HTML con un formulario que envía datos al backend.

El backend está configurado para permitir solicitudes CORS desde el origen del frontend.

## Tecnologías Utilizadas

- **Backend**:
  - Java 11+
  - Spring Boot
  - Maven

- **Frontend**:
  - HTML
  - CSS
  - JavaScript

## Estructura del Proyecto

### Backend

```plaintext
spring-boot-backend
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── form
│   │   │           └── test
│   │   │               ├── FormtestApplication.java
│   │   │               └── controller
│   │   │                   └── FormController.java
│   │   └── resources
│   │       └── application.properties
└── pom.xml
