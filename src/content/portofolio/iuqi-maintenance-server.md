---
title: "Maintenance Server Jurnal — Institut Ummul Quro Al-Islami"
slug: "maintenance-server-iuqi"
client: "Institut Ummul Quro Al-Islami"
clientPublic: true
problem: "Jurnal down tanpa alert, email notifikasi gagal kirim, VPS tidak dimonitor, tidak ada dashboard performa."
solution: "Maintenance VPS, hardening server, perbaikan SMTP relay, setup monitoring Grafana dengan alert real-time, backup database harian."
services:
  - "Maintenance Server"
  - "Instalasi OJS"
  - "DevOps"
technologies:
  - "OJS 3"
  - "Nginx"
  - "MySQL"
  - "Grafana"
  - "Uptime Kuma"
outcome: "0 downtime, email stabil, semua metrik server terpantau Grafana real-time, response insiden di bawah 15 menit."
featured: true
order: 1
is_published: true
icon: "web"
metrics:
  - label: "Downtime"
    value: "0"
  - label: "Monitoring"
    value: "Grafana"
  - label: "Email"
    value: "Stabil"
  - label: "Respons"
    value: "<15m"
---

## Sebelum: Jurnal down, tidak ada yang memantau

Institut Ummul Quro Al-Islami (IUQI) mengelola beberapa jurnal ilmiah menggunakan platform **Open Journal Systems (OJS)**. Tim editorial yang terdiri dari dosen dan peneliti sering menghadapi kendala teknis yang mengganggu proses publikasi:

- **Server down tanpa alert** — VPS tidak dimonitor. Downtime baru diketahui setelah user komplain. Tidak ada yang tahu kondisi CPU, memory, atau disk server.
- **Email notifikasi gagal kirim** — Konfirmasi submission, notifikasi reviewer, dan keputusan editorial tidak sampai ke author. Proses review molor karena komunikasi terputus.
- **Tidak ada dashboard monitoring** — Tidak ada visibilitas ke performa server. Masalah baru ketahuan setelah berdampak ke pengguna.
- **Server tidak ter-hardening** — Tidak ada firewall, rate limiting, atau proteksi dasar. Server rentan terhadap serangan brute-force.

## Solusi: Infrastruktur andal dengan monitoring real-time

Motekarindo mengambil alih seluruh aspek teknis infrastruktur jurnal IUQI:

- **Maintenance VPS** — Hardening server dengan konfigurasi LEMP teroptimasi, firewall ketat, rate limiting, dan proteksi DDoS. Update rutin OS dan aplikasi. Server kini stabil — **0 downtime** sejak dikelola.
- **Perbaikan sistem email** — Konfigurasi SMTP via layanan relay profesional. Seluruh notifikasi OJS (submission, review, editorial decision) kini terkirim dengan andal. Ditambah alert otomatis jika terjadi kegagalan pengiriman.
- **Setup monitoring Grafana** — Dashboard monitoring real-time menampilkan CPU usage, memory, disk space, dan network traffic. Alert otomatis via WhatsApp jika ada anomali. Semua metrik tercatat dan bisa ditinjau kapan saja — **terukur, terdokumentasi**.
- **Backup database harian** — Backup otomatis dengan retensi mingguan. Database jurnal aman dari kehilangan data.
- **Dokumentasi penuh** — Semua konfigurasi server, kredensial, dan prosedur operasional didokumentasikan. Tim IUQI bisa mengakses dashboard monitoring sendiri — **bisa dirawat tanpa ketergantungan**.

## Hasil

| Metrik | Sebelum | Sesudah |
|--------|---------|---------|
| Monitoring server | Tidak ada | Grafana real-time |
| Email deliverability | Sering gagal | Stabil |
| Response insiden | Tidak terpantau | <15 menit |
| Backup | Tidak rutin | Harian + teruji |

## FAQ

> [!tip]+ **Apakah proses maintenance berisiko mengganggu operasional jurnal?**
> Tidak. Semua update dan perubahan dilakukan di jam sepi traffic. Maintenance rutin dijadwalkan dan dikomunikasikan sebelumnya. Jika ada insiden mendesak, kami bertindak cepat — response time rata-rata di bawah 15 menit.

> [!tip]- **Apakah kami bisa mengakses dashboard monitoring sendiri?**
> Ya. Dashboard Grafana bisa Anda akses kapan saja. Anda bisa melihat kondisi server secara real-time tanpa harus bertanya ke kami. Ini bagian dari standar kami: **Anda tidak terkunci**.

> [!tip]- **Berapa biaya maintenance bulanan?**
> Biaya bisa bervariasi, Tergantung skala, dan permintaan. Sudah termasuk monitoring, backup harian, update keamanan, dan dukungan prioritas.
