import type { Locale } from './i18n';

export interface Certificate {
  slug: string;
  year: string;
  /** Letak berkas di /public. JPG/PNG/SVG bebas. */
  image: string;
  imageAlt: Record<Locale, string>;
  title: Record<Locale, string>;
  issuer: Record<Locale, string>;
  /** Menandai prestasi (mis. lomba) agar tampil beda dari sertifikat pelatihan. */
  featured?: boolean;
}

export const certificates: Certificate[] = [
  {
    slug: 'kri-2026-krai',
    year: '2026',
    image: '/images/certificates/KRI2026.jpeg',
    imageAlt: {
      id: 'Sertifikat finalis KRI 2026 divisi KRAI di UNEJ',
      en: 'KRI 2026 KRAI division finalis certificate at UNEJ',
    },
    title: {
      id: 'Finalis Nasional KRI 2026 — Divisi KRAI',
      en: 'National Finalist, KRI 2026 — KRAI Division',
    },
    issuer: {
      id: 'Universitas Jember (UNEJ)',
      en: 'University of Jember (UNEJ)',
    },
    featured: true,
  },
  {
    slug: 'pelatihan-1',
    year: '2025',
    image: '/images/certificates/SERTIF PEL1.png',
    imageAlt: {
      id: 'Sertifikat pelatihan (ubah dengan berkas asli)',
      en: 'Training certificate (replace with the real file)',
    },
    title: {
      id: 'Sertifikat Pelatihan — "Speak Your Vision: Al Creator Camp"',
      en: 'Training Certificate — "Speak Your Vision: Al Creator Camp"',
    },
    issuer: {
      id: 'HM TIF UNISSULA',
      en: 'HM TIF UNISSULA',
    },
  },
];
