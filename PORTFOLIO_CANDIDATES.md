# Portfolio Candidates — Sausan Asma' Mufiidah

> **Inventaris file yang layak masuk website portfolio.**
> Hasil scan: 20 Oktober 2026 · 1.660 file kandidat · kedalaman maks. 3 level.

---

## Cara pakai file ini

1. Baca **Bagian 1** (shortlist) → itu yang masuk halaman utama.
2. Bagian 2–5 dipakai untuk halaman "More Projects", "Certificates", dan aset visual.
3. Bagian 6 adalah daftar **terlarang publik** — jangan pernah di-upload.
4. Setiap kali mau publish satu proyek, **verifikasi ulang path-nya** (folder bisa dipindah/dihapus).

### Legenda

| Simbol | Arti |
|---|---|
| ✅ | Siap dipakai — file ada, jelas, aman dipublikasikan |
| 🟡 | Ada, tapi perlu dicek/dirapikan dulu sebelum tampil |
| ⛔ | Jangan publik — pribadi / sensitif |
| `BESAR` | File > 25 MB — jangan commit ke Git, pakai screenshot atau link eksternal |

### Prefix path

| Prefix | Root |
|---|---|
| `[DL]` | `C:\Users\MyBook Hype AMD\Downloads\` |
| `[SA]` | `C:\SAUSAN_ASMA\sausan\` |

### Aturan privasi

- File bertanda ⛔ **tidak ditulis path lengkapnya** di dokumen ini. Hanya kategorinya.
- Tidak ada data keuangan, data keluarga, nomor identitas, atau foto pribadi yang dicatat.
- Scan hanya membaca **nama file dan metadata** (ukuran, tanggal). Isi dokumen tidak dibuka.

---

## 1. Flagship — masuk halaman utama

Target 6 kartu. Setiap kartu butuh: judul, problem, stack, hasil, dan **minimal 1 bukti visual**.

| # | Proyek | Path | Stack | Bukti visual | Nilai jual | Status |
|---|---|---|---|---|---|---|
| 1 | **Olist E-Commerce BI** | `[SA]KULIAH\DATA\olist_ecommerce_query` | SQL (staging → star schema → 5 halaman analisis), Power BI, DAX | `olist_dashboard.pbix` `BESAR` (38 MB), `docs\powerbi\Screenshot 2026-10-16 020524.png`, 9 dok. spesifikasi layout & DAX | Satu-satunya proyek yang menunjukkan pipeline data **hulu ke hilir** sampai dashboard eksekutif | ✅ |
| 2 | **Job Market ETL Pipeline** | `[SA]KULIAH\DATA\internship` | Python (95 file), scraping Glints / Kalibrr / JobStreet / LinkedIn, validasi berlapis | `internship_bi_data_analyst.xlsx`, `verification_report.md`, `captain_verification_log.md`, 12 file JSON hasil | Bukti ketelitian: ada lapisan audit & verifikasi, bukan sekadar scraping | ✅ |
| 3 | **Saintara** — analisis karakter | `[SA]KULIAH\SEMESTER_3\Saintara` | Laravel, Tailwind, MySQL | Paper OOP (docx + pdf), `[DL]db_saintara.sql`, `[DL]Logo Saintara.png`, `[DL]Activity Diagram Website Saintara.docx`, `[DL]Use Case Diagram Final.png` | Full-stack + analisis sistem (OOP, ERD, use case) — bukan cuma coding | ✅ |
| 4 | **Visensa** — IoT & hand tracking 3D | `[SA]KULIAH\BELAJAR\visensa-app` | Next.js, MediaPipe, Three.js | `public\models\robotic_prosthetic_arm.glb` `BESAR` (15 MB), `HandModel.tsx`, `WebCamTracker.tsx`, `useMediaPipe.ts` | Paling teknis & paling visual — cocok jadi hero project | ✅ |
| 5 | **ReKaPri / AgriFresh** | `[SA]KULIAH\SEMESTER_4\ReKapRi` | React, Vite, TypeScript, shadcn, prototipe Figma | `ReKapRi.zip`, `[DL]Logo Rekapri.png`, `[DL]Tumbuh Berbagi.zip` | Produk agribisnis: ada alur desain → prototipe → implementasi | ✅ |
| 6 | **ReCircle** — logistik sampah | `[SA]KULIAH\SEMESTER_4\Web\recircle` + `recircle-fix` | React, Node/Express, Leaflet, MySQL | `[DL]ReCircle-Database.drawio.png`, ERD, `[DL]Untitled Diagram-Copy of erd.drawio.png` | Spatial/logistics: routing pickup per cluster, audit material | 🟡 perlu cek status build |

**Cadangan flagship** (kalau salah satu di atas ternyata belum jalan):

| Proyek | Path | Stack | Status |
|---|---|---|---|
| Furniture E-Commerce | `[SA]business\portfolio\furniture-ecommerce\e-commerce` | Laravel, Vite, Tailwind, PHPUnit | ✅ |
| Portfolio Agency | `[SA]business\portfolio\portfolio-agency` | React, Vite, Tailwind, ESLint | ✅ |

---

## 2. Proyek pendukung — halaman "More Projects"

### Data & analitik

| Proyek | Path | Isi | Status |
|---|---|---|---|
| **AmesHousing Data Mining** | `[SA]KULIAH\SEMESTER_4\Data_Mining\DM_J0403241100` | `AmesHousing.Rmd` (34 KB), laporan PDF, presentasi PDF, `.R` scripts | ✅ |
| **Clustering Kab/Kota Jabar** | `[SA]KULIAH\SEMESTER_4\Data_Mining\DM_J0403241100` | `cluster.R`, `dataset_cluster_kabupaten_kota_indonesia.csv`, `hasil_clustering_kabupaten_kota.csv`, `jabar_cluster_2023.xlsx` | ✅ |
| **Fikfair 2026** | `[SA]TEST\fikfair_report` + `[DL]data-science-competition-fikfair2026` | `generate_report.py`, folder `output`, `competition_rules.md`, data dictionary, train/test | 🟡 perlu notebook/script utama |
| **Employee Promotion Prediction** | `[DL]Promosi_Karyawan_Final.ipynb` (+ 3 versi lain) | Notebook klasifikasi | 🟡 pilih 1 versi final saja |
| **Data Scientist SDM** | `[DL]Ilmuwan_Data_SDM_Tinggi_Asli.ipynb` | Notebook 1,2 MB | 🟡 verifikasi topik |
| **Deloitte Telemetry** | `[DL]daikibo-telemetry-data.json` | Data task Deloitte | ✅ pasangkan dengan sertifikatnya |
| **Time Series / UAS** | `[DL]UAS.Rmd`, `[DL]UAS.tex`, `[DL]P10_Laporan_EstimasiPrediksi.Rmd` | Analisis deret waktu | 🟡 cek output knitted |

### WebGIS & spasial

| Proyek | Path | Isi | Status |
|---|---|---|---|
| **WebGIS Praktikum** | `[SA]KULIAH\SEMESTER_5\SIG` | 8 folder praktikum, `PETA.qgz`, `Praktikum1.qgz`, `praktikum2_kebakaran_di_kuningan.qgz` | ✅ |
| **WebGIS Report** | `[DL]WebGIS Presentation.pdf`, `[DL]SIG X MANPRO 9 (SIGman).pdf` | Presentasi & laporan | ✅ |
| **Referensi WebGIS** | `[DL]Veenendaal 2017 - Review of Web Mapping eras trends and directions.pdf` | Bacaan, **bukan karya** — jangan diklaim | ⛔ bukan portfolio |

### Computer vision & citra

| Proyek | Path | Isi | Status |
|---|---|---|---|
| **Pengolahan Citra** | `[SA]KULIAH\SEMESTER_5\CITRA` | `intro.ipynb`, `J0403241100_..._Pertemuan3.ipynb` (4,8 MB) | ✅ |
| **Viskom — praproses & klasifikasi** | `[SA]KULIAH\SEMESTER_5\VISKOM` | `[ComVis]_Praktikum_2_Praproses_Data.ipynb`, `Tugas1_J0403241100.ipynb` | ✅ |
| **Viskom Diabetes** | `[DL]viskomdiabetes.ipynb`, `[DL]viskom4.ipynb` | Notebook + export PDF Colab | ✅ |

### Aplikasi web kuliah

| Proyek | Path | Isi | Status |
|---|---|---|---|
| **Laravel CRUD suite** | `[SA]KULIAH\SEMESTER_4\Web` | `laravel-12`, `login-app`, `produk-app`, `barang-app`, `chartapp`, `fe`, `produk` | 🟡 pilih 1–2 yang paling rapi |
| **UTS/UAS Pemrograman Web** | `[SA]KULIAH\SEMESTER_4\Web\UTS`, `\UAS`, `UTS PW J0403241100 Sausan Asma' Mufiidah.zip` | Tugas besar | ✅ |
| **Tumbuh Berbagi (Sisfor)** | `[SA]KULIAH\SEMESTER_4\Sisfor\TumbuhBerbagi` | Aplikasi + 7 screenshot UI | ✅ |
| **Smart Primary Care Triage** | `[DL]PatientDashboard.jsx`, `[DL]Smart_Primary_Care_Triage.pptx`, `[DL]triaging patient.pdf` | Dashboard triage + deck | 🟡 cek apakah karya sendiri |
| **KPL — praktikum & perbaikan kode** | `[SA]KULIAH\SEMESTER_3\KPL` | Laporan modul 5 & 6, `Jawaban.pdf`, screenshot before/after kode, folder `login` | ✅ |
| **JS mini app (Bolt)** | `[DL]project-bolt-sb1-vo6fsufx (1)\project` | Vite + vanilla JS | 🟡 kecil, mungkin tidak perlu |
| **Postur tracking** | `[SA]KULIAH\BELAJAR\postur` | Next.js pose tracker | 🟡 cek kelayakan |

