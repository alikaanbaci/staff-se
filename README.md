# staff-se

Docusaurus ile inşa edilmiş, lacivert temalı, Türkçe/İngilizce (i18n) destekli
mühendislik blogu ve kişisel portföy sitesi.

## Kurulum ve geliştirme

```bash
npm install
npm start
```

`npm start`, http://localhost:3000/staff-se/ adresinde geliştirme sunucusunu
açar (varsayılan dil: Türkçe). İngilizce sürümü geliştirme sırasında görmek
için:

```bash
npm start -- --locale en
```

## Build

```bash
npm run build      # tüm diller için statik dosyalar (build/) üretir
npm run typecheck  # TypeScript tip kontrolü
npm run serve       # build çıktısını yerelde servis eder
```

## Proje yapısı

```
docusaurus.config.ts   Site yapılandırması (başlık, navbar, footer, i18n, tema)
src/css/custom.css      Lacivert (navy) renk paleti ve tema
src/pages/index.tsx      Ana sayfa (hero, teknolojiler, öne çıkan projeler)
src/pages/about.tsx      Hakkımda sayfası (deneyim, yetenekler, iletişim)
projects/                 Proje vitrini (docs eklentisi, /projects altında)
blog/                     Mühendislik blog yazıları (/blog altında)
i18n/en/                  İngilizce çeviriler
```

## İçerik ekleme

**Yeni bir proje:** `projects/` klasörüne yeni bir `.mdx` dosyası ekleyin;
otomatik olarak kenar çubuğunda görünür. Önündeki `sidebar_position` sırasını
belirler.

**Yeni bir blog yazısı:** `blog/` klasörüne `YYYY-MM-DD-slug.md` adında bir
dosya ekleyin (bkz. mevcut örnekler). `{/* truncate */}` işaretinden önceki
kısım, blog listesinde önizleme olarak gösterilir.

## i18n (Türkçe / İngilizce)

Site, Türkçe varsayılan dil olacak şekilde kuruldu. İngilizce çeviriler
`i18n/en/` altında tutulur:

- `i18n/en/docusaurus-theme-classic/navbar.json` ve `footer.json` — navbar/footer metinleri
- `i18n/en/code.json` — `src/pages/*.tsx` içindeki `<Translate>` metinleri
- `i18n/en/docusaurus-plugin-content-docs/current/` — `projects/` çevirileri (aynı dosya adlarıyla)
- `i18n/en/docusaurus-plugin-content-blog/` — `blog/` çevirileri (aynı dosya adlarıyla)

Yeni bir sayfa metni eklediğinizde (`src/pages` içinde), `<Translate id="...">`
ile sarmalayın, sonra:

```bash
npm run write-translations -- --locale en
```

komutu `i18n/en/code.json` içine yeni anahtarı ekler; oradan İngilizce
karşılığını girin. Detaylar: https://docusaurus.io/docs/i18n/tutorial

## Kişiselleştirme — TODO listesi

Site, placeholder (örnek) içerikle kuruldu. Yayınlamadan önce:

- [ ] `docusaurus.config.ts`: `title`, `url`, `organizationName`, `projectName`, navbar/footer bağlantıları
- [ ] `src/pages/about.tsx`: deneyim, yetenekler, iletişim bilgileri (ve `i18n/en/code.json`'daki İngilizce karşılıkları)
- [ ] `src/pages/index.tsx`: hero metni, öne çıkan projeler
- [ ] `projects/`: kendi projelerinizle değiştirin
- [ ] `blog/`: örnek yazıları silin veya kendi yazılarınızla değiştirin
- [ ] `blog/authors.yml`, `i18n/en/docusaurus-plugin-content-blog/authors.yml`: kendi bilgileriniz
- [ ] `static/img/favicon.ico`, `static/img/logo.svg`, `static/img/social-card.jpg`: kendi görselleriniz

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml`, `main` dalına her push'ta siteyi otomatik
build edip GitHub Pages'e deploy eder. Tek seferlik kurulum:

1. GitHub'da bu depoyu oluşturun/push edin.
2. Repo **Settings → Pages** üzerinden **Source** seçeneğini **GitHub
   Actions** olarak ayarlayın.
3. `docusaurus.config.ts` içindeki `url`, `baseUrl`, `organizationName`,
   `projectName` alanlarının GitHub kullanıcı adınız/repo adınızla eşleştiğinden
   emin olun.
4. `main`'e push edince workflow otomatik çalışır.

`.github/workflows/ci.yml`, pull request'lerde build/typecheck kontrolü
yapar (deploy etmez).
