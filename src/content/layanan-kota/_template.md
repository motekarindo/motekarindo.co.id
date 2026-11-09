---
# ══════════════════════════════════════════
# TEMPLATE HALAMAN LAYANAN PER KOTA
# File berawalan "_" diabaikan saat build.
#
# Lokasi file : src/content/layanan-kota/<slug-layanan>/<slug-kota>.md
# URL hasil   : /layanan/<slug-layanan>/<slug-kota>
#
# ATURAN (supaya tidak dianggap spam/doorway oleh Google):
# 1. Buat halaman kota HANYA jika ada alasan nyata: klien di kota itu,
#    bisa onsite, atau pengalaman spesifik. Mulai dari 3–5 kota.
# 2. Konten WAJIB unik — jangan copy-paste dari kota lain lalu ganti nama kota.
#    Build akan GAGAL jika body < 300 kata.
# 3. Isi yang bagus: klien/proyek di kota itu (yang boleh dipublikasikan),
#    institusi/industri lokal yang relevan, cara kerja onsite/remote,
#    waktu respons, FAQ yang spesifik kota tersebut.
# ══════════════════════════════════════════
service: "install-ojs"         # = frontmatter `slug` layanan induk
city: "bogor"                  # = slug di src/lib/cities.ts
title: "Jasa Install OJS Bogor" # H1 + <title>. Tulis sesuai query yang dicari orang.
description: "Meta description unik 120–160 karakter, sebut kota + layanan + alasan memilih."
summary: "Paragraf pembuka di hero (opsional, fallback ke description)."
onsite: true                   # true jika tim bisa datang ke kota ini
is_published: false            # false = draft, tidak dibuild
---

## Judul section pertama (sebut kota secara natural)

Tulis konten unik di sini…