### Basis data

| Proyek | Path | Isi | Status |
|---|---|---|---|
| **Saintara DB** | `[DL]db_saintara.sql` (65 KB), `[DL]db_saintaraa.sql` (34 KB), `[SA]KULIAH\SEMESTER_3\Saintara` | Skema + data | ✅ |
| **Latihan SQL** | `[SA]KULIAH\SEMESTER_3\SISTEM BASIS DATA` | `tbl_mahasiswa_Praktikum4.sql`, `tblbarang.sql`, `tblMahasiswa.sql` | 🟡 latihan, bukan proyek |
| **SIMAK** | `[DL]simak.sql`, `[DL]b_simak.sql` | Skema akademik | 🟡 cek konteks |

### Latihan R / statistika

| Path | Status |
|---|---|
| `[SA]KULIAH\SEMESTER_2\latProstat\` (5 file `.Rmd`) | 🟡 latihan |
| `[DL]M2.Rmd` – `[DL]M1314.Rmd` (8 file) | 🟡 latihan |
| `[DL]Kelompok1.R`, `[DL]1.R`, `[DL]9.3.3.R` | 🟡 latihan |

---

## 3. Sertifikat & prestasi

| File | Perkiraan isi | Status |
|---|---|---|
| `[DL]Silver Medal_Sausan Asma' Mufiidah_Jihan Bunga Firdaus_Adzkia Nifa Adha.pdf` | Medali perak (tim) | ✅ |
| `[DL]Sausan Asma' Mufiidah - Deloitte - Data Analytics Job Simulation.pdf` | Sertifikat Deloitte | ✅ |
| `[DL]Sausan Asma' Mufiidah - Deloitte - Job Simulation.pdf` | Sertifikat Deloitte (versi lain) | ✅ pilih satu |
| `[DL]BCG X Introduction to Data.pdf` | BCG X simulation | ✅ |
| `[DL]BCG X Introductions to Data.pdf` | BCG X simulation | ✅ duplikat — pilih satu |
| `[DL]bcgX.pdf` | BCG X simulation | 🟡 duplikat — pilih satu |
| `[DL]Ciptaan Karya_Website Vora.pdf` | Bukti ciptaan / hak cipta VORA | ✅ |
| `[DL]Surat Pernyataan Hak Cipta_Sausan Asma' Mufiidah.pdf` | Pernyataan HAKI | ✅ |
| `[SA]KULIAH\LOMBA\AMCC 2026\Surat Orisinalitas Karya_VISENSA-signed.pdf` | Orisinalitas lomba AMCC | ✅ |
| `[DL]Sausan Asma' Mufiidah_J0403241100_Human Capital-signed.pdf` | Sertifikat/keterangan Human Capital | 🟡 verifikasi isi |
| `[DL]Sausan Asma' Mufiidah_J0403241100_Probies Talent Acquisition.pdf` | Tugas Probies DWDG | 🟡 verifikasi isi |

