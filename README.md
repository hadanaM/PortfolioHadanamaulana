# Portfolio — Hadana Maulana

Portofolio pribadi satu halaman dengan halaman detail per proyek.
Dibangun dengan **Astro 7** + **Tailwind CSS 4**, output statis, tanpa framework JS.
Berpasangan bahasa: **Indonesia** (default) dan **English**.

## Menjalankan

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # hasil di dist/
npm run preview    # pratinjau hasil build
npm run check      # validasi tipe Astro
```

## Menambah konten

Semua konten ada di `src/data/` — tidak perlu menyentuh komponen.

| File | Isi |
|---|---|
| `src/data/profile.ts` | Nama, ringkasan, sosial, path CV |
| `src/data/projects.ts` | Daftar proyek (ID + EN) |
| `src/data/experience.ts` | Pengalaman kerja / magang |
| `src/data/skills.ts` | Kelompok keahlian |
| `src/data/i18n.ts` | String antarmuka tiap bahasa |

### Menambah proyek baru

Tambahkan satu objek ke array `projects` di `src/data/projects.ts`:

```ts
{
  slug: 'nama-proyek',        // jadi URL /projects/nama-proyek
  category: 'web',            // 'web' | 'network' | 'docs'
  year: 2026,
  featured: true,             // opsional, tampil badge "Unggulan"
  tech: ['Laravel', 'MySQL'],
  gallery: [{ src: '/images/projects/nama-1.svg', alt: { id: '...', en: '...' } }],
  links: { repo: 'https://...', demo: 'https://...' },  // opsional
  content: { id: { ... }, en: { ... } },
}
```

Halaman detail (ID & EN) dan sitemap ikut ter-update otomatis.

## Mengganti placeholder

- **CV** → timpa `public/cv.pdf`
- **Foto & sertifikat** → timpa file di `public/images/experience/` dan `public/images/certificates/`
- **Gambar proyek** → timpa file di `public/images/projects/`
- **Foto profil** → lihat komentar di `src/components/Hero.astro`

## Struktur

```
src/
├── components/     # Nav, Hero, ProjectsGrid, Experience, Skills, Contact, Footer
├── data/           # seluruh konten
├── layouts/        # BaseLayout (SEO, hreflang, tema)
├── pages/
│   ├── index.astro               # Indonesia
│   ├── en/index.astro            # English
│   ├── projects/[slug].astro     # detail ID
│   └── en/projects/[slug].astro  # detail EN
└── styles/global.css             # design token & komponen dasar
```

## Catatan teknis

- **Tema gelap** dikontrol class `.dark` pada `<html>`, disimpan di `localStorage`.
- **Reveal saat scroll** memakai `IntersectionObserver` tanpa library, dan menghormati `prefers-reduced-motion`.
- **Font** self-host (`@fontsource-variable/inter`) — tidak ada request ke pihak ketiga.
- **Bahasa** pakai routing i18n Astro (`/` = ID, `/en/` = EN) lengkap dengan `hreflang`.
