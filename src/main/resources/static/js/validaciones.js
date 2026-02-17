document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const mensajeInput = document.getElementById("mensaje");
    const charCount = document.getElementById("char-count");

    // --- 1. Validación en tiempo real del contador de caracteres ---
    mensajeInput.addEventListener("input", () => {
        const longitud = mensajeInput.value.length;
        if (longitud < 20) {
            charCount.textContent = `Faltan ${20 - longitud} caracteres`;
            charCount.style.color = "red";
        } else if (longitud > 400) {
            charCount.textContent = `Te has pasado por ${longitud - 400} caracteres`;
            charCount.style.color = "red";
        } else {
            charCount.textContent = `${longitud}/400 caracteres`;
            charCount.style.color = "green";
        }
    });

    // --- 2. Validación al enviar el formulario ---
    form.addEventListener("submit", (e) => {
        let esValido = true;

        document.querySelectorAll(".error-msg").forEach(el => el.textContent = "");

        const nombre = document.getElementById("nombre").value.trim();
        if (nombre.length < 3) {
            mostrarError("nombre", "Mínimo 3 caracteres (no solo espacios).");
            esValido = false;
        }

        const email = document.getElementById("email").value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mostrarError("email", "Ingresa un correo válido (debe contener @ y un punto después).");
            esValido = false;
        }

        const telefono = document.getElementById("telefono").value;
        const telRegex = /^\d{7,15}$/;
        if (!telRegex.test(telefono)) {
            mostrarError("telefono", "Solo números (entre 7 y 15 dígitos).");
            esValido = false;
        }

        const asunto = document.getElementById("asunto").value.trim();
        if (asunto === "") {
            mostrarError("asunto", "El asunto es obligatorio.");
            esValido = false;
        }

        const mensaje = mensajeInput.value.length;
        if (mensaje < 20 || mensaje > 400) {
            mostrarError("mensaje", "El mensaje debe tener entre 20 y 400 caracteres.");
            esValido = false;
        }
        
        if (!esValido) {
            e.preventDefault();
            alert("Por favor, revisa los campos marcados en rojo.");
        }
    });

    function mostrarError(id, mensaje) {
        const errorSpan = document.getElementById(`error-${id}`);
        if (errorSpan) {
            errorSpan.textContent = mensaje;
            errorSpan.style.color = "red";
            errorSpan.style.fontSize = "0.8rem";
        }
    }
});