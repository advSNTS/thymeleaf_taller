# Taller Thymeleaf — Formulario de Contacto

Aplicación web desarrollada con Spring Boot y Thymeleaf que implementa un formulario de contacto funcional con validación en cliente y persistencia en base de datos.

---

## Tecnologías utilizadas

- **Java** — Lenguaje principal del backend
- **Spring Boot** — Framework base de la aplicación
- **Spring MVC** — Patrón de arquitectura utilizado
- **Thymeleaf** — Motor de plantillas para el frontend
- **Lombok** — Reducción de código boilerplate en entidades
- **H2** — Base de datos en memoria para pruebas
- **JavaScript** — Validación del formulario en el cliente
- **HTML/CSS** — Estructura y estilos de la interfaz
- **Docker** — Despliegue y distribución del proyecto

---

## Características principales

- **Formulario de contacto completo:** El usuario puede diligenciar y enviar un formulario con nombre, email, teléfono, asunto, tipo de usuario, referente y mensaje. Los datos se persisten en la base de datos H2.
- **Validación en cliente:** El formulario valida en tiempo real campos como email, teléfono, longitud del mensaje (mínimo 40, máximo 400 caracteres) y aceptación de términos, usando JavaScript puro.
- **Contador de caracteres dinámico:** El campo de mensaje muestra en rojo cuántos caracteres faltan para el mínimo, y en verde el conteo actual una vez superado.
- **Arquitectura MVC:** El proyecto sigue el patrón Modelo-Vista-Controlador con Spring MVC y Thymeleaf.
- **Fragmentos reutilizables:** El `header` y el `footer` se definen como fragmentos de Thymeleaf y se reutilizan en todas las vistas, evitando duplicación de código.
- **Consola H2:** La base de datos es accesible visualmente a través de la consola web de H2.

---

## Guía de instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/advSNTS/thymeleaf_taller
cd thymeleaf_taller
```

### 2. Prerrequisitos

Solo necesitas tener **Docker** instalado y en ejecución en tu máquina (Docker Desktop o Docker Engine).

### 3. Despliegue con Docker

**A. Construir la imagen:**
```bash
docker build -t taller .
```

**B. Ejecutar el contenedor:**
```bash
docker run -p 8080:8080 taller
```

La aplicación quedará disponible en `http://localhost:8080`.

---

## Acceso a la base de datos (H2)

Una vez la aplicación esté corriendo, puedes acceder a la consola de H2 en:
```
http://localhost:8080/h2-console
```

En el campo **JDBC URL** usa:
```
jdbc:h2:file:/app/data/testdb
```

Desde allí puedes visualizar y consultar los registros guardados por el formulario de contacto.

---