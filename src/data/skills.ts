export interface SkillGroup {
  /** ID unik — dipakai untuk key & anchor. */
  id: string;
  label: Record<'id' | 'en', string>;
  /** Keterangan singkat kelompok. */
  note: Record<'id' | 'en', string>;
  items: string[];
}

/**
 * Dikelompokkan menurut peran, bukan daftar panjang tanpa urutan.
 * Urutan array = urutan tampilan.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: 'networking',
    label: { id: 'Jaringan', en: 'Networking' },
    note: {
      id: 'Fokus utama yang sedang saya dalami',
      en: 'The main focus I am currently deepening',
    },
    items: ['Cisco Packet Tracer', 'Basic Networking', 'Troubleshooting Hardware'],
  },
  {
    id: 'programming',
    label: { id: 'Pemrograman', en: 'Programming' },
    note: {
      id: 'Dari logika dasar sampai aplikasi web',
      en: 'From basic logic to web applications',
    },
    items: ['Laravel', 'PHP', 'Python', 'C++', 'Logika & Algoritma'],
  },
  {
    id: 'doc-admin',
    label: { id: 'Dokumentasi & Admin', en: 'Documentation & Admin' },
    note: {
      id: 'Sisi administratif yang sering dilupakan engineer',
      en: 'The administrative side engineers often overlook',
    },
    items: [
      'MS Word (Advanced Layouting)',
      'MS Excel',
      'Penyusunan RAB',
      'Administrasi Dokumen',
    ],
  },
  {
    id: 'mechanical-iot',
    label: { id: 'Mekanik & IoT', en: 'Mechanical & IoT' },
    note: {
      id: 'Pengalaman dari organisasi robotik dan magang',
      en: 'Experience from robotics organization and internship',
    },
    items: ['Perakitan Robot', 'AGV', 'Kelistrikan IoT', 'Troubleshooting'],
  },
  {
    id: 'design-fab',
    label: { id: '3D & Fabrikasi', en: '3D & Fabrication' },
    note: {
      id: 'Untuk kebutuhan desain dan prototipe',
      en: 'For design and prototyping needs',
    },
    items: ['Autodesk Inventor', '3D Printing'],
  },
];