**CV untuk tombol download:** `[DL]Sausan asma' mufiidah-resume.pdf` (versi 28-09-2026). Ada juga versi `.docx` dan beberapa iterasi lama — pakai yang paling baru saja.

**Jangan diklaim sebagai karya:** `[DL]Pink Bold Modern Creative Portfolio Presentation.pdf` — itu template presentasi, bukan portofolio buatan sendiri.

---

## 4. Aset visual siap pakai

### Screenshot UI (Tumbuh Berbagi / Sisfor)

`[DL]` → `Siswa Dashboard.png`, `Siswa Statistik.jpg`, `Siswa Jadwal.jpg`, `Siswa Latihan Soal.png`, `Siswa Profile.jpg`, `Siswa Kegiatan.png`, `Siswa Daftar Soal.jpg`

### Diagram & arsitektur

| File | Untuk proyek |
|---|---|
| `[DL]ReCircle-Database.drawio.png` | ReCircle |
| `[DL]Untitled Diagram-Copy of erd.drawio.png` | ReCircle |
| `[DL]use case diagram.drawio.png` | Saintara |
| `[DL]Use Case Diagram Final.png` | Saintara |
| `[DL]Activity Diagram Website Saintara.docx` | Saintara |
| `[DL]ss.drawio.png` | 🟡 cek konteks |
| `[DL]WHEHE.drawio.png` | 🟡 cek konteks |
| `[DL]software-development-life-cycle.png` | Materi, bukan karya |

