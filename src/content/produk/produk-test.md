---
slug: "produk-test"
title: "Produk Test"
summary: "File dokumentasi frontmatter produk — tidak ditampilkan di list."
description: "Dokumentasi frontmatter untuk koleksi produk."
category: "Produk"
icon: "apps"
status: "coming-soon"
audience: "Internal — dokumentasi."
featured: false
order: 99
is_published: false

# ── OPSIONAL: gambar hero ──────────────
# Upload file .jpg/.png/.webp ke src/assets/images/produk/
# Astro auto-compress, auto-convert ke WebP/AVIF.
image:
  file: "test.webp"           # nama file di src/assets/images/produk/
  alt: "Deskripsi gambar"
---

## Contoh gambar di body

Gambar di body markdown pakai path relatif dari file `.md` ini ke `src/assets/images/produk/`:

![Screenshot ERP](../../assets/images/produk/screenshot.webp)

Format: `../../assets/images/produk/nama-file.webp`

## Contoh gambar di frontmatter

Gambar hero dari frontmatter pakai key `image.file` — cukup nama file saja:

```yaml
image:
  file: "erp-dashboard.webp"
  alt: "Dashboard ERP Percetakan Digital"
```
