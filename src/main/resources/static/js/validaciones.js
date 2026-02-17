document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formularioContacto");
    const mensajeInput = document.getElementById("mensaje");
    const contadorCaracteres = document.getElementById("contador-caracteres"); // ← ID corregido

    // --- 1. Contador de caracteres en tiempo real ---
    mensajeInput.addEventListener("input", () => {
        const longitud = mensajeInput.value.length;

        if (longitud < 20) {
            contadorCaracteres.textContent = `Faltan ${20 - longitud} caracteres para el mínimo.`;
            contadorCaracteres.style.color = "red";
        } else if (longitud > 400) {
            contadorCaracteres.textContent = `Te has pasado por ${longitud - 400} caracteres.`;
            contadorCaracteres.style.color = "red";
        } else {
            contadorCaracteres.textContent = `${longitud}/400 caracteres.`;
            contadorCaracteres.style.color = "green";
        }
    });

    // --- 2. Validación al enviar ---
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Limpiar errores anteriores (clase corregida a error-mensaje)
        document.querySelectorAll(".error-mensaje").forEach(el => el.textContent = "");

        let esValido = true;

        // Nombre
        const nombre = document.getElementById("nombre").value.trim();
        if (nombre === "" || nombre.length < 3) {
            mostrarError("nombre", "Campo obligatorio. Mínimo 3 caracteres (no solo espacios).");
            esValido = false;
        }

        // Email
        const email = document.getElementById("email").value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            mostrarError("email", "El correo electrónico es obligatorio.");
            esValido = false;
        } else if (!emailRegex.test(email)) {
            mostrarError("email", "Ingresa un correo válido (debe contener @ y un punto después).");
            esValido = false;
        }

        // Teléfono
        const telefono = document.getElementById("telefono").value.trim();
        const telRegex = /^\d{7,15}$/;
        if (telefono === "") {
            mostrarError("telefono", "El teléfono es obligatorio.");
            esValido = false;
        } else if (!telRegex.test(telefono)) {
            mostrarError("telefono", "Solo números, entre 7 y 15 dígitos.");
            esValido = false;
        }

        // Asunto
        const asunto = document.getElementById("asunto").value;
        if (asunto === "") {
            mostrarError("asunto", "Por favor, selecciona un asunto.");
            esValido = false;
        }

        // Mensaje
        const longitudMensaje = mensajeInput.value.trim().length;
        if (longitudMensaje === 0) {
            mostrarError("mensaje", "El mensaje es obligatorio.");
            esValido = false;
        } else if (longitudMensaje < 20) {
            mostrarError("mensaje", `El mensaje debe tener mínimo 20 caracteres. Faltan ${20 - longitudMensaje}.`);
            esValido = false;
        } else if (longitudMensaje > 400) {
            mostrarError("mensaje", `El mensaje no puede superar los 400 caracteres.`);
            esValido = false;
        }

        // Términos y condiciones
        const terminos = document.getElementById("terminos").checked;
        if (!terminos) {
            mostrarError("terminos", "Debes aceptar los términos y condiciones.");
            esValido = false;
        }

        if (esValido) {
            alert("¡Mensaje enviado correctamente!");
            form.reset();
            contadorCaracteres.textContent = "Faltan 20 caracteres para el mínimo.";
            contadorCaracteres.style.color = "";
        }
    });

    // --- Función auxiliar para mostrar errores ---
    function mostrarError(id, mensaje) {
        const errorSpan = document.getElementById(`error-${id}`);
        if (errorSpan) {
            errorSpan.textContent = mensaje;
        }
    }
});