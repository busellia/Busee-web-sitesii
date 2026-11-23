# Busenur Doğan · Kişisel Web Sitesi

Busenur Doğan'ın tek sayfalık kişisel sitesi. Saf HTML, CSS ve JavaScript ile yazıldı; kurulum, paket ya da derleme gerekmez. Dosyaları bir tarayıcıda açmak yeterli.

**Canlı adres:** https://busellia.github.io/Busee-web-sitesii/ (GitHub Pages açıldıktan sonra)

---

## Klasör yapısı

```
.
├── index.html          → Ana sayfa (tüm metinler burada)
├── 404.html            → Bulunamayan sayfalar için hata sayfası
├── css/
│   └── style.css       → Tüm tasarım: renkler, yazı tipleri, düzen
├── js/
│   └── main.js         → Kaydırınca beliren animasyon, otomatik yıl
├── assets/
│   ├── favicon.svg     → Tarayıcı sekmesindeki küçük ikon
│   └── images/         → Fotoğraflar buraya
├── .nojekyll           → GitHub Pages'in dosyaları olduğu gibi yayınlaması için (silme)
└── README.md           → Bu dosya
```

## Sayfadaki bölümler

`index.html` içinde sırasıyla:

| Bölüm | HTML'de nerede | Ne var |
|---|---|---|
| Menü | `<nav>` | Logo (Buse) ve bölüm linkleri |
| Karşılama | `<header class="hero" id="anasayfa">` | 🧸, slogan, "Merhaba, ben Busenur" ve kısa tanıtım |
| En Sevdiğim Şeyler | `<section id="kesfet">` | 4 kart: Yemek Yemek, Yemek Yapmak, Gezmek, Müzik Dinlemek |
| Hakkımda | `<section id="hakkimda">` | İsim ve hakkımda yazısı |
| İletişim | `<section id="iletisim">` | E-posta butonu |
| Alt bilgi | `<footer>` | Site adı ve yıl (yıl otomatik güncellenir) |

## Nasıl düzenlenir?

### Metinleri değiştirmek
`index.html` dosyasını aç, değiştirmek istediğin yazıyı bul ve düzelt. Etiketlere (`<h1>`, `<p>` gibi) dokunmadan sadece aradaki yazıyı değiştirmen yeterli.

### Yeni kart eklemek
`<div class="cards">` içindeki bir kartı kopyalayıp altına yapıştır:

```html
<div class="card reveal">
  <div class="icon">📚</div>
  <h3>Kitap Okumak</h3>
  <p>Kısa bir açıklama.</p>
</div>
```

### Instagram / başka bir link eklemek
`<div class="socials">` içine yeni bir satır ekle:

```html
<a href="https://instagram.com/KULLANICI_ADI" target="_blank">📸 Instagram</a>
```

### Fotoğraf eklemek
1. Fotoğrafı `assets/images/` klasörüne koy (ör. `profil.jpg`).
2. `index.html` içinde emojiyi fotoğrafla değiştir. Örneğin Hakkımda kısmında:

```html
<div class="about-img"><img src="assets/images/profil.jpg" alt="Busenur Doğan"></div>
```

3. Fotoğrafın kutuyu düzgün doldurması için `css/style.css` dosyasının sonuna ekle:

```css
.about-img img, .avatar img { width: 100%; height: 100%; object-fit: cover; border-radius: inherit; }
```

### Renkleri değiştirmek
`css/style.css` dosyasının en üstündeki `:root` kısmında renkler tanımlı. Örneğin `--accent` ana mor, `--accent-2` pembe renktir. Buradaki değeri değiştirmek bütün sitede rengi değiştirir. Karanlık mod renkleri hemen altındaki `@media (prefers-color-scheme: dark)` kısmında.

## Bilgisayarda görmek
`index.html` dosyasına çift tıkla, tarayıcıda açılır. Değişiklik yaptıktan sonra sayfayı yenilemen yeterli.

## GitHub Pages ile yayınlamak

Bu ayarı **repo sahibi hesabı (busellia)** yapabilir:

1. https://github.com/busellia/Busee-web-sitesii/settings/pages adresine git.
2. **Source:** "Deploy from a branch" seç.
3. **Branch:** `main`, klasör: `/ (root)` seç ve **Save**'e bas.
4. 1-2 dakika sonra sayfanın üstünde "Your site is live at …" yazar. Site o adreste açılır.

Bundan sonra `main` branch'ine her push'ta site otomatik güncellenir.

**Özel alan adı (domain) bağlamak için:** aynı sayfadaki "Custom domain" kutusuna alan adını yaz ve Save'e bas, sonra alan adını aldığın yerde DNS ayarlarını GitHub'ın gösterdiği şekilde yap.

### Site 404 veriyorsa
- Pages ayarının yukarıdaki gibi açık olduğundan emin ol.
- Ana sayfa dosyasının adı tam olarak `index.html` olmalı (küçük harf, Türkçe "İ" değil).
- Değişiklikten sonra 1-2 dakika bekle, sonra sayfayı yenile.
