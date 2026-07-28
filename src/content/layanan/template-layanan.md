---
# ══════════════════════════════════════════
# DOKUMENTASI FRONTMATTER LAYANAN
# Setiap file .md di folder ini WAJIB punya semua key wajib.
# ══════════════════════════════════════════

# ── WAJIB ──────────────────────────────
slug: "layanan-test"          # URL: /layanan/layanan-test (wajib unik)
title: "Jasa Layanan Test Profesional"
summary: "Ringkasan satu kalimat — muncul di card & meta description fallback."
description: "Deskripsi panjang untuk SEO meta description — 120-160 karakter yang menjual."  # opsional
category: "Kategori"          # Label badge di hero (bebas, string pendek)
icon: "consult"               # Kunci ilustrasi (lihat daftar bawah)
featured: true                # Tampil di halaman depan? true/false
order: 10                     # Urutan di list (1,2,3...)
is_published: false            # true = muncul di list, false = hidden + redirect /layanan

# ── OPSIONAL: gambar hero ──────────────
# Upload file .jpg/.png/.webp ke src/assets/images/layanan/
# Cukup tulis nama file. Astro auto-compress ke WebP/AVIF.
# Jika tidak diisi → fallback ke illustration SVG berdasarkan `icon`
image:
  file: "test.webp"   # nama file (harus ada di src/assets/images/layanan/)
  alt: "Deskripsi gambar untuk aksesibilitas & SEO"

# ── DAFTAR ICON ────────────────────────
# consult      → diskusi/strategi
# web          → browser/coding
# apps         → aplikasi/grid
# server       → server rack
# journal      → jurnal/dokumen
# repository   → folder/repo
# migrate      → transfer/migrasi
# troubleshoot → diagnosa/bug
# backup       → backup/checklist
# install      → download/instalasi
# support      → bantuan/wrench
# (lainnya)    → default (+)
---

## Judul H2 — Pembuka

Paragraf pembuka: jelaskan value proposition layanan ini. Kenapa penting, apa manfaatnya. Target 2-3 kalimat.

### Tantangan yang Sering Dihadapi

- **Tantangan 1:** Deskripsi singkat — apa rasa sakit yang dialami klien.
- **Tantangan 2:** Satu baris yang relateable bagi target audience.
- **Tantangan 3:** Minimal 3-4 pain points untuk bangun urgency.

### Solusi dari Motekarindo

1. **Solusi 1** — Penjelasan satu paragraf. Detail apa yang kami lakukan, bagaimana caranya, apa hasilnya.

2. **Solusi 2** — Setiap nomor bisa 2-3 kalimat. Jelaskan proses dan outcome.

3. **Solusi 3** — Struktur bold untuk nama solusi, dash untuk penjelasan.

### Proses Kerja Kami

1. **Tahap 1: Nama Tahap** — Deskripsi singkat apa yang terjadi di tahap ini.

2. **Tahap 2: Nama Tahap** — Semakin detail semakin baik. Klien suka transparansi.

3. **Tahap 3: Nama Tahap** — Akhiri dengan deliverable atau output.

### FAQ

**Pertanyaan yang sering ditanyakan?**  
Jawaban singkat. Bisa 2-3 kalimat. Bold untuk kata kunci.

**Pertanyaan kedua?**  
Jawab dengan jelas. Sebutkan **highlight** jika ada.

**Pertanyaan ketiga?**  
Akhiri dengan call to action halus — arahkan ke konsultasi.
