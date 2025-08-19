const titulo = document.querySelector("h1");

if (titulo) {
  titulo.addEventListener("click", () => {
    titulo.textContent = "¡Has hechosss click en mí! 🎉";
  });
}
