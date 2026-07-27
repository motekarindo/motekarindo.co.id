---
title: "Migrasi OJS 2 ke 3 — Universitas Islam Bogor"
slug: "upgrade-ojs-uib"
client: "Universitas Islam Bogor"
clientPublic: true
problem: "Jurnal terakreditasi SINTA 2 masih berjalan di OJS 2 — tampilan usang, tidak mobile-friendly, traffic organik menurun drastis."
solution: "Upgrade ke OJS 3 dengan staging environment, migrasi data SHA-256 verified, hardening server LEMP stack, tema responsif, dan optimasi SEO on-page."
services:
  - "Instalasi OJS"
  - "Maintenance Server"
  - "Optimasi SEO Jurnal"
technologies:
  - "OJS 3"
  - "PHP"
  - "MariaDB"
  - "Nginx"
  - "LEMP Stack"
outcome: "Traffic organik naik 4x, bounce rate turun ke 41%, waktu muat halaman <2 detik, 0 downtime, submission artikel naik 3x."
featured: true
order: 1
is_published: false
metrics:
  - label: "Traffic"
    value: "3.200+"
  - label: "Downtime"
    value: "0"
  - label: "Bounce"
    value: "41%"
  - label: "Submisi"
    value: "25-30"
---

## Sebelum: Terjebak OJS 2, traffic menurun

Universitas Islam Bogor memiliki jurnal terakreditasi **Sinta 2** yang masih berjalan di **OJS versi 2** — versi yang sudah tidak mendapat update keamanan sejak 2020. Tampilan usang, tidak mobile-friendly, dan mulai ditinggalkan author. **Traffic organik menurun** karena Google memprioritaskan situs dengan HTTPS dan mobile-responsive.

Tim editor ingin upgrade ke OJS 3 tapi khawatir: ribuan artikel, ratusan user, dan plugin kustom — bagaimana kalau data hilang?

## Solusi: Upgrade bertahap + maintenance berkelanjutan

Motekar mengeksekusi upgrade secara bertahap:

- **Staging environment** — Duplikasi jurnal ke server staging, upgrade di sana, uji semua fitur sebelum menyentuh production.
- **Migrasi data penuh** — Artikel, reviewer, issue, plugin settings. Verifikasi hash SHA-256 per batch untuk memastikan integritas data. Nol artikel hilang.
- **Hardening server** — Konfigurasi VPS dengan LEMP stack teroptimasi, firewall, rate limiting, dan proteksi DDoS. Server aman dari serangan brute-force.
- **Tampilan modern & mobile-friendly** — Tema OJS 3 responsif dengan optimasi kecepatan dan SEO on-page.
- **Dokumentasi lengkap** — Semua konfigurasi, kredensial, dan prosedur maintenance diserahkan dalam dokumen terstruktur.

## Hasil

| Metrik | Sebelum (OJS 2) | Sesudah (OJS 3) |
|--------|-----------------|-----------------|
| Traffic organik | ~800/bulan | ~3.200/bulan |
| Bounce rate | 72% | 41% |
| Waktu muat halaman | 6–10 detik | <2 detik |
| Submission artikel | 8–12/bulan | 25–30/bulan |
| Downtime | 1–2x/bulan | 0 |

## FAQ

**Kenapa harus upgrade dari OJS 2 ke OJS 3?**

OJS 2 sudah tidak didukung sejak 2020 — tidak ada update keamanan, tidak mobile-friendly, dan performanya tertinggal. OJS 3 menawarkan UI yang lebih modern, workflow editorial yang lebih efisien, serta plugin dan tema terbaru.

**Bagaimana caranya agar ribuan artikel tidak hilang saat upgrade?**

Kami selalu bekerja di staging environment dulu — server terpisah yang isinya kloningan 100% dari jurnal asli. Upgrade hanya dijalankan ke production setelah semua dicek: artikel lengkap, user bisa login, plugin berfungsi. Tidak ada satupun data hilang.

**Berapa biaya maintenance bulanan?**

Tergantung skala jurnal. Untuk jurnal dengan traffic ~5.000 kunjungan/bulan, paket maintenance mulai dari Rp 500.000/bulan — sudah termasuk monitoring uptime, backup harian, dan update keamanan.

**Bisa bantu submit ke indeks Sinta/DOAJ?**

Ya. Kami bantu siapkan semua persyaratan teknis dan administratif: sitemap, metadata Dublin Core, OAI-PMH, dan template sesuai standar Arjuna.
