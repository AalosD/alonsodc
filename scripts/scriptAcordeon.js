/*function toggleAccordion(id) {
    let content = document.getElementById(id);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}*/

function toggleAccordion(id) {
    // Solo ejecuta si el viewport es menor a 720px
    if (!window.matchMedia("(max-width: 719px)").matches) {
      return; // Desactiva en pantallas grandes
    }
  
    let content = document.getElementById(id);
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  }