const currentPath = window.location.pathname;

// Normaliza o caminho atual removendo a barra final, se existir
const normalizedPath = currentPath.endsWith('/') && currentPath.length > 1
  ? currentPath.slice(0, -1)
  : currentPath;

document.querySelectorAll("header nav a").forEach(link => {
  const linkPath = new URL(link.href).pathname;

  // Normaliza o caminho do link removendo a barra final, se existir
  const normalizedLinkPath = linkPath.endsWith('/') && linkPath.length > 1
    ? linkPath.slice(0, -1)
    : linkPath;

  if (normalizedLinkPath === normalizedPath) {
    link.classList.add("ativo");
  }
});
