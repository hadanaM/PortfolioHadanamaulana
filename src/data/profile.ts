import type { Locale } from './i18n';

/** Sosok pemilik portofolio. */
export const profile = {
  name: 'Hadana Maulana',
  initials: 'HM',

  /** Judul hero — pendek, dipakai di <title> juga. */
  headline: {
    id: 'Lulusan Teknik Informatika',
    en: 'Informatics Engineering Graduate',
  },

  /** Baris kedua hero (lebih panjang, warna aksen). */
  specialty: {
    id: 'IT Support & Network Engineering Enthusiast',
    en: 'IT Support & Network Engineering Enthusiast',
  },

  /** Ringkasan 2–3 baris. */
  summary: {
    id: 'Mahasiswa Teknik Informatika UNISSULA Semarang yang berdedikasi dengan kombinasi keahlian teknis IT, operasional lapangan, dan administrasi. Berpengalaman sebagai Asisten Praktikum dan Pengajar Robotik dalam memfasilitasi pembelajaran serta mengelola dokumentasi teknis. Memiliki pengalaman operasional hardware dan perangkat mekanik dari magang industri (PT SAMI) serta organisasi robotik. Terbiasa menyusun Rencana Anggaran Biaya (RAB), mengelola inventarisasi alat, dan menyusun laporan secara terstruktur. Memiliki antusiasme tinggi untuk mempelajari pemeliharaan sistem IT, troubleshooting, serta mendalami bidang Network Engineering secara langsung di industri.',
    en: 'Dedicated Informatics Engineering student at UNISSULA Semarang with a combination of IT technical skills, field operations, and administration. Experienced as a Lab Assistant and Robotics Instructor, facilitating learning and managing technical documentation. Has hands-on hardware and mechanical equipment experience from an industrial internship (PT SAMI) and a robotics organization. Accustomed to preparing Bills of Quantities (BoQ), managing equipment inventory, and writing structured reports. Highly motivated to learn IT system maintenance, troubleshooting, and to deepen Network Engineering expertise directly in industry.',
  },

  /** Lokasi & ketersediaan (ditampilkan di hero). */
  location: 'Semarang, Indonesia',

  socials: [
    {
      key: 'email',
      href: 'mailto:danadunu13@gmail.com',
      label: 'danadunu13@gmail.com',
      display: 'danadunu13@gmail.com',
    },
    {
      key: 'linkedin',
      href: 'https://www.linkedin.com/in/hadana-maulana-b0b59924b/',
      label: 'LinkedIn',
      display: 'hadana-maulana',
    },
    {
      key: 'github',
      href: 'https://github.com/hadanaM',
      label: 'GitHub',
      display: 'hadanaM',
    },
  ] as const,

  /**
   * Path CV di /public. Ganti `cv.pdf` dengan berkas asli Anda.
   * `download` memaksa browser mengunduh alih-alih membuka tab baru.
   */
  cv: {
    href: '/cv.pdf',
    filename: 'CV-Hadana-Maulana.pdf',
  },
} satisfies Record<string, unknown>;

/** Helper ambil nilai berbahasa. */
export function localized(
  value: Record<Locale, string>,
  locale: Locale,
): string {
  return value[locale];
}
