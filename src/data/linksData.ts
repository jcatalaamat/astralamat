export interface LinkItem {
  id: number;
  title: string;
  url: string;
  description?: string;
  external?: boolean;
}

export const socialLinks = {
  instagram: 'https://instagram.com/astralintegration',
  linkedin: 'https://linkedin.com/in/jcamat',
  github: 'https://github.com/jcatalaamat',
  email: 'mailto:hello@jordiamat.com',
  whatsapp: 'https://wa.me/34611144170'
};

export const offerings: LinkItem[] = [
  {
    id: 1,
    title: 'MY WORK',
    url: '/',
    description: 'Full portfolio & technical projects',
    external: false
  },
  {
    id: 2,
    title: 'TECHNICAL LEADERSHIP & CTO SERVICES',
    url: '/#contact',
    description: 'Product strategy, full-stack development, conscious leadership',
    external: false
  },
  {
    id: 3,
    title: 'APPLY FOR 1:1 SOUL WORK',
    url: 'https://astral-integration.com',
    description: 'Timeline shifting, ancestral healing, soul work sessions ($444)',
    external: true
  },
  {
    id: 4,
    title: 'MEDICINE INTEGRATION SUPPORT',
    url: 'https://astral-integration.com',
    description: 'Bufo Alvarius, Ayahuasca ceremony integration ($333)',
    external: true
  },
  {
    id: 5,
    title: 'MAZUNTE CONNECT',
    url: 'https://mazunteconnect.com',
    description: 'Community platform for Mazunte, Mexico - Download the app',
    external: true
  },
  {
    id: 6,
    title: 'PROYECTO SALVAJE',
    url: 'https://proyectosalvaje.com',
    description: 'Regenerative village & DAO investment opportunity',
    external: true
  },
  {
    id: 7,
    title: 'INNER ASCEND',
    url: 'https://inner-ascend.com',
    description: '90-day spiritual transformation app - Join the waitlist',
    external: true
  },
  {
    id: 8,
    title: 'BUY ME A COFFEE',
    url: 'https://ko-fi.com/astralamat',
    description: 'Support my work with a small contribution',
    external: true
  }
];
