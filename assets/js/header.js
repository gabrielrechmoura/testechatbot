const currentPath = window.location.pathname.replace(/\/$/, ''); // remove barra final

document.querySelectorAll("header a").forEach(link => {
  const linkPath = new URL(link.href).pathname.replace(/\/$/, '');

  if (linkPath === currentPath) {
    link.classList.add("ativo");
  }
});
