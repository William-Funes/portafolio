function mostrar(id) {
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(seccion => {
    seccion.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}

// Mostrar la primera sección (Primer Cómputo) por defecto
window.onload = function() {
  mostrar('c1');
};
