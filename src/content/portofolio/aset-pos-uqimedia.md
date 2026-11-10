---
title: "Aplikasi Aset Manajemen & Point of Sales — UQIMEDIA Digital Printing"
slug: "aset-pos-uqimedia"
client: "UQIMEDIA Digital Printing"
clientPublic: true
problem: "UQIMEDIA membutuhkan sistem untuk mencatat aset produksi beserta riwayat perawatannya, serta kasir yang menghitung harga dan mencetak invoice otomatis."
solution: "Pengembangan dua aplikasi terintegrasi: sistem manajemen aset untuk mencatat dan melacak seluruh aset produksi, serta point of sales (POS) untuk transaksi counter — dari input order hingga cetak invoice."
services:
  - "Web Development"
  - "Custom Application"
technologies:
  - "Laravel"
  - "MySQL"
  - "Nginx"
  - "Linux"
highlight: "Invoice tercetak dalam 1 klik"
outcome: "Dua sistem berjalan paralel — aset tercatat rapi dengan riwayat lengkap, transaksi counter lebih cepat, kalkulasi harga akurat, invoice tercetak otomatis."
featured: true
order: 6
is_published: true
metrics:
  - label: "Sistem"
    value: "2 Aplikasi"
  - label: "Aset"
    value: "Tercatat"
  - label: "Invoice"
    value: "Otomatis"
  - label: "Status"
    value: "Live"
---

## Konteks: Percetakan digital yang terus berkembang

UQIMEDIA Digital Printing memproduksi merchandise, packaging, dan material promosi. Dengan mesin cetak, peralatan finishing, dan perlengkapan produksi yang terus bertambah, UQIMEDIA membutuhkan pencatatan aset yang lebih terstruktur — sekaligus kasir yang cepat dan konsisten di counter.

## Kebutuhan

**Manajemen aset**
- Setiap aset tercatat lengkap beserta penanggung jawabnya.
- Riwayat servis dan penggantian suku cadang tersimpan per mesin.
- Pengingat jadwal pemeliharaan rutin.

**Transaksi counter**
- Harga dihitung otomatis dari bahan, ukuran, finishing, dan jumlah.
- Invoice tercetak langsung dari order, tanpa input ulang.
- Data pelanggan dan riwayat order tersimpan untuk repeat order.

## Yang kami kerjakan: dua aplikasi, satu arsitektur

Motekarindo mengembangkan dua aplikasi yang berjalan di atas fondasi yang sama:

### Aplikasi Manajemen Aset

- **Pencatatan aset lengkap** — setiap aset dicatat dengan detail: nama, kategori, tanggal beli, nilai, lokasi, penanggung jawab. Setiap perubahan tercatat.
- **Riwayat pemeliharaan** — setiap kali ada servis, perbaikan, atau penggantian suku cadang, semuanya dicatat. Kapan, oleh siapa, apa yang dikerjakan, berapa biayanya — lengkap dalam satu timeline.
- **Jadwal pemeliharaan otomatis** — sistem mengingatkan kapan mesin harus diservis rutin.
- **Dashboard status aset** — ringkasan kondisi seluruh aset: aktif, dalam perbaikan, perlu perhatian. Satu layar, semua kelihatan.

### Aplikasi Point of Sales (POS)

- **Input order cepat** — pilih produk, masukkan quantity, sistem hitung harga otomatis. Semua variabel (bahan, ukuran, finishing) sudah dikonfigurasi. Harga konsisten — siapapun staf yang input.
- **Invoice otomatis** — satu klik, invoice tercetak. Tidak perlu double entry. Nomor invoice urut, rapi, profesional.
- **Database pelanggan** — setiap pelanggan tercatat: nama, kontak, riwayat order. Repeat order tinggal pilih pelanggan yang sama — data sudah ada.
- **Laporan harian** — omzet, produk terlaris, jumlah transaksi — tersedia di dashboard. Tidak perlu rekap manual di akhir hari.

## Hasil

| Aspek | Hasil |
|-------|-------|
| Pencatatan aset | Sistem terpusat, riwayat lengkap |
| Riwayat perbaikan | Timeline digital per aset |
| Jadwal maintenance | Otomatis, proaktif |
| Input order | POS digital |
| Kalkulasi harga | Otomatis, konsisten |
| Invoice | Satu klik cetak |
| Data pelanggan | Database lengkap |
| Laporan penjualan | Dashboard real-time |

## FAQ

> [!tip]+ **Apakah aplikasi ini custom atau produk siap pakai?**
> Custom application — dikembangkan spesifik untuk kebutuhan UQIMEDIA. Namun arsitektur dan modulnya bisa diadaptasi untuk bisnis percetakan lain yang punya kebutuhan serupa.

> [!tip]- **Apakah dua aplikasi ini terintegrasi?**
> Keduanya berjalan di atas fondasi yang sama (framework, database, autentikasi) tapi untuk domain yang berbeda — aset dan transaksi. Saat ini beroperasi paralel, dengan potensi integrasi di masa depan (misalnya: aset yang dipakai di produksi terkait dengan order yang masuk).

> [!tip]- **Berapa lama pengembangan kedua aplikasi ini?**
> Pengembangan dilakukan bertahap — dimulai dari modul yang paling kritis (pencatatan aset utama dan POS counter), lalu diperluas dengan fitur tambahan. Pendekatan bertahap memungkinkan UQIMEDIA langsung menggunakan sistem sambil kami terus mengembangkannya.

> [!tip]- **Apakah aplikasi ini bisa diakses dari luar kantor?**
> Akses aplikasi dikonfigurasi sesuai kebutuhan operasional UQIMEDIA. Akses jarak jauh bisa ditambahkan bila diperlukan.
