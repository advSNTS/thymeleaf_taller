document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formularioContacto");
    const mensajeInput = document.getElementById("mensaje");
    const contadorCaracteres = document.getElementById("contador-caracteres");
    const mensajeExito = document.getElementById("mensaje-exito");

    const MIN = 40;
    const MAX = 400;

    mensajeInput.addEventListener("input", () => {
        const longitud = mensajeInput.value.length;

        if (longitud < MIN) {
            contadorCaracteres.textContent = `Faltan ${MIN - longitud} caracteres para el mínimo.`;
            contadorCaracteres.style.color = "red";
        } else if (longitud > MAX) {
            contadorCaracteres.textContent = `Te has pasado por ${longitud - MAX} caracteres.`;
            contadorCaracteres.style.color = "red";
        } else {
            contadorCaracteres.textContent = `${longitud}/${MAX} caracteres.`;
            contadorCaracteres.style.color = "green";
        }
    });


    form.addEventListener("submit", (e) => {
        e.preventDefault();

        mensajeExito.style.display = "none";
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
        } else if (longitudMensaje < MIN) {
            mostrarError("mensaje", `El mensaje debe tener mínimo ${MIN} caracteres. Faltan ${MIN - longitudMensaje}.`);
            esValido = false;
        } else if (longitudMensaje > MAX) {
            mostrarError("mensaje", `El mensaje no puede superar los ${MAX} caracteres.`);
            esValido = false;
        }

        // Términos
        const terminos = document.getElementById("terminos").checked;
        if (!terminos) {
            mostrarError("terminos", "Debes aceptar los términos y condiciones.");
            esValido = false;
        }

        if (esValido) {
            // Mostrar mensaje de éxito
            mensajeExito.style.display = "block";
            mensajeExito.scrollIntoView({ behavior: "smooth" });

            form.reset();
            contadorCaracteres.textContent = `Faltan ${MIN} caracteres para el mínimo.`;
            contadorCaracteres.style.color = "";
        }
    });

    function mostrarError(id, mensaje) {
        const errorSpan = document.getElementById(`error-${id}`);
        if (errorSpan) errorSpan.textContent = mensaje;
    }
});