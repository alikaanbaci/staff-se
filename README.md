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
src/pages/index.tsx      Ana sayfa (hero, teknolojiler)
src/pages/about.tsx      Hakkımda sayfası (deneyim, yetenekler, iletişim)
blog/                     Mühendislik blog yazıları (/blog altında)
i18n/en/                  İngilizce çeviriler
```

Not: Sitede ayrı bir "Projeler" bölümü yok — docs eklentisi
(`docusaurus.config.ts`'te `docs: false`) kapalı, `sidebars.ts` yok.

## İçerik ekleme

**Yeni bir blog yazısı:** `blog/` klasörüne `YYYY-MM-DD-slug.md` adında bir
dosya ekleyin (bkz. mevcut örnekler). `{/* truncate */}` işaretinden önceki
kısım, blog listesinde önizleme olarak gösterilir.

## i18n (Türkçe / İngilizce)

Site, Türkçe varsayılan dil olacak şekilde kuruldu. İngilizce çeviriler
`i18n/en/` altında tutulur:

- `i18n/en/docusaurus-theme-classic/navbar.json` ve `footer.json` — navbar/footer metinleri
- `i18n/en/code.json` — `src/pages/*.tsx` içindeki `<Translate>` metinleri
- `i18n/en/docusaurus-plugin-content-blog/` — `blog/` çevirileri (aynı dosya adlarıyla)

Yeni bir sayfa metni eklediğinizde (`src/pages` içinde), `<Translate id="...">`
ile sarmalayın, sonra:

```bash
npm run write-translations -- --locale en
```

komutu `i18n/en/code.json` içine yeni anahtarı ekler; oradan İngilizce
karşılığını girin. Detaylar: https://docusaurus.io/docs/i18n/tutorial

## Durum

Site kişiselleştirildi: `docusaurus.config.ts`, `src/pages/about.tsx`,
`src/pages/index.tsx`, `blog/authors.yml` ve i18n karşılıkları gerçek bilgilerle
dolduruldu; örnek/placeholder proje ve blog yazıları, ve içi boş kalan
"Projeler" bölümünün tamamı (docs eklentisi, `projects/`, `sidebars.ts`,
navbar/footer linkleri) kaldırıldı.

Kalan tek placeholder: `static/img/social-card.jpg` hâlâ Docusaurus'un
varsayılan tanıtım görseli — sosyal medyada paylaşılan linklerde bu görünür.
`static/img/favicon.ico` da varsayılan olabilir. İkisini de kendi görselinizle
değiştirmek isterseniz aynı dosya adlarıyla üzerine yazmanız yeterli
(`static/img/logo.svg` zaten özel lacivert tema logosu, dokunmaya gerek yok).

Yeni bir iş deneyimi eklemek için `src/pages/about.tsx`'teki `.timeline`
bloklarından birini kopyalayıp `about.exp6.*` gibi yeni `Translate` id'leriyle
ekleyin; İngilizce karşılığını `i18n/en/code.json`'a da eklemeyi unutmayın.

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
