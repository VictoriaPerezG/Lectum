document.addEventListener("DOMContentLoaded", () => {
    const lista = document.getElementById("lista-tareas");
    const input = document.getElementById("nueva-tarea");
    const boton = document.getElementById("agregar-tarea");

    // Función para agregar una tarea
    const agregarTarea = (texto) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        // Crear el elemento de texto con opción de tachado al hacer clic
        const span = document.createElement("span");
        span.textContent = texto;
        span.style.cursor = "pointer";
        span.addEventListener("click", () => {
            span.style.textDecoration = span.style.textDecoration === "line-through" ? "none" : "line-through";
        });

        // Botón de eliminar
        const btnEliminar = document.createElement("button");
        btnEliminar.className = "btn btn-sm btn-danger";
        btnEliminar.textContent = "Eliminar";
        btnEliminar.addEventListener("click", () => {
            lista.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(btnEliminar);
        lista.appendChild(li);
    };

    // Evento al presionar el botón de agregar
    boton.addEventListener("click", () => {
        const texto = input.value.trim();
        if (texto !== "") {
            agregarTarea(texto);
            input.value = "";
            input.focus();
        }
    });
});

