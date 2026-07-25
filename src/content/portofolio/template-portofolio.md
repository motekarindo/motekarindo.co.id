---
# ── WAJIB ──────────────────────────────
slug: "template-portofolio"
title: "Template File Portofolio"
client: "Nama Klien"
clientPublic: false            # false = nama klien dirahasiakan
problem: "Uraian masalah yang dihadapi klien."
solution: "Uraian solusi yang dikerjakan Motekar."
services:                      # wajib, array
  - "Web Development"
  - "Content structure"
  - "Deployment"
technologies:                  # wajib, array
  - "Astro"
  - "Tailwind CSS"
  - "Static hosting"
outcome: "Hasil yang dicapai setelah project selesai."
featured: false
order: 99
is_published: false            # true = muncul di list, false = hidden

# ── OPSIONAL: gambar hero ──────────────
# Upload file ke src/assets/images/portofolio/
# Astro auto-compress.
icon: "apps"
image:
  file: "screenshot.webp"
  alt: "Deskripsi gambar"
---

Project website profil dibuat dengan pendekatan ringan, cepat, dan mudah dirawat.

## Tahapan Pengerjaan

1. **Analisis kebutuhan** — diskusi dengan klien untuk mapping struktur halaman.
2. **Pengembangan** — coding dan integrasi konten.
3. **Deployment** — konfigurasi hosting dan domain.

## Teknologi

Detail tambahan tentang stack yang digunakan.