### Logo & bukti kode

- `[DL]Logo Rekapri.png` → ReKaPri
- `[DL]Logo Saintara.png` → Saintara
- `[DL]Source code KPL.png` → bukti praktikum KPL

### Dataset (kalau mau bikin halaman "open data")

| Path | Isi | Status |
|---|---|---|
| `[DL]indeks_komposit_per_kelurahan_di_kota_bogor\` | CSV + metadata PDF | ✅ |
| `[DL]SuperMarket Analysis.csv` | Dataset retail | 🟡 cek sumber |
| `[DL]iris\` | `iris.data`, `bezdekIris.data`, `iris.names` | ✅ dataset publik |
| `[DL]dataset\Pertemuan3` | Dataset praktikum | 🟡 |
| `[DL]olympics.csv`, `[DL]university_towns.txt`, `[DL]tinggi_badan.csv`, `[DL]transact.csv` | Dataset latihan | 🟡 |

---

## 5. Yang sudah ada di website

`[SA]KULIAH\DATA\internship\PORTFOLIO` adalah **project Next.js portfolio yang sudah jadi**, berisi:

| File | Fungsi |
|---|---|
| `app\page.tsx` (34 KB) | Halaman utama |
| `PORTFOLIO_AUDIT.md` | Katalog proyek + problem statement + metodologi + business value |
| `POSITIONING.md` | Narasi positioning: *"Analytical developer bridging structured software architecture and data-driven decision intelligence"* |
| `app\globals.css`, `components\ThemeToggle.tsx` | Styling & dark mode |

**Proyek yang sudah ditulis di `PORTFOLIO_AUDIT.md`:** BCG X Churn, AgriFresh/ReKaPri, ReCircle, Visensa.

**Tugas berikutnya:** cocokkan 4 proyek itu dengan bukti visual di Bagian 1–4 di atas. Yang belum punya screenshot: BCG X dan ReCircle.

---

## 6. ⛔ Jangan pernah dipublikasikan

Daftar ini sengaja **tanpa path lengkap**.

| Kategori | Contoh jenis file |
|---|---|
| Data keuangan keluarga | Slip gaji, surat permohonan cicilan, surat pernyataan pembayaran |
| Surat keterangan akademik | Surat keterangan aktif mahasiswa, surat izin tidak masuk, transkrip/KHS |
| Dokumen beasiswa | Formulir aplikasi beasiswa, berkas `scholarship` |
| Dokumen internal organisasi | SOP, rundown, dresscode, daftar hadir, notulen, scoring sheet rekrutmen |
| Foto pribadi & kegiatan | Semua `WhatsApp Image*`, `Screenshot*`, folder dokumentasi SIKRAB |
| Berkas CV/KTM mentah | Scan KTM, KTP, ijazah, foto dokumen identitas |
| Installer & aplikasi | Semua `.exe` / `.msi` (Node, Power BI, Tableau, Steam, dsb.) |
| File tak jelas pemiliknya | `Sausan Asma' Mufiidah (1)–(5).pdf` — 5 file identik 0,89 MB, belum diverifikasi |

Kalau salah satu dari daftar ini ternyata dibutuhkan (misal transkrip untuk lamaran kerja), kirim **manual lewat email**, jangan taruh di website.

---

## 7. Checklist sebelum publish

- [ ] Path proyek masih ada & bisa dibuka
- [ ] Minimal 1 screenshot per proyek (bukan foto layar miring)
- [ ] README proyek sudah dirapikan (tujuan, stack, cara jalanin)
- [ ] Tidak ada API key / password / `.env` di repo yang di-link
- [ ] File `BESAR` tidak ikut di-commit
- [ ] Nama file sudah konsisten (tidak ada `Untitled`, `test`, `gatau`, `WHEHE`)
- [ ] Sertifikat sudah dipotong ke bagian yang relevan (kalau ada data pribadi)
- [ ] Cek ulang Bagian 6 sebelum push

---

*Dokumen ini hasil scan nama file & metadata pada 20 Oktober 2026. Isi file tidak dibuka. Verifikasi ulang sebelum dipakai.*
