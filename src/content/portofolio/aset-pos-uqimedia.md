---
title: "Aplikasi Aset Manajemen & Point of Sales — UQIMEDIA Digital Printing"
slug: "aset-pos-uqimedia"
client: "UQIMEDIA Digital Printing"
clientPublic: true
problem: "Pencatatan aset produksi masih manual di spreadsheet — sulit dilacak, riwayat perbaikan tidak tercatat. Transaksi di counter juga masih manual — order ditulis di kertas, kalkulasi harga rawan salah, invoice lambat."
solution: "Pengembangan dua aplikasi terintegrasi: sistem manajemen aset untuk mencatat dan melacak seluruh aset produksi, serta point of sales (POS) untuk transaksi counter — dari input order hingga cetak invoice."
services:
  - "Web Development"
  - "Custom Application"
technologies:
  - "Laravel"
  - "MySQL"
  - "Nginx"
  - "Linux"
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

## Konteks: Percetakan digital dengan dua masalah paralel

UQIMEDIA Digital Printing adalah perusahaan percetakan yang memproduksi merchandise, packaging, dan material promosi. Dengan mesin cetak, peralatan finishing, dan perlengkapan produksi yang terus bertambah, pencatatan aset menjadi makin kompleks. Di sisi lain, transaksi di counter masih mengandalkan pencatatan manual — dari nota tulis tangan hingga kalkulasi harga yang dihitung satu per satu.

Dua masalah ini terlihat terpisah, tapi dampaknya sama: **waktu habis untuk administrasi, bukan untuk produksi dan pelayanan.**

## Sebelum: Spreadsheet dan nota kertas — dua kelemahan yang sama

### Masalah 1: Manajemen aset tanpa sistem

- **Pencatatan aset di spreadsheet** — siapa yang punya akses edit? Siapa yang terakhir update? Tidak ada audit trail. Data bisa berubah tanpa diketahui siapa dan kapan.
- **Riwayat perbaikan tidak tercatat** — mesin cetak A pernah diservis kapan? Suku cadang apa yang diganti? Tidak ada catatan. Setiap kali ada masalah, harus cari-cari nota servis yang entah disimpan di mana.
- **Tidak ada jadwal pemeliharaan** — mesin dirawat saat rusak, bukan sebelum rusak. Tidak ada sistem yang mengingatkan kapan waktunya maintenance rutin.
- **Aset kecil terlupakan** — perlengkapan kantor, tools finishing, peralatan pendukung — tidak masuk spreadsheet. Hilang satu per satu tanpa diketahui.

### Masalah 2: Transaksi counter tanpa sistem

- **Order ditulis di kertas** — nama pelanggan, jenis produk, jumlah, harga — semua dicatat manual. Tulisan tangan kadang tidak terbaca, kadang hilang.
- **Kalkulasi harga rawan salah** — setiap jenis produk punya variabel harga sendiri: bahan, ukuran, finishing, quantity. Dihitung manual, hasilnya bisa beda tiap staf.
- **Invoice dicetak terpisah** — setelah order dicatat, invoice dibuat di aplikasi terpisah. Double entry, dua kali kerja, dua kali risiko error.
- **Tidak ada riwayat pelanggan** — pelanggan repeat order harus diinput ulang dari awal. Tidak ada database yang mencatat siapa pesan apa, kapan, berapa.

## Solusi: Dua aplikasi, satu arsitektur — terukur dan terdokumentasi

Motekarindo mengembangkan dua aplikasi yang berjalan di atas fondasi yang sama:

### Aplikasi Manajemen Aset

- **Pencatatan aset lengkap** — setiap aset dicatat dengan detail: nama, kategori, tanggal beli, nilai, lokasi, penanggung jawab. Tidak ada lagi spreadsheet tanpa audit trail.
- **Riwayat pemeliharaan** — setiap kali ada servis, perbaikan, atau penggantian suku cadang, semuanya dicatat. Kapan, oleh siapa, apa yang dikerjakan, berapa biayanya — lengkap dalam satu timeline.
- **Jadwal pemeliharaan otomatis** — sistem mengingatkan kapan mesin harus diservis rutin. Tidak perlu ingat-ingat, tidak perlu Excel.
- **Dashboard status aset** — ringkasan kondisi seluruh aset: aktif, dalam perbaikan, perlu perhatian. Satu layar, semua kelihatan.

### Aplikasi Point of Sales (POS)

- **Input order cepat** — pilih produk, masukkan quantity, sistem hitung harga otomatis. Semua variabel (bahan, ukuran, finishing) sudah dikonfigurasi. Harga konsisten — siapapun staf yang input.
- **Invoice otomatis** — satu klik, invoice tercetak. Tidak perlu double entry. Nomor invoice urut, rapi, profesional.
- **Database pelanggan** — setiap pelanggan tercatat: nama, kontak, riwayat order. Repeat order tinggal pilih pelanggan yang sama — data sudah ada.
- **Laporan harian** — omzet, produk terlaris, jumlah transaksi — tersedia di dashboard. Tidak perlu rekap manual di akhir hari.

## Hasil

| Aspek | Sebelum | Sesudah |
|-------|---------|---------|
| Pencatatan aset | Spreadsheet, tidak ada audit trail | Sistem terpusat, riwayat lengkap |
| Riwayat perbaikan | Nota kertas, tersebar | Timeline digital per aset |
| Jadwal maintenance | Tidak ada, reaktif | Otomatis, proaktif |
| Input order | Nota tulis tangan | POS digital |
| Kalkulasi harga | Manual, rawan beda | Otomatis, konsisten |
| Invoice | Dibuat terpisah | Satu klik cetak |
| Data pelanggan | Tidak tercatat | Database lengkap |
| Laporan penjualan | Rekap manual | Dashboard real-time |

## FAQ

> [!tip]+ **Apakah aplikasi ini custom atau produk siap pakai?**
> Custom application — dikembangkan spesifik untuk kebutuhan UQIMEDIA. Namun arsitektur dan modulnya bisa diadaptasi untuk bisnis percetakan lain yang punya kebutuhan serupa.

> [!tip]- **Apakah dua aplikasi ini terintegrasi?**
> Keduanya berjalan di atas fondasi yang sama (framework, database, autentikasi) tapi untuk domain yang berbeda — aset dan transaksi. Saat ini beroperasi paralel, dengan potensi integrasi di masa depan (misalnya: aset yang dipakai di produksi terkait dengan order yang masuk).

> [!tip]- **Berapa lama pengembangan kedua aplikasi ini?**
> Pengembangan dilakukan bertahap — dimulai dari modul yang paling kritis (pencatatan aset utama dan POS counter), lalu diperluas dengan fitur tambahan. Pendekatan bertahap memungkinkan UQIMEDIA langsung menggunakan sistem sambil kami terus mengembangkannya.

> [!tip]- **Apakah aplikasi ini bisa diakses dari luar kantor?**
> Aplikasi berjalan di server internal UQIMEDIA dan bisa diakses melalui jaringan lokal. Konfigurasi akses remote bisa ditambahkan sesuai kebutuhan bisnis ke depannya.
