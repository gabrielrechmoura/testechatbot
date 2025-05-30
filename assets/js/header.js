const currentPath = window.location.pathname;

// Normaliza o caminho atual: trata / e /index.html como o mesmo
const normalizedPath =
  currentPath === '/testechatbot/' || currentPath === '/testechatbot'
    ? '/testechatbot/index.html'
    : currentPath;

document.querySelectorAll("header nav a").forEach(link => {
  const linkPath = new URL(link.href).pathname;

  // Também normaliza o link: trata / e /index.html como o mesmo
  const normalizedLinkPath =
    linkPath === '/testechatbot/' || linkPath === '/testechatbot'
      ? '/testechatbot/index.html'
      : linkPath;

  if (normalizedLinkPath === normalizedPath) {
    link.classList.add("ativo");
  }
});
