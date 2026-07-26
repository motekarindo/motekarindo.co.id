---
name: "Institut Ummul Quro Al-Islami"
slug: "institut-ummul-quro-al-islami"
category: "Pendidikan"
description: "Motekar mengelola OJS, server, dan monitoring uptime untuk menjamin jurnal ilmiah IUQI selalu online dan terindeks."
public: true
logo: "institut-ummul-quro-al-islami.webp"
location: "Bogor"
testimonial: "Sebelum bekerja sama dengan Motekar, downtime OJS kami bisa 2-3 kali sebulan. Sekarang tim editor bisa fokus ke substansi artikel, bukan ngurusin server."
featured: true
order: 1
is_published: true
website: "https://iuqibogor.ac.id"
---

## Sebelum: Jurnal sering down, editor frustrasi

Institut Ummul Quro Al-Islami (IUQI) mengelola beberapa jurnal ilmiah melalui **Open Journal Systems (OJS)**. Tim editorial yang terdiri dari dosen dan peneliti sering menghadapi kendala teknis yang mengganggu proses publikasi:

- **Server lemot & sering down** — Shared hosting tidak mampu menangani lonjakan traffic saat ada call for paper atau deadline submission. Downtime bisa 2–3 kali sebulan, membuat author kehilangan kepercayaan.
- **Email notifikasi gagal kirim** — Konfirmasi submission, notifikasi reviewer, dan keputusan editorial tidak sampai ke author. Proses review molor karena komunikasi terputus.
- **Keamanan server minim** — Tidak ada firewall, rate limiting, atau proteksi DDoS. Server rentan terhadap serangan brute-force dan malware.
- **Traffic jurnal rendah** — Artikel sulit ditemukan di Google Scholar dan indeks lainnya. Impresi dan sitasi stagnan.

## Solusi: Manajemen OJS end-to-end + infrastruktur aman

Moteker mengambil alih seluruh aspek teknis jurnal IUQI:

- **Hardening server** — Migrasi dari shared hosting ke VPS terdedikasi dengan konfigurasi LEMP teroptimasi, firewall ketat, rate limiting, dan proteksi DDoS. Server kini stabil dan aman.
- **Perbaikan sistem email** — Konfigurasi SMTP via layanan relay profesional. Seluruh notifikasi OJS (submission, review, editorial decision) kini terkirim dengan deliverability 99%+. Ditambah alert otomatis jika terjadi kegagalan pengiriman email.
- **Monitoring uptime 24/7** — Pemantauan real-time dengan notifikasi WhatsApp jika server down. Response time insiden rata-rata di bawah 15 menit.
- **Optimasi SEO jurnal** — Implementasi metadata Dublin Core, sitemap XML, OAI-PMH, dan optimasi kecepatan halaman untuk meningkatkan indeksasi di Google Scholar dan SINTA.

## Hasil

| Metrik | Sebelum | Sesudah |
|--------|---------|---------|
| Downtime bulanan | 2–3x | 0 |
| Traffic organik | ~500/bulan | ~2.200/bulan |
| Email deliverability | ~60% | 99%+ |
| Response insiden | Tidak terpantau | <15 menit |
| Kecepatan akses | 4–8 detik | <1.5 detik |

## FAQ

**Apakah proses migrasi berisiko menghilangkan data jurnal?**

Tidak. Kami selalu bekerja di staging environment dulu — server terpisah yang isinya kloningan 100% dari jurnal asli. Migrasi hanya dijalankan ke production setelah semua dicek: artikel lengkap, user bisa login, plugin berfungsi.

**Berapa biaya maintenance bulanan?**

Tergantung skala jurnal. Untuk jurnal dengan traffic ~5.000 kunjungan/bulan, paket maintenance mulai dari Rp 500.000/bulan — sudah termasuk monitoring uptime, backup harian, dan update keamanan.

**Bisa bantu submit ke indeks Sinta/DOAJ?**

Ya. Kami bantu siapkan semua persyaratan teknis: sitemap, metadata Dublin Core, OAI-PMH, dan template sesuai standar Arjuna.
