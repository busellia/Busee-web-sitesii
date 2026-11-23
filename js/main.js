// Kaydırınca bölümlerin yumuşakça belirmesi
const gozlemci = new IntersectionObserver((girdiler) => {
  girdiler.forEach((g) => {
    if (g.isIntersecting) {
      g.target.classList.add('show');
      gozlemci.unobserve(g.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => gozlemci.observe(el));

// Alt bilgideki yılı otomatik güncelle
const yil = document.getElementById('yil');
if (yil) yil.textContent = new Date().getFullYear();
