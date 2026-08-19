---
slug: lacivert-temali-blog-kurulumu
title: Bu Bloğu Docusaurus ile Nasıl Kurdum
authors: [me]
tags: [devops]
description: Bu sitenin Docusaurus, i18n ve GitHub Pages ile nasıl kurulduğuna dair kısa bir özet.
---

Bu yazı, elinizdeki mühendislik blogu ve portföy sitesinin nasıl kurulduğunu
özetleyen bir örnek gönderi. Kendi ilk yazınızı yazmadan önce bu dosyayı
silebilir ya da referans olarak tutabilirsiniz.

{/* truncate */}

## Neden Docusaurus?

TODO: Docusaurus'u (ya da kullandığınız aracı) neden seçtiğinizi anlatın —
MDX desteği, i18n, hızlı build süreleri, düşük bakım maliyeti gibi
gerekçelerden bahsedebilirsiniz.

## Öne çıkan kurulum kararları

- **Tema:** Lacivert (navy) tabanlı özel bir Infima paleti.
- **i18n:** Türkçe varsayılan, İngilizce ikinci dil olacak şekilde yapılandırıldı.
- **İçerik yapısı:** `projects/` klasörü proje vitrini, `blog/` klasörü
  mühendislik yazıları için kullanılıyor.
- **Deploy:** `main` dalına push'ta GitHub Actions ile otomatik GitHub Pages
  deploy'u.

## Sırada ne var?

TODO: Bu bölümü kendi planlarınızla güncelleyin — hangi konularda yazmayı
planlıyorsunuz, blogu ne sıklıkla güncelleyeceksiniz?
