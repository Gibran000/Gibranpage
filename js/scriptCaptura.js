document.getElementById("btnGuardar").addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;

    document.getElementById("resultado").textContent =
        `Hola ${nombre}, tienes ${edad} años.`;
});
