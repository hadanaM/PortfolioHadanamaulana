import type { Locale } from './i18n';

export interface ExperienceContent {
  role: string;
  org: string;
  summary: string;
  highlights: string[];
}

export interface Experience {
  slug: string;
  /** Tampilan periode (sudah diformat per bahasa). */
  period: Record<Locale, string>;
  /** Untuk pengurutan: angka bulan mulai. */
  order: number;
  /** Boleh lebih dari satu — tampilan kartu hanya pakai foto pertama.
   *  Kosongkan/hapus field ini jika memang tidak ada foto kegiatan. */
  photos?: string[];
  photoAlt?: Record<Locale, string>;
  certificate?: string;
  certificateAlt?: Record<Locale, string>;
  content: Record<Locale, ExperienceContent>;
}

export const experiences: Experience[] = [
  {
    slug: 'pengajar-robotik',
    order: 202607,
    period: {
      id: 'Juli 2026 — Sekarang',
      en: 'July 2026 — Present',
    },
    photos: [
      '/images/experience/sd/sd1.jpeg',
      '/images/experience/sd/sd2.jpeg',
      '/images/experience/sd/sd3.jpeg',
    ],
    photoAlt: {
      id: 'Foto kegiatan mengajar robotik',
      en: 'Photo of robotics teaching activity',
    },
    content: {
      id: {
        role: 'Pengajar Ekstra Robotik',
        org: 'Ekstrakurikuler Robotik',
        summary:
          'Mendampingi peserta belajar merakit dan memprogram robot, sekaligus menyusun materi praktikum yang bisa diikuti pemula.',
        highlights: [
          'Menyusun materi praktikum bertahap dari perakitan dasar hingga pemrograman.',
          'Mendampingi peserta mengerjakan proyek robot secara langsung.',
          'Mengevaluasi hasil kerja peserta dan memberi perbaikan terarah.',
        ],
      },
      en: {
        role: 'Robotics Extracurricular Instructor',
        org: 'Robotics Extracurricular Club',
        summary:
          'Guiding participants in assembling and programming robots, while preparing practicum material that beginners can follow.',
        highlights: [
          'Preparing step-by-step practicum material from basic assembly to programming.',
          'Coaching participants through hands-on robot projects.',
          'Assessing participants work and giving targeted feedback.',
        ],
      },
    },
  },

  {
    slug: 'magang-pt-sami',
    order: 202507,
    period: {
      id: 'Juli 2025 — September 2025',
      en: 'July 2025 — September 2025',
    },
    // Contoh multi-foto: kartu tampil hanya foto pertama, sisanya geser di lightbox.
    photos: [
      '/images/experience/sami/sami1.jpeg',
      '/images/experience/sami/sami2.jpeg',
      '/images/experience/sami/sami3.jpeg',
      '/images/experience/sami/sami4.jpeg',
      '/images/experience/sami/sami5.jpeg',
      '/images/experience/sami/sami6.jpeg',
      '/images/experience/sami/sami7.jpeg',
      '/images/experience/sami/sami8.jpeg',
    ],
    photoAlt: {
      id: 'Foto placeholder kegiatan magang di PT SAMI',
      en: 'Placeholder photo of internship at PT SAMI',
    },
    certificate: '/images/certificates/SK MAGANG SAMI.jpeg',
    certificateAlt: {
      id: 'Placeholder sertifikat magang PT SAMI',
      en: 'Placeholder internship certificate from PT SAMI',
    },
    content: {
      id: {
        role: 'Peserta Magang',
        org: 'PT SAMI',
        summary:
          'Pengalaman operasional langsung di lapangan: bekerja dengan hardware dan perangkat mekanik, serta mengikuti alur kerja industri yang terukur.',
        highlights: [
          'Menjalankan tugas operasional pada perangkat hardware dan mekanik.',
          'Mengikuti prosedur kerja industri dan standar keselamatan.',
          'Mencatat hasil pekerjaan dan menyusun laporan secara terstruktur.',
        ],
      },
      en: {
        role: 'Intern',
        org: 'PT SAMI',
        summary:
          'Direct field operations experience: working with hardware and mechanical equipment, and following measurable industrial workflows.',
        highlights: [
          'Carried out operational tasks on hardware and mechanical equipment.',
          'Followed industrial work procedures and safety standards.',
          'Recorded work results and compiled structured reports.',
        ],
      },
    },
  },

  {
    slug: 'asisten-praktikum',
    order: 202412,
    period: {
      id: 'Desember 2024 — Januari 2025',
      en: 'December 2024 — January 2025',
    },
    certificate: '/images/certificates/SERTIF ASPRAK.jpg',
    certificateAlt: {
      id: 'Placeholder sertifikat asisten praktikum',
      en: 'Placeholder lab assistant certificate',
    },
    content: {
      id: {
        role: 'Asisten Praktikum',
        org: 'Universitas UNISSULA Semarang',
        summary:
          'Membantu penyelenggaraan sesi praktikum: menyiapkan perangkat, memandu mahasiswa, dan mengelola dokumentasi teknis sesi.',
        highlights: [
          'Menyiapkan dan memastikan perangkat praktikum siap dipakai.',
          'Membimbing mahasiswa saat mengerjakan tahapan praktikum.',
          'Mengelola dokumentasi teknis dan catatan hasil sesi.',
        ],
      },
      en: {
        role: 'Lab Assistant',
        org: 'UNISSULA Semarang University',
        summary:
          'Supporting practicum sessions: preparing equipment, guiding students, and managing the technical documentation of each session.',
        highlights: [
          'Preparing and checking practicum equipment before use.',
          'Guiding students through each stage of the practicum.',
          'Managing technical documentation and session records.',
        ],
      },
    },
  },
];

/** Urut dari yang terbaru. */
export const sortedExperiences = [...experiences].sort((a, b) => b.order - a.order);
