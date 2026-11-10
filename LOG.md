# Log Perubahan

## 2026-11-03

### 1. Code Style & Formatter

- Membuat skill global `code-style` di `~/.config/opencode/skills/code-style/SKILL.md`
  - Aturan: maksimal 100 karakter per baris untuk semua project
- Memasang Prettier di project ini:
  - `package.json` → devDependency `prettier` + `prettier-plugin-astro`, script `format` & `format:check`
  - `.prettierrc` → `printWidth: 100`, plugin astro
  - `.prettierignore` → `node_modules/`, `dist/`, `.astro/`
- Menjalankan `npm run format` ke seluruh file di `src/` dan root

### 2. Foto Profil (`src/components/Hero.astro`)

- Mengganti placeholder inisial "HM" (div gradien) dengan `<img src="/profile.jpg">`
- Menambahkan `object-top` supaya bagian atas foto (jidat) tidak terpotong

## 2026-11-04

### 3. Foto Profil Navbar & Footer

- `src/components/Nav.astro` (brand pojok kiri atas) → ganti inisial "HM" jadi foto
- `src/components/Footer.astro` (logo pojok kiri bawah) → ganti inisial "HM" jadi foto

### 4. Perapian Bentuk Foto Navbar & Footer

- Pembungkus diubah dari `rounded-xl` + img `rounded-full` menjadi
  pembungkus `overflow-hidden rounded-full` + img `object-cover object-top`
  - Sebelumnya sudut kotak dan lingkaran tidak cocok → tepi tidak rapi
  - Sekarang lingkaran penuh, rapi di semua sisi

### 5. Crop Foto Kartu Profil (Hero)

- `src/components/Hero.astro` → foto kartu diberi `object-top`
  - Crop hanya bagian **bawah**, jidat tetap utuh

### 6. Galeri Foto Kegiatan Multi-Foto (light box)

- `src/data/experience.ts` → `photo` diganti `photos: string[]` (boleh lebih dari 1)
  - Contoh magang PT SAMI: 2 foto (`sami1.jpeg` + placeholder lama)
- `src/components/Experience.astro`:
  - Kartu tampilan tetap 1 (foto pertama) + badge jumlah foto
  - Klik "Foto kegiatan" → light box, geser kiri/kanan, panah keyboard,
    swipe layar sentuh, tutup dengan Esc atau klik luar

### 7. Section Sertifikat & Prestasi (baru)

- `src/data/certificates.ts` → data sertifikat (KRI 2026 KRAI UNEJ + pelatihan)
- `src/components/Certificates.astro` → grid kartu sertifikat
- `public/images/certificates/kri-2026-krai.svg` → placeholder KRI 2026
- `public/images/certificates/pelatihan-1.svg` → placeholder pelatihan
- `src/data/i18n.ts` → string ID/EN section sertifikat
- Dipasang di `src/pages/index.astro` & `src/pages/en/index.astro`
  (urutan: Proyek → Pengalaman → Keahlian → **Sertifikat (04)** → Kontak (05))

### 8. Paragraf "Tentang saya" Rata Kanan-Kiri

- `src/components/Hero.astro` → tambah `text-justify hyphens-auto`

### 9. Navbar: Beranda & Tentang saya

- `src/data/i18n.ts` → tambah `nav.home`, `nav.about` (ID + EN)
- `src/components/Nav.astro` → link: Beranda, Tentang saya, Proyek,
  Pengalaman, Keahlian, Sertifikat, Kontak
- `src/components/Footer.astro` → link footer ikut ditambah
- `src/components/Hero.astro` → `id="about"` pada blok "Tentang saya"
- Nav desktop pindah breakpoint `md` → `lg` (7 link; layar sedang pakai hamburger)

### 10. Posisi Scroll Tepat di Bawah Header

- `src/styles/global.css` → `scroll-padding-top: 5.5rem` → `4.75rem`
  (header sticky tingginya 4rem + jarak kecil)
- Hapus `scroll-mt-24` dari semua section — sebelumnya offset dobel
  (`scroll-padding-top` + `scroll-mt`) sehingga konten mendarat terlalu
  jauh ke bawah / terasa di tengah layar

### 11. Card Proyek Simetris

- `src/components/ProjectsGrid.astro` → ganti masonry (CSS columns) jadi `grid`
  - Semua kartu dalam satu baris tingginya sama
  - Tombol "Lihat detail" disemprot ke bawah kartu (`mt-auto`)

### 12. Email → Web Email

- `src/data/profile.ts` → href email diarahkan ke Gmail Compose
  (`https://mail.google.com/mail/?view=cm&to=...`) — klik langsung membuka web email
- `src/components/Contact.astro` → kartu email jadi link eksternal (tab baru);
  tombol "Salin email" tetap menyalin + muncul "Tersalin!"
