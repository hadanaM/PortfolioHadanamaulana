/**
 * Tipe & string antarmuka untuk dua bahasa.
 *
 * Setiap locale WAJIB memiliki semua kunci — ditegakkan oleh TypeScript lewat
 * `Record<Locale, UiStrings>`, jadi terjemahan yang terlupa tidak akan lolos
 * saat build.
 */

export type Locale = 'id' | 'en';

export const locales = ['id', 'en'] as const;
export const defaultLocale: Locale = 'id';

export function isLocale(value: string): value is Locale {
  return value === 'id' || value === 'en';
}

/** Nama yang ditampilkan tombol ganti bahasa (menunjuk ke bahasa TUJUAN). */
export const localeLabel: Record<Locale, string> = {
  id: 'ID',
  en: 'EN',
};

interface UiStrings {
  meta: {
    siteTitle: string;
    siteDescription: string;
  };
  a11y: {
    skipToContent: string;
    toggleTheme: string;
    toggleLanguage: string;
    openMenu: string;
    closeMenu: string;
    goHome: string;
  };
  nav: {
    home: string;
    about: string;
    projects: string;
    experience: string;
    skills: string;
    certificates: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    role: string;
    summaryLead: string;
    downloadCv: string;
    viewProjects: string;
    contact: string;
    available: string;
    basedIn: string;
  };
  sections: {
    projectsEyebrow: string;
    projectsHeading: string;
    projectsIntro: string;
    experienceEyebrow: string;
    experienceHeading: string;
    experienceIntro: string;
    skillsEyebrow: string;
    skillsHeading: string;
    skillsIntro: string;
    certificatesEyebrow: string;
    certificatesHeading: string;
    certificatesIntro: string;
    contactEyebrow: string;
    contactHeading: string;
    contactIntro: string;
  };
  filters: {
    all: string;
    web: string;
    network: string;
    docs: string;
  };
  labels: {
    year: string;
    category: string;
    techStack: string;
    problem: string;
    approach: string;
    result: string;
    gallery: string;
    links: string;
    repository: string;
    liveDemo: string;
    noLink: string;
    backToHome: string;
    nextProject: string;
    viewProject: string;
    featured: string;
  };
  contact: {
    email: string;
    linkedin: string;
    github: string;
    instagram: string;
    whatsapp: string;
    downloadCv: string;
    copyEmail: string;
    copied: string;
  };
  footer: {
    rights: string;
  };
  placeholder: {
    projectImage: string;
    experiencePhoto: string;
    certificate: string;
    cover: string;
  };
}

