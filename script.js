(() => {
  const root = document.documentElement;
  const storedTheme = localStorage.getItem("portfolio-theme");
  if (storedTheme === "light") root.classList.remove("dark");
  if (storedTheme === "dark") root.classList.add("dark");

  document.querySelectorAll(".theme-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      root.classList.toggle("dark");
      localStorage.setItem("portfolio-theme", root.classList.contains("dark") ? "dark" : "light");
    });
  });

  const menu = document.querySelector(".mobile-nav");
  const menuButton = document.querySelector(".menu-toggle");
  menuButton?.addEventListener("click", () => {
    const open = menu?.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(Boolean(open)));
  });

  document.querySelectorAll(".mobile-nav a").forEach(link => {
    link.addEventListener("click", () => {
      menu?.classList.remove("open");
      menuButton?.setAttribute("aria-expanded", "false");
    });
  });

  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = lightbox?.querySelector("img");
  document.querySelectorAll("[data-lightbox]").forEach(btn => {
    btn.addEventListener("click", () => {
      if (!lightbox || !lightboxImg) return;
      lightboxImg.src = btn.dataset.lightbox;
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
    });
  });
  const closeLightbox = () => {
    lightbox?.classList.remove("open");
    lightbox?.setAttribute("aria-hidden", "true");
  };
  lightbox?.querySelector(".lightbox-close")?.addEventListener("click", closeLightbox);
  lightbox?.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });
})();