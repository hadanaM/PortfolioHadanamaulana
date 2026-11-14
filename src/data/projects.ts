import type { Locale } from './i18n';

export type ProjectCategory = 'web' | 'network' | 'docs';

export interface ProjectContent {
  title: string;
  /** Satu baris pendamping judul. */
  subtitle: string;
  /** Ringkasan untuk kartu di daftar proyek. */
  summary: string;
  /** Tiga paragraf naratif untuk halaman detail. */
  problem: string;
  approach: string;
  result: string;
}

export interface GalleryImage {
  src: string;
  alt: Record<Locale, string>;
}

export interface Project {
  slug: string;
  category: ProjectCategory;
  /** Estimasi — silakan dikoreksi sesuai tahun pengerjaan asli. */
  year: number;
  featured?: boolean;
  /** Nama teknologi (netral bahasa). */
  tech: string[];
  gallery: GalleryImage[];
  links?: {
    repo?: string;
    demo?: string;
  };
  content: Record<Locale, ProjectContent>;
}

export const projects: Project[] = [
  /* ------------------------------ WEB ------------------------------ */
  {
    slug: 'web-mebel',
    category: 'web',
    year: 2025,
    featured: true,
    tech: ['Laravel', 'MySQL', 'Blade', 'Midtrans Snap'],
    gallery: [
      {
        src: '/images/projects/mabel/tokomabel1.png',
        alt: {
          id: 'Tampilan katalog produk pada Web Mebel',
          en: 'Product catalogue view of the furniture website',
        },
      },
      {
        src: '/images/projects/mabel/tokomabel2.png',
        alt: {
          id: 'Halaman admin untuk mengelola produk',
          en: 'Admin page to manage products',
        },
      },
      {
        src: '/images/projects/mabel/tokomabel3.png',
        alt: {
          id: 'Keranjang belanja sebelum proses checkout',
          en: 'Shopping cart before the checkout process',
        },
      },
      {
        src: '/images/projects/mabel/tokomabel4.png',
        alt: {
          id: 'Alur checkout dengan integrasi pembayaran Midtrans',
          en: 'Checkout flow with Midtrans payment integration',
        },
      },
    ],
    content: {
      id: {
        title: 'Web Mebel',
        subtitle: 'Toko mebel online dengan integrasi pembayaran Midtrans',
        summary:
          'Aplikasi web untuk katalog dan pemesanan produk mebel, dilengkapi integrasi payment gateway Midtrans agar proses pembayaran tidak lagi manual.',
        problem:
          'Pemesanan sebelumnya bergantung pada konfirmasi manual dan transfer bank. Status pembayaran sulit diverifikasi, dan pesanan yang masuk sering tercatat terlambat atau tidak lengkap.',
        approach:
          'Saya membangun aplikasi berbasis Laravel dengan MySQL sebagai basis data. Halaman katalog, keranjang, dan checkout disusun dengan Blade, lalu proses pembayaran diintegrasikan ke Midtrans Snap. Notifikasi status pembayaran diterima melalui webhook, sehingga status pesanan berubah otomatis tanpa input ulang oleh admin.',
        result:
          'Proses checkout menjadi satu alur yang utuh: pelanggan memilih produk, membayar, dan status pesanan terbarui sendiri. Admin tidak perlu lagi mencocokkan mutasi bank satu per satu, dan riwayat transaksi tersimpan rapi untuk keperluan pelaporan.',
      },
      en: {
        title: 'Furniture Web Store',
        subtitle: 'Online furniture store with Midtrans payment integration',
        summary:
          'A web application for furniture catalogue and ordering, complete with Midtrans payment gateway integration so that payments are no longer handled manually.',
        problem:
          'Orders previously depended on manual confirmation and bank transfers. Payment status was hard to verify, and incoming orders were often recorded late or incomplete.',
        approach:
          'I built a Laravel-based application with MySQL as the database. Catalogue, cart, and checkout pages were assembled with Blade, then the payment flow was integrated with Midtrans Snap. Payment status notifications arrive through a webhook, so order status updates automatically without manual admin input.',
        result:
          'Checkout became one complete flow: customers pick an item, pay, and the order status updates by itself. Admins no longer have to reconcile bank statements one by one, and transaction history is stored cleanly for reporting.',
      },
    },
  },

  {
    slug: 'web-crud',
    category: 'web',
    year: 2024,
    tech: ['Laravel', 'MySQL', 'Blade', 'PHP'],
    gallery: [
      {
        src: '/images/projects/web-crud/crud1.jpeg',
        alt: {
          id: 'Antarmuka daftar data pada aplikasi CRUD',
          en: 'Data listing interface of the CRUD application',
        },
      },
      {
        src: '/images/projects/web-crud/crud2.jpeg',
        alt: {
          id: 'Tampilan Data Siswa untuk menambah dan mengubah data dengan validasi',
          en: 'Student Data view for adding and editing data with validation',
        },
      },
      {
        src: '/images/projects/web-crud/crud3.jpeg',
        alt: {
          id: 'Formulir tambah dan ubah data dengan validasi',
          en: 'Create and edit form with validation',
        },
      },
      {
        src: '/images/projects/web-crud/crud4.jpeg',
        alt: {
          id: 'Tampilan Log Aktivitas untuk menelusuri perubahan data',
          en: 'Activity log view for tracking data changes',
        },
      },
    ],
    content: {
      id: {
        title: 'Web CRUD',
        subtitle: 'Aplikasi pengelolaan data siswa dengan validasi dan Log Aktivitas',
        summary:
          'Aplikasi web untuk mengelola data siswa secara terstruktur: tambah, ubah, dan hapus — sebagai fondasi pemahaman arsitektur MVC.',
        problem:
          'Pengelolaan data yang sebelumnya dilakukan lewat spreadsheet rentan terhadap duplikasi, kesalahan format, dan kesulitan mencari ketika jumlah data bertambah banyak.',
        approach:
          'Saya menerapkan pola MVC Laravel: model menangani relasi dan aturan bisnis, controller memproses request, dan Blade menyajikan tampilan. Setiap input divalidasi di sisi server, dilengkapi pagination agar tetap ringan saat data bertambah.',
        result:
          'Data menjadi lebih terstruktur dan konsisten. Validasi memblokir input yang salah sejak awal, pencarian mempercepat penelusuran, dan struktur ini menjadi dasar ketika saya lanjut ke proyek Web Mebel.',
      },
      en: {
        title: 'CRUD Web App',
        subtitle: 'Student data management application with validation and activity log',
        summary:
          'A web application for managing student data in a structured way: create, read, update, and delete — as a foundation for understanding the MVC architecture.',
        problem:
          'Data previously managed through spreadsheets was prone to duplication, formatting errors, and became hard to search as the dataset grew.',
        approach:
          'I implemented the Laravel MVC pattern: models handle relationships and business rules, controllers process requests, and Blade renders the views. Each input is validated server-side, with pagination to keep performance light as data grows.',
        result:
          'Data became more structured and consistent. Validation blocks wrong input at the door, search speeds up lookup, and this structure became the foundation when I moved on to the furniture store project.',
      },
    },
  },

  /* --------------------------- NETWORK & IOT --------------------------- */
  {
    slug: 'packet-tracer',
    category: 'network',
    year: 2024,
    featured: true,
    tech: ['Cisco Packet Tracer', 'IPv4', 'VLAN', 'Routing'],
    gallery: [
      {
        src: '/images/projects/packet-tracer-1.svg',
        alt: {
          id: 'Topologi jaringan yang dirancang di Cisco Packet Tracer',
          en: 'Network topology designed in Cisco Packet Tracer',
        },
      },
      {
        src: '/images/projects/packet-tracer-2.svg',
        alt: {
          id: 'Dokumentasi pengalamatan IP dan konfigurasi perangkat',
          en: 'IP addressing and device configuration documentation',
        },
      },
    ],
    content: {
      id: {
        title: 'Topologi Cisco Packet Tracer',
        subtitle: 'Perancangan dan simulasi jaringan sebelum implementasi fisik',
        summary:
          'Perancangan topologi jaringan beserta segmentasi, pengalamatan IP, dan konfigurasi router serta switch yang diuji melalui simulasi.',
        problem:
          'Implementasi jaringan fisik tanpa perancangan awal berisiko menghasilkan broadcast storm, konflik alamat IP, dan konfigurasi yang harus dibongkar ulang di lapangan.',
        approach:
          'Saya menyusun kebutuhan segmen jasing terlebih dahulu, lalu memetakan perangkat dan jalur koneksi di Cisco Packet Tracer. Topologi dibagi menjadi VLAN per fungsi, alamat IP dialokasikan secara sistematis, dan konfigurasi router serta switch diuji satu per satu sampai komunikasi antar segmen berjalan sesuai rencana.',
        result:
          'Topologi teruji sebelum disentuh di lapangan. Dokumentasi pengalamatan dan konfigurasi membuat perangkat dapat dipasang langsung sesuai rencana, tanpa banyak pembongkaran ulang.',
      },
      en: {
        title: 'Cisco Packet Tracer Topology',
        subtitle: 'Network design and simulation before physical implementation',
        summary:
          'Network topology design with segmentation, IP addressing, and router and switch configuration validated through simulation.',
        problem:
          'Implementing a physical network without upfront design risks broadcast storms, IP address conflicts, and configurations that have to be torn apart on site.',
        approach:
          'I first defined the required segments, then mapped devices and connections in Cisco Packet Tracer. The topology was split into VLANs by function, IP addresses were allocated systematically, and router and switch configuration was tested one by one until cross-segment communication worked as planned.',
        result:
          'The topology was proven before touching the field. The addressing and configuration documentation allows devices to be installed straight from the plan, with far less rework.',
      },
    },
  },

  {
    slug: 'iot-monitoring',
    category: 'network',
    year: 2025,
    tech: ['IoT Architecture', 'Sensor', 'Data Flow', 'Diagram'],
    gallery: [
      {
        src: '/images/projects/IoT/IoT1.jpeg',
        alt: {
          id: 'Hardware sistem monitoring Suhu dan Kelembapan berbasis IoT',
          en: 'IoT-based Temperature and Humidity monitoring system hardware',
        },
      },
      {
        src: '/images/projects/IoT/IoT2.jpeg',
        alt: {
          id: 'Hardware sistem monitoring Suhu dan Kelembapan berbasis IoT',
          en: 'IoT-based Temperature and Humidity monitoring system hardware',
        },
      },
    ],
    content: {
      id: {
        title: 'SistemMonitoring Suhu dan Kelembapan berbasis IoT',
        subtitle: 'Diagram arsitektur untuk memantau kondisi perangkat dari ujung ke ujung',
        summary:
          'Perancangan sistem monitoring Suhu dan Kelembapan: bagaimana data sensor dikumpulkan, dikirim, diproses, lalu ditampilkan sebagai informasi yang bisa ditindaklanjuti.',
        problem:
          'Tanpa perancangan arsitektur yang jelas, proyek IoT mudah berhenti pada tahap "sensor terbaca" tanpa jelas siapa yang menerima data, bagaimana dikirim, dan apa yang harus dilakukan ketika ada kegagalan.',
        approach:
          'Saya memetakan alur data dari lapisan sensor, unit pemrosesan, koneksi jaringan, hingga ke lapisan tampilan. Setiap tahap diberi keterangan fungsi, protokol, dan kondisi kegagalan yang mungkin, sehingga sistem ini bisa dibaca sebagai acuan implementasi maupun dokumentasi teknis.',
        result:
          'Sistem ini menjadi terlihat utuh dan mudah dijelaskan kepada orang lain. Diagram ini berguna sebagai acuan ketika memilih perangkat, dan sebagai lampiran dokumentasi ketika menyusun laporan teknis.',
      },
      en: {
        title: 'IoT-based Temperature and Humidity Monitoring System',
        subtitle: 'Architecture diagram for end-to-end device condition monitoring',
        summary:
          'Designing a Temperature and Humidity monitoring system: how sensor data is collected, transmitted, processed, and displayed as actionable information.',
        problem:
          'Without a clear architecture design, IoT projects easily stall at the "sensor reads" stage without clarity on who receives the data, how it is transmitted, and what to do in case of failure.',
        approach:
          'I mapped the data flow from the sensor layer, processing unit, network connection, to the display layer. Each stage is annotated with function, protocol, and potential failure conditions, so this system can be read as a reference for implementation or technical documentation.',
        result:
          'The system becomes visible and easy to explain to others. This diagram serves as a reference when selecting devices, and as an attachment to documentation when preparing technical reports.',
      },
    },
  },

  /* ------------------------ TECHNICAL DOCUMENTATION ------------------------ */
  {
    slug: 'modul-robotik',
    category: 'docs',
    year: 2025,
    tech: ['Document Design', 'Robotics', 'Structured Writing'],
    gallery: [
      {
        src: '/images/projects/modul/modul1.png',
        alt: {
          id: 'Sampul modul praktikum robotik',
          en: 'Cover of the robotics practicum module',
        },
      },
      {
        src: '/images/projects/modul/modul2.png',
        alt: {
          id: 'Halaman pengenalan sensor yang akan dipakai',
          en: 'Page introducing the sensors to be used',
        },
      },
      {
        src: '/images/projects/modul/modul3.png',
        alt: {
          id: 'Halaman instruksi/urutan merakit kelistrikan',
          en: 'Page with instructions/steps for assembling the electrical components',
        },
      },
    ],
    content: {
      id: {
        title: 'Modul Robotik',
        subtitle: 'Modul praktikum yang terstruktur untuk pembelajaran robotik',
        summary:
          'Penyusunan modul praktikum robotik: tujuan pembelajaran, alat dan bahan, langkah kerja, hingga instrumen evaluasi.',
        problem:
          'Materi praktikum robotik yang tersebar di banyak sumber membuat peserta belajar dengan kecepatan berbeda, sementara instruktur mengulang penjelasan yang sama setiap sesi.',
        approach:
          'Saya menyusun modul dengan struktur tetap: tujuan pembelajaran, prasyarat, alat dan bahan, langkah kerja yang bernomor, pertanyaan pemantik, lalu bagian evaluasi. Bahasa ditulis langsung dan instruksional, dengan ruang untuk catatan peserta supaya modul tetap hidup ketika dipakai berulang kali.',
        result:
          'Instruktur dapat menjalankan sesi lebih konsisten, dan peserta dapat menyelesaikan praktikum mandiri pada langkah-langkah yang jelas. Modul ini juga menjadi bukti kemampuan saya menyusun dokumentasi teknis yang siap dipakai.',
      },
      en: {
        title: 'Robotics Module',
        subtitle: 'A structured practicum module for robotics learning',
        summary:
          'Authoring of a robotics practicum module: learning objectives, tools and materials, working steps, all the way to evaluation instruments.',
        problem:
          'Robotics practicum material scattered across many sources leaves participants learning at different speeds, while instructors repeat the same explanation every session.',
        approach:
          'I structured the module with a fixed layout: learning objectives, prerequisites, tools and materials, numbered working steps, prompt questions, then an evaluation section. The language is written directly and instructionally, with space for participants notes so the module stays alive across repeated use.',
        result:
          'Instructors can run sessions more consistently, and participants can complete the practicum independently through clear steps. The module also stands as evidence of my ability to produce ready-to-use technical documentation.',
      },
    },
  },

  {
    slug: 'standardisasi-dokumen',
    category: 'docs',
    year: 2025,
    tech: ['MS Word', 'Template', 'Document Standards'],
    gallery: [
      {
        src: '/images/projects/standardisasi-1.svg',
        alt: {
          id: 'Template dokumen teknis yang telah distandardisasi',
          en: 'Standardised technical document template',
        },
      },
      {
        src: '/images/projects/standardisasi-2.svg',
        alt: {
          id: 'Penerapan gaya judul dan penomoran yang konsisten',
          en: 'Consistent heading styles and numbering applied',
        },
      },
    ],
    content: {
      id: {
        title: 'Standardisasi Dokumen',
        subtitle: 'Penyeragaman format dokumen teknis dengan gaya dan template',
        summary:
          'Penyusunan standar format dokumen di Microsoft Word: gaya judul, penomoran, header/footer, dan tabel agar seluruh dokumen tampil konsisten.',
        problem:
          'Dokumen teknis yang dibuat banyak orang cenderung tidak seragam — judul dengan ukuran berbeda, penomoran manual, dan tabel yang disalin dari file lain sehingga sulit dirapikan maupun dicetak.',
        approach:
          'Saya menyusun template dengan gaya judul yang sudah ditentukan, sistem penomoran otomatis, header serta footer baku, dan format tabel standar. Semua diterapkan lewat style bawaan Word, bukan format manual, sehingga perubahan bisa dilakukan sekaligus pada seluruh dokumen.',
        result:
          'Dokumen menjadi seragam dan jauh lebih cepat dirapikan. Penomoran otomatis menghilangkan kesalahan urut, dan template mempercepat penyusunan laporan berikutnya tanpa mengatur ulang format dari nol.',
      },
      en: {
        title: 'Document Standardisation',
        subtitle: 'Unifying technical document format with styles and templates',
        summary:
          'Creating a document format standard in Microsoft Word: heading styles, numbering, headers/footers, and tables so every document looks consistent.',
        problem:
          'Technical documents produced by many people tend to be inconsistent — headings at different sizes, manual numbering, and tables copied from other files that are hard to tidy or print.',
        approach:
          'I built a template with predefined heading styles, automatic numbering, standard headers and footers, and a standard table format. Everything is applied through Word built-in styles rather than manual formatting, so a change can be made across an entire document at once.',
        result:
          'Documents became uniform and far quicker to tidy. Automatic numbering removes ordering mistakes, and the template speeds up the next report without reformatting from scratch.',
      },
    },
  },
];

/** Urutan tampilan kategori (dipakai filter tab). */
export const categoryOrder: ProjectCategory[] = ['web', 'network', 'docs'];

export function projectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((project) => project.category === category);
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Proyek unggulan (ditampilkan paling depan). */
export const featuredProjects = projects.filter((project) => project.featured);