export const ui: Record<Locale, UiStrings> = {
  /* ------------------------------ INDONESIA ------------------------------ */
  id: {
    meta: {
      siteTitle: 'Hadana Maulana — Portofolio',
      siteDescription:
        'Portofolio Hadana Maulana, lulusan Teknik Informatika UNISSULA Semarang. IT Support, Network Engineering, dan dokumentasi teknis.',
    },
    a11y: {
      skipToContent: 'Lewati ke konten utama',
      toggleTheme: 'Ganti tema gelap/terang',
      toggleLanguage: 'Ganti bahasa',
      openMenu: 'Buka menu',
      closeMenu: 'Tutup menu',
      goHome: 'Kembali ke beranda',
    },
    nav: {
      home: 'Beranda',
      about: 'Tentang saya',
      projects: 'Proyek',
      experience: 'Pengalaman',
      skills: 'Keahlian',
      certificates: 'Sertifikat',
      contact: 'Kontak',
    },
    hero: {
      eyebrow: 'Terbuka untuk peluang kerja',
      title: 'Lulusan Teknik Informatika',
      role: 'IT Support & Network Engineering Enthusiast',
      summaryLead:
        'Saya menyatukan keahlian teknis IT, operasional lapangan, dan administrasi — dari magang industri di PT SAMI hingga mengajar robotik.',
      downloadCv: 'Unduh CV',
      viewProjects: 'Lihat proyek',
      contact: 'Hubungi saya',
      available: 'Tersedia untuk magang / full-time',
      basedIn: 'Semarang, Indonesia',
    },
    sections: {
      projectsEyebrow: '01 — Proyek terpilih',
      projectsHeading: 'Tiga bidang yang saya tekuni, satu arah yang jelas',
      projectsIntro:
        'Dari aplikasi web dengan integrasi pembayaran, sampai perancangan jaringan dan dokumentasi teknis.',
      experienceEyebrow: '02 — Pengalaman',
      experienceHeading: 'Belajar di ruang praktikum, bekerja di lapangan',
      experienceIntro:
        'Pengalaman nyata sebagai asisten praktikum, peserta magang industri, dan pengajar robotik.',
      skillsEyebrow: '03 — Keahlian',
      skillsHeading: 'Kombinasi yang jarang: teknis, operasional, sekaligus administratif',
      skillsIntro:
        'Terbiasa berganti peran antara mengoperasikan alat, menulis kode, dan menyusun dokumen.',
      certificatesEyebrow: '04 — Sertifikat & prestasi',
      certificatesHeading: 'Sertifikat pelatihan dan capaian kompetisi',
      certificatesIntro: 'Pelatihan yang saya ikuti serta prestasi di tingkat nasional.',
      contactEyebrow: '05 — Kontak',
      contactHeading: 'Mari berkenalan',
      contactIntro: 'Terbuka untuk diskusi peluang kerja, proyek, atau sekadar bertanya.',
    },
    filters: {
      all: 'Semua',
      web: 'Web Development',
      network: 'Networking & IoT',
      docs: 'Dokumentasi Teknis',
    },
    labels: {
      year: 'Tahun',
      category: 'Kategori',
      techStack: 'Tech stack',
      problem: 'Masalah',
      approach: 'Pendekatan',
      result: 'Hasil',
      gallery: 'Galeri',
      links: 'Tautan',
      repository: 'Kode sumber',
      liveDemo: 'Demo langsung',
      noLink: 'Proyek internal / tidak tersedia untuk publik',
      backToHome: 'Kembali ke beranda',
      nextProject: 'Proyek berikutnya',
      viewProject: 'Lihat detail',
      featured: 'Unggulan',
    },
    contact: {
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      instagram: 'Instagram',
      whatsapp: 'WhatsApp',
      downloadCv: 'Unduh CV',
      copyEmail: 'Salin email',
      copied: 'Tersalin!',
    },
    footer: {
      rights: 'Hak cipta dilindungi.',
    },
    placeholder: {
      projectImage: 'Gambar proyek belum tersedia',
      experiencePhoto: 'Foto kegiatan belum tersedia',
      certificate: 'Sertifikat belum tersedia',
      cover: 'Sampul proyek',
    },
  },

  /* ------------------------------- ENGLISH ------------------------------- */
  en: {
    meta: {
      siteTitle: 'Hadana Maulana — Portfolio',
      siteDescription:
        'Portfolio of Hadana Maulana, Informatics Engineering graduate from UNISSULA Semarang. IT Support, Network Engineering, and technical documentation.',
    },
    a11y: {
      skipToContent: 'Skip to main content',
      toggleTheme: 'Toggle dark/light theme',
      toggleLanguage: 'Change language',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      goHome: 'Back to home',
    },
    nav: {
      home: 'Home',
      about: 'About me',
      projects: 'Projects',
      experience: 'Experience',
      skills: 'Skills',
      certificates: 'Certificates',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Open to opportunities',
      title: 'Informatics Engineering Graduate',
      role: 'IT Support & Network Engineering Enthusiast',
      summaryLead:
        'I combine IT technical skills, field operations, and administration — from an industrial internship at PT SAMI to teaching robotics.',
      downloadCv: 'Download CV',
      viewProjects: 'View projects',
      contact: 'Get in touch',
      available: 'Available for internship / full-time',
      basedIn: 'Semarang, Indonesia',
    },
    sections: {
      projectsEyebrow: '01 — Selected projects',
      projectsHeading: 'Three fields I pursue, one clear direction',
      projectsIntro:
        'From a web application with payment integration, down to network design and technical documentation.',
      experienceEyebrow: '02 — Experience',
      experienceHeading: 'Learned in the lab, worked in the field',
      experienceIntro:
        'Real experience as a lab assistant, industrial intern, and robotics instructor.',
      skillsEyebrow: '03 — Skills',
      skillsHeading: 'A rare mix: technical, operational, and administrative',
      skillsIntro:
        'Comfortable switching roles between operating equipment, writing code, and drafting documents.',
      certificatesEyebrow: '04 — Certificates & awards',
      certificatesHeading: 'Training certificates and competition achievements',
      certificatesIntro: 'Trainings I attended as well as national-level achievements.',
      contactEyebrow: '05 — Contact',
      contactHeading: "Let's connect",
      contactIntro:
        'Open to discussions about job opportunities, projects, or just a quick question.',
    },
    filters: {
      all: 'All',
      web: 'Web Development',
      network: 'Networking & IoT',
      docs: 'Technical Documentation',
    },
    labels: {
      year: 'Year',
      category: 'Category',
      techStack: 'Tech stack',
      problem: 'Problem',
      approach: 'Approach',
      result: 'Result',
      gallery: 'Gallery',
      links: 'Links',
      repository: 'Source code',
      liveDemo: 'Live demo',
      noLink: 'Internal project / not publicly available',
      backToHome: 'Back to home',
      nextProject: 'Next project',
      viewProject: 'View details',
      featured: 'Featured',
    },
    contact: {
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      instagram: 'Instagram',
      whatsapp: 'WhatsApp',
      downloadCv: 'Download CV',
      copyEmail: 'Copy email',
      copied: 'Copied!',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    placeholder: {
      projectImage: 'Project image not available yet',
      experiencePhoto: 'Activity photo not available yet',
      certificate: 'Certificate not available yet',
      cover: 'Project cover',
    },
  },
};

export const t = (locale: Locale): UiStrings => ui[locale];