- `src/components/Hero.astro` → link email di kartu hero ikut `target="_blank"`

### 13. Anchor Navbar Disamakan dengan "Tentang saya"

- Penyebab: section punya padding atas `py-20 sm:py-28` (5–7rem), jadi saat
  anchor ke `<section>`, konten (eyebrow/judul) mendarat jauh di bawah header.
  `#about` tidak punya padding → mendarat pas di bawah header.
- Solusi: pindahkan `id` dari `<section>` ke `<div class="shell">` di dalamnya
  (`projects`, `experience`, `skills`, `certificates`, `contact`) — `.shell`
  tidak punya padding atas, jadi semua section mendarat sama persis dengan
  `#about`. `scroll-padding-top: 4.75rem` tetap dipertahankan.

### 14. Footer Disederhanakan

- `src/components/Footer.astro` → hapus blok foto profil + nama, teks
  disclaimer placeholder, dan link nav di footer. Footer kini hanya baris
  copyright: `© tahun Nama. Hak cipta dilindungi.`
- `src/data/i18n.ts` → hapus string `footer.builtWith` ("Dibangun dengan
  Astro & Tailwind CSS") dan `footer.disclaimer`

### 15. Pengalaman Tanpa Aset (disembunyikan, bukan placeholder)

- `src/data/experience.ts` → `photos` & `photoAlt` jadi opsional (`photos?`)
  - Asisten Praktikum: foto placeholder dihapus (tidak ada dokumentasi);
    sertifikat `SERTIF ASPRAK.jpg` tetap ada
  - Pengajar Robotik: sertifikat placeholder dihapus (tidak ada sertifikat);
    3 foto asli (`sd/sd1-3.jpeg`) tetap ada
- `src/components/Experience.astro` → tombol "Foto kegiatan" & "Sertifikat"
  hanya dirender kalau asetnya ada (`item.photos?.length`, `item.certificate`)
  - Baris "Foto & sertifikat" ikut sembunyi kalau keduanya kosong

### 16. Kontak: Tambah Instagram

- `src/components/Icon.astro` → tambah ikon `instagram` (Props + path SVG)
- `src/data/profile.ts` → socials baru: Instagram
  (`https://www.instagram.com/hadana_13?psln=bGt5dHNwM3k0NXF5`, `@hadana_13`)
- `src/components/Contact.astro` → kartu kontak ke-4: Instagram (tab baru)
- `src/components/Hero.astro` → ikon sosial di hero: `instagram` ikut tampil
- `src/data/i18n.ts` → string `contact.instagram` (ID + EN)

### 17. Persiapan Hosting Vercel (domain `portfolio-hadana`)

- `astro.config.mjs` → `site` ganti ke `https://portfolio-hadana.vercel.app`
  (dipakai untuk sitemap & URL absolut)
- `package.json` + `package-lock.json` → `name` proyek ganti
  `portfolio-hadana-maulana` → `portfolio-hadana`
  (nama ini yang jadi dasar subdomain Vercel saat import project)

### 18. Pulihkan File yang Tak Sengaja Terhapus

- `src/data/projects.ts` → dipulihkan dari git (`git restore`)
  (file data proyek — judul, kategori, gallery, deskripsi ID/EN)
- `public/images/projects/` → 4 gambar dipulihkan dari git:
  `modul-robotik-1.svg`, `modul-robotik-2.svg`, `web-mebel-1.svg`, `web-mebel-2.svg`
- File placeholder lama yang terhapus (asisten-praktikum, magang-pt-sami,
  pengajar-robotik) **tidak** dipulihkan — memang sudah diganti/dihapus
  saat penyesuaian aset pengalaman
- Verifikasi: semua referensi gambar di `projects.ts`, `experience.ts`,
  `certificates.ts` ada → build sukses 14 halaman

### 19. Galeri Proyek Bisa Digeser (lightbox) + Foto Ditambah

- `src/data/projects.ts` → gallery Web Mebel bertambah dari 2 → **4 foto**
  (katalog, kelola produk admin, keranjang belanja, checkout Midtrans —
  `tokomabel1-4.png`, sebelumnya `tokomabel2/3` belum terpakai)
- `src/components/ProjectDetail.astro`:
  - Foto utama halaman detail jadi tombol — klik buka lightbox (ada badge
    `1 / n` di pojok kanan bawah)
  - Thumbnail galeri: dulu klik buka tab baru (`target="_blank"`), sekarang
    klik buka lightbox di halaman yang sama
  - Lightbox sama dengan pengalaman: tombol ←/→, panah keyboard,
    swipe layar sentuh, Esc/klik luar untuk tutup, counter + caption
  - Caption pakai alt foto sesuai bahasa (ID/EN)

### 20. Galeri Proyek Jadi Carousel (tampil 2, ada geseran)

- `src/components/ProjectDetail.astro`:
  - Grid thumbnail (semua foto tampil sekaligus) → **carousel**: maksimal
    **2 foto** tampil per layar (1 di mobile), sisanya digeser pakai
    tombol ←/→ atau swipe di layar sentuh
  - Counter kecil `1 / 2` di sebelah judul "Galeri"
  - Tombol geser otomatis **sembunyi** kalau foto muat semua
    (mis. proyek dengan 2 foto → tidak ada tombol, tampil langsung 2)
  - Klik foto tetap buka lightbox (geser foto di lightbox terpisah:
    panah keyboard, ←/→, swipe, Esc)
  - Swipe carousel dibedakan dari klik supaya tidak ikut buka lightbox

### 21. Deploy ke Vercel (Hosting Live)

- `astro.config.mjs` → `site: 'https://portfolio-hadana.vercel.app'`
- `package.json` + `package-lock.json` → nama proyek `portfolio-hadana`
- `vercel.json` (baru) → `framework: astro`, `buildCommand: npm run build`,
  `outputDirectory: dist`, `cleanUrls: true`
- Langkah CLI:
  - `vercel login` → sukses (device code)
  - `vercel project create portfolio-hadana` → project dibuat
  - `vercel link --project portfolio-hadana` → `.vercel/project.json`
    - `.env.local` (OIDC token, otomatis masuk `.gitignore`)
  - `vercel deploy --prod --yes` → **Ready** (build ±6 detik)
- Verifikasi live `https://portfolio-hadana.vercel.app`:
  - Halaman ID & EN: section sertifikat, Instagram, footer baru ✓
  - `/projects/web-mebel`: 4 foto + carousel + lightbox ✓
- Update berikutnya cukup: `npm run deploy`
  (= `npx -y vercel@65.14.0 deploy --prod --yes` — sudah diuji, Ready)
- `package.json` → script `deploy` ditambahkan

### 22. Push ke GitHub

- Install GitHub CLI (`gh` 2.63.2) ke `~/.local/bin/gh` (tanpa sudo)
- `gh auth login` (device flow, kode one-time) → login sebagai `hadanaM`
- `gh repo create PortfolioHadanamaulana --public --source=. --remote=origin --push`
  - Repo: **https://github.com/hadanaM/PortfolioHadanamaulana**
  - Branch `main` ter-track ke `origin/main`, commit `0d7b6b0` ter-push
- `.gitignore` sudah mengecualikan `.vercel/`, `.env*`, `dist/`, `node_modules/`

### 23. Log

- File `LOG.md` ini ditulis & diperbarui setiap ada perubahan

---

## File yang berubah

| File                                            | Perubahan                                                    |
| ----------------------------------------------- | ------------------------------------------------------------ |
| `~/.config/opencode/skills/code-style/SKILL.md` | Baru (skill global)                                          |
| `.prettierrc`                                   | Baru                                                         |
| `.prettierignore`                               | Baru                                                         |
| `package.json`                                  | Tambah Prettier + script format                              |
| `LOG.md`                                        | Baru (log ini)                                               |
| `src/components/Hero.astro`                     | Foto profil, `object-top`, `id="about"`, teks justify, email |
| `src/components/Nav.astro`                      | Foto profil, link Beranda/Tentang/Sertifikat, breakpoint lg  |
| `src/components/Footer.astro`                   | Disederhanakan jadi baris copyright saja                     |
| `src/components/Icon.astro`                     | Tambah ikon Instagram                                        |
| `src/components/Experience.astro`               | Galeri multi-foto + light box, tombol aset opsional          |
| `src/components/ProjectsGrid.astro`             | Grid kartu proyek simetris                                   |
| `src/components/Contact.astro`                  | Kartu email webmail + salin email + kartu Instagram          |
| `src/components/Certificates.astro`             | Baru — section sertifikat                                    |
| `src/data/experience.ts`                        | `photos?` opsional, aset placeholder dihapus                 |
| `src/data/certificates.ts`                      | Baru — data sertifikat                                       |
| `src/data/profile.ts`                           | Email → Gmail Compose, tambah Instagram                      |
| `src/data/i18n.ts`                              | Sertifikat, nav home/about, Instagram; footer disederhanakan |
| `src/components/ProjectDetail.astro`            | Lightbox + carousel galeri proyek (geser/keyboard/swipe)     |
| `src/data/projects.ts`                          | Gallery Web Mebel 2 → 4 foto                                 |
| `src/pages/index.astro`                         | Pasang section sertifikat                                    |
| `src/pages/en/index.astro`                      | Pasang section sertifikat                                    |
| `src/styles/global.css`                         | `scroll-padding-top` disesuaikan                             |
| `public/images/certificates/*.svg`              | Placeholder KRI 2026 + pelatihan                             |
| File lain di `src/` & root                      | Diformat Prettier                                            |
