

document.getElementById("form-testimonio").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario

    // Obtener los valores del formulario
    var nombre = document.getElementById("nombre").value;
    var testimonio = document.getElementById("testimonio").value;

    // Crear un nuevo elemento de testimonio
    var testimonioHTML = `
        <div class="testimonial" style="background-color: #fff; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); padding: 30px;">
            <blockquote class="testimonial-text" style="font-style: italic; font-size: 18px; color: #666; margin-bottom: 20px;">
                "${testimonio}"
            </blockquote>
            <p class="testimonial-author" style="font-weight: bold; font-size: 16px; color: #333;">- ${nombre}</p>
        </div>
    `;

    // Agregar el nuevo testimonio al DOM
    document.getElementById("testimonios-grid").insertAdjacentHTML("beforeend", testimonioHTML);

    // Limpiar el formulario
    document.getElementById("nombre").value = "";
    document.getElementById("testimonio").value = "";
});