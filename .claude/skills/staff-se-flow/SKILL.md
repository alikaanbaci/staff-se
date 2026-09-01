---
name: staff-se-flow
description: alikaanbaci/staff-se reposundaki (Docusaurus blog/portfolyo) development flow'unu uygular - issue açma, branch/commit/PR akışı, etiketleme ve SemVer tabanlı otomatik release stratejisi. Kullanıcı bu repoda "issue aç", "PR aç", "bu isteri geliştir", "release yap/hazırla", "yeni blog yazısı ekle" gibi bir şey söylediğinde, ya da genel olarak bu repoda bir development görevine başlarken bu skill'i kullan. Repo ilk kurulumunda (workflow/template dosyaları eksikse) bu skill kurulum dosyalarını da sağlar.
---
 
# staff-se Development Flow
 
Bu skill, `alikaanbaci/staff-se` reposunda (navy-blue temalı, TR/EN Docusaurus blog + portfolyo sitesi) izlenecek development sürecini tanımlar.
 
## Akış Özeti
 
1. **Issue aç** — Gelen her ister için net bir description ile issue açılır.
   - Site üzerinde bir düzenleme/iyileştirme ise → `enhancement` etiketi
   - Yeni bir blog yazısı yazılacaksa → `documentation` etiketi
   - Bir hata düzeltmesi ise → `bug` etiketi
   - Geriye dönük uyumluluğu bozan bir değişiklikse → `breaking-change` etiketi (ayrıca yukarıdaki tiplerden biriyle birlikte kullanılabilir)
2. **Branch aç** — İlgili issue'dan bir branch alınır: `<tip>/<issue-no>-<kısa-slug>` (örn. `enhancement/12-navbar-dark-mode`, `documentation/13-kafka-locking-yazisi`).
3. **Geliştir + commit et** — Değişiklikler yapılır, anlamlı commit mesajlarıyla commit edilir.
4. **PR aç** — PR description'ı geliştirmenin ne olduğunu net şekilde anlatır ve ilgili issue'ya referans verir (`Closes #<issue-no>`). PR'a, issue'daki ile **aynı etiket** (enhancement/documentation/bug/breaking-change) uygulanır — release otomasyonu bu etikete bakar.
5. **Merge** — PR `main`'e merge edildiğinde `.github/workflows/release.yml` otomatik olarak tetiklenir, versiyonu bump'lar, tag atar ve GitHub Release oluşturur.
Her merge yeni bir release doğurur — dönemsel/manuel release biriktirme yok.
 
## Adım Adım: Bir İster Geldiğinde
 
Kullanıcı "şunu yapalım / şu değişikliği istiyorum" dediğinde:
 
1. İsteri netleştir (gerekirse kısa bir soru sor), sonra:
   ```bash
   gh issue create --repo alikaanbaci/staff-se \
     --title "<net, kısa başlık>" \
     --body "<isterin ne olduğunu, neden gerektiğini ve kabul kriterlerini içeren net açıklama>" \
     --label "enhancement"   # ya da documentation / bug
   ```
2. Issue numarasını al, branch aç:
   ```bash
   git checkout -b enhancement/<no>-<kisa-slug> main
   ```
3. Geliştirmeyi yap, commit et (commit mesajı değişikliği özetlesin).
4. Push et ve PR aç:
   ```bash
   git push -u origin enhancement/<no>-<kisa-slug>
   gh pr create --repo alikaanbaci/staff-se \
     --title "<PR başlığı>" \
     --body "## Açıklama
<geliştirmenin ne olduğuna dair net açıklama>
Closes #<issue-no>" \
     --label "enhancement" \
     --base main
   ```
5. PR merge edildiğinde release otomatik oluşur — elle bir şey yapmana gerek yok. Merge sonrası `gh release view --repo alikaanbaci/staff-se` ile son release'i doğrulayabilirsin.
 
## Versiyonlama Stratejisi (SemVer)
 
Versiyon `package.json`'daki `version` alanında tutulur. PR merge edildiğinde etikete göre bump tipi belirlenir (öncelik sırasıyla):
 
| Etiket | Bump | Örnek |
|---|---|---|
| `breaking-change` | major | 1.4.2 → 2.0.0 |
| `enhancement` | minor | 1.4.2 → 1.5.0 |
| `bug` | patch | 1.4.2 → 1.4.3 |
| `documentation` | patch | 1.4.2 → 1.4.3 |
| (etiket yok) | patch | 1.4.2 → 1.4.3 (fallback) |
 
Birden fazla etiket varsa yukarıdaki öncelik sırası (breaking-change > enhancement > bug/documentation) uygulanır.
 
## Release Otomasyonu Nasıl Çalışıyor
 
`.github/workflows/release.yml` (bu skill'le birlikte gelir, repoda yoksa kur — bkz. "İlk Kurulum"):
 
- `pull_request` `closed` event'inde, sadece `merged == true` ve base branch `main` ise çalışır.
- PR etiketlerinden bump tipini hesaplar.
- `package.json`'daki mevcut versiyonu okuyup yeni versiyonu hesaplar, `package.json`/`package-lock.json`'ı günceller ve bu commit'i doğrudan `main`'e push eder.
- `vX.Y.Z` formatında bir git tag oluşturup push eder.
- PR başlığı ve açıklamasını kullanarak GitHub Release oluşturur (`gh release create`), ilgili issue'ya linkler.
 
## İlk Kurulum (repo bu dosyalara sahip değilse)
 
Bu skill'in yanında gelen şu dosyaları repoya kopyala:
- `files/release.yml` → `.github/workflows/release.yml`
- `files/ISSUE_TEMPLATE/enhancement.md` → `.github/ISSUE_TEMPLATE/enhancement.md`
- `files/ISSUE_TEMPLATE/documentation.md` → `.github/ISSUE_TEMPLATE/documentation.md`
- `files/ISSUE_TEMPLATE/bug.md` → `.github/ISSUE_TEMPLATE/bug.md`
- `files/pull_request_template.md` → `.github/pull_request_template.md`
 
Ayrıca repo ayarlarında şu etiketlerin var olduğundan emin ol (yoksa oluştur):
```bash
gh label create enhancement --repo alikaanbaci/staff-se --color a2eeef --force
gh label create documentation --repo alikaanbaci/staff-se --color 0075ca --force
gh label create bug --repo alikaanbaci/staff-se --color d73a4a --force
gh label create breaking-change --repo alikaanbaci/staff-se --color b60205 --force
```
 
Workflow'un `main`'e commit+tag push edebilmesi ve release oluşturabilmesi için repo **Settings → Actions → General → Workflow permissions** kısmında **"Read and write permissions"** seçili olmalı.
 
## Notlar
 
- `docusaurus.config.ts`, `src/pages/*`, `blog/` yapısı ve i18n (TR varsayılan, EN `i18n/en/` altında) mevcut proje yapısına dokunulmadan izlenir — README'deki "Adding content" ve "i18n" bölümlerine uy.
- Yeni blog yazısı eklerken (`documentation` issue/PR akışı), `blog/YYYY-MM-DD-slug.md` formatına ve `{/* truncate */}` marker'ına uy, gerekiyorsa `i18n/en/docusaurus-plugin-content-blog/` altına İngilizce çevirisini de ekle.
 
