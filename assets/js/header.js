const currentPath = window.location.pathname;

// Trata a raiz (/) ou /index.html como a mesma coisa
const normalizedPath =
  currentPath.endsWith('/') || currentPath.endsWith('/index.html')
    ? '/testechatbot/index.html'
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
