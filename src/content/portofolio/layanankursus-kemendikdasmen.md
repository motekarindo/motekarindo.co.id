---
title: "Pengembangan Aplikasi Layanan Kursus — Kemendikdasmen"
slug: "layanankursus-kemendikdasmen"
client: "Kementerian Pendidikan Dasar dan Menengah"
clientPublic: true
problem: "Penyaluran bantuan pemerintah ke lembaga kursus masih mengandalkan proses administratif yang terfragmentasi — lembaga harus mengurus berkas fisik, tidak ada sistem terpadu untuk pendaftaran, verifikasi, dan pemantauan."
solution: "Pengembangan fullstack aplikasi Layanan Kursus — platform terpadu untuk pendaftaran lembaga, pengajuan bantuan, verifikasi dokumen, dan pemantauan penyaluran. Mencakup frontend, backend, dan integrasi sistem."
services:
  - "Web Development"
  - "DevOps"
technologies:
  - "Laravel"
  - "SQL Server"
  - "AlpineJS"
  - "Livewire"
  - "Nginx"
  - "Linux"
outcome: "Aplikasi Layanan Kursus menjadi platform utama Direktorat Kursus dan Pelatihan untuk penyaluran Bantuan Pemerintah program PKK dan PKW — melayani ribuan lembaga kursus di seluruh Indonesia."
featured: true
order: 5
is_published: true
metrics:
  - label: "Program"
    value: "PKK & PKW"
  - label: "Lembaga"
    value: "Nasional"
  - label: "Platform"
    value: "Terpadu"
  - label: "Status"
    value: "Live"
---

## Konteks: Ribuan lembaga kursus, satu platform digital

Direktorat Kursus dan Pelatihan di bawah Kementerian Pendidikan Dasar dan Menengah (Kemendikdasmen) menyalurkan Bantuan Pemerintah ke ribuan lembaga kursus, PKBM, SKB, dan organisasi kemasyarakatan di seluruh Indonesia. Program unggulan seperti **PKK (Pendidikan Kecakapan Kerja)** dan **PKW (Pendidikan Kecakapan Wirausaha)** menyasar anak tidak sekolah dan penganggur usia produktif.

Sebelum aplikasi ini ada, proses pendaftaran dan verifikasi lembaga dilakukan secara terfragmentasi — formulir kertas, dokumen fisik, koordinasi via email dan telepon. Tidak ada sistem terpadu yang menghubungkan lembaga, dinas pendidikan daerah, dan pemerintah pusat dalam satu alur digital.

## Masalah: Fragmentasi administrasi di skala nasional

- **Pendaftaran manual & terfragmentasi** — lembaga kursus di berbagai daerah mendaftar melalui jalur yang berbeda-beda. Tidak ada standar yang seragam. Data tersebar, sulit dikonsolidasi.
- **Verifikasi dokumen lambat** — berkas fisik harus dikirim, diperiksa manual, dan divalidasi berlapis. Satu pengajuan bisa memakan waktu berminggu-minggu.
- **Tidak ada dashboard terpadu** — pemerintah pusat tidak punya visibilitas real-time terhadap status penyaluran bantuan. Laporan harus dikumpulkan manual dari daerah.
- **Kesulitan pemantauan** — setelah bantuan disalurkan, tidak ada sistem yang memantau penggunaan dana dan hasil program secara terintegrasi.

## Solusi: Platform terpadu — dari pendaftaran hingga pemantauan

Motekarindo berkontribusi dalam pengembangan fullstack aplikasi [**Layanan Kursus**](`layanankursus.kemendikdasmen.go.id`):

- **Frontend** — antarmuka yang melayani tiga jenis pengguna: lembaga kursus (pendaftaran & pengajuan), dinas pendidikan (verifikasi & rekomendasi), dan pemerintah pusat (pemantauan & pelaporan). Desain responsif, aksesibel, dan mudah digunakan oleh pengguna dengan tingkat literasi digital yang beragam.
- **Backend** — sistem yang menangani alur pendaftaran lembaga, unggah dokumen, verifikasi bertingkat, approval berjenjang, hingga pencairan bantuan. Setiap langkah tercatat — **audit trail lengkap dan transparan.**
- **Integrasi data** — data profil lembaga menjadi dasar seluruh layanan. Satu lembaga, satu profil, banyak program. Tidak ada lagi duplikasi atau inkonsistensi data.
- **Keamanan & skalabilitas** — aplikasi dirancang untuk melayani ribuan lembaga di seluruh Indonesia. Autentikasi per pengguna, otorisasi berbasis peran, dan infrastruktur yang siap untuk lonjakan traffic saat periode pendaftaran.

## Yang Kami Kerjakan

| Layer | Kontribusi |
|-------|-----------|
| Frontend | Antarmuka pengguna — landing page, dashboard lembaga, dashboard dinas, dashboard pusat |
| Backend | Alur bisnis — registrasi, verifikasi, approval, pencairan, pelaporan |
| Database | Desain skema, migrasi, optimasi query |
| Deployment | Konfigurasi server, environment staging/production |
| Testing | Pengujian fungsional, validasi alur end-to-end |

## Dampak

- **Satu platform untuk seluruh Indonesia** — lembaga kursus dari Aceh hingga Papua menggunakan sistem yang sama. Standarisasi proses di skala nasional.
- **Verifikasi lebih cepat** — dari manual berminggu-minggu menjadi digital dalam sistem. Dokumen diunggah, diperiksa, divalidasi — semua dalam satu dashboard.
- **Transparansi penyaluran** — setiap tahap — pendaftaran, verifikasi, approval, pencairan — tercatat dan bisa diaudit. Tidak ada lagi "hilang di tengah jalan."
- **Data jadi dasar kebijakan** — profil lembaga, hasil verifikasi, dan laporan penyaluran menjadi sumber data terpadu untuk pengambilan keputusan di tingkat direktorat.

Aplikasi ini sekarang live dan menjadi platform utama untuk penyaluran Bantuan Pemerintah program PKK dan PKW di seluruh Indonesia.

## FAQ

> [!tip]+ **Apa peran spesifik Motekarindo dalam project ini?**
> Kami berkontribusi sebagai bagian dari tim pengembangan — menangani fullstack development: frontend, backend, database, deployment, dan testing. Project dikerjakan secara subkontrak.

> [!tip]- **Apa saja fitur utama aplikasi Layanan Kursus?**
> Pendaftaran dan profil lembaga, pengajuan bantuan pemerintah (PKK & PKW), verifikasi dokumen bertingkat (dinas → pusat), dashboard pemantauan real-time, dan pelaporan. Semua terintegrasi dalam satu platform.

> [!tip]- **Berapa banyak lembaga yang dilayani aplikasi ini?**
> Aplikasi dirancang untuk melayani ribuan lembaga kursus, PKBM, SKB, dan organisasi kemasyarakatan di 38 provinsi. Skala nasional — dari pendaftaran hingga pencairan.

> [!tip]- **Apakah aplikasi ini masih dalam pengembangan?**
> Aplikasi sudah live dan digunakan secara operasional. Pengembangan berkelanjutan dilakukan untuk penambahan fitur, optimasi, dan penyesuaian kebijakan baru dari direktorat.
