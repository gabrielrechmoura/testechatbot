const currentPath = window.location.pathname.replace(/\/(index\.html)?$/, "").toLowerCase();

document.querySelectorAll("header nav a").forEach(link => {
  const linkPath = new URL(link.href).pathname.replace(/\/(index\.html)?$/, "").toLowerCase();

  if (currentPath === linkPath) {
    link.classList.add("ativo");
  }
});
