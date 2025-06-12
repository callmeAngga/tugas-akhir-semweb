# Suluk Sujinah

Proyek ini bertujuan membangun aplikasi web pencarian translasi bahasa Jawa ke bahasa Indonesia menggunakan pendekatan *Semantic Web*. Data dari naskah *Suluk Sujinah* diubah ke dalam format RDF, disusun ontologi linguistik, dan diakses melalui *SPARQL endpoint* untuk menghasilkan pencarian yang kontekstual dan bermakna melalui antarmuka web yang sederhana dan responsif.

## 🚀 Menjalankan Aplikasi

### 1. Clone Repository
```bash git clone
https://github.com/callmeAngga/tugas-akhir-semweb.git
cd tugas-akhir-semweb
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Apache Jena Fuseki
- Download Apache Jena Fuseki 4.9.0
- Extract dan jalankan:
```bash
./fuseki-server --mem --update /suluksujinah
```

### 4. Load Data RDF
- Akses Fuseki web UI di http://localhost:3030
- Buat dataset baru bernama `suluksujinah`
- Upload file Turtle:
  - File: `src/data/output_suluk.ttl`
  - Format: Turtle (TTL)

### 5. Jalankan Aplikasi
```bash
npm run dev
```

Akses antarmuka pencarian di: http://localhost:3000/pencarian

## 🔍 Panduan Penggunaan

### Pencarian Dasar
- Masukkan kata kunci di kolom pencarian (contoh: "asmara")
- Hasil akan menampilkan:
  - Aksara Jawa asli (dengan rendering font yang tepat)
  - Transliterasi Latin
  - Terjemahan Indonesia
  - Metadata (nomor bab dan baris)

### Fitur Lanjutan

#### Filtering
- **Berdasarkan Bab**: Pilih dari dropdown (Kaca 1-5)
- **Berdasarkan Bagian**: Filter berdasarkan "Asmaradana" atau "Branta Kingking"

#### Mode Pencarian
| Mode | Deskripsi | Contoh Query |
|------|-----------|--------------|
| Semua Field | Pencarian di semua versi teks | "tresna" |
| Aksara Asli | Hanya aksara Jawa | "ꦠꦿꦺꦱ꧀ꦤ" |
| Transliterasi | Hanya teks Latin | "adus" |
| Terjemahan | Hanya bahasa Indonesia | "gembira" |

## 📊 Contoh Query

Coba query yang sudah terverifikasi ini:
```
"yayi"        # Term umum di Kaca 2
"Milaningsun" # Sering muncul di terjemahan
"wuyung"      # Muncul di Branta Kingking
```

## 🖼️ Screenshot Aplikasi
![Screenshot aplikasi](/public/suluk-sujinah.png)
![Screenshot aplikasi](/public/suluk-sujinah-2.png)
![Screenshot aplikasi](/public/suluk-sujinah-3.png)
![Screenshot aplikasi](/public/suluk-sujinah-4.png)
