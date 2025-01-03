export interface TeamMember {
  name: string;
  position: string;
  description?: string;
  image: string;
  socials: {
    linkedin: string;
    instagram: string;
    github: string;
  };
}

export const LeaderData: TeamMember[] = [
  {
    name: 'Rushi Balapure',
    position: 'Software Engineer',
    description:
      'A passionate developer focused on creating intuitive user experiences in web technologies.',
    image: '/sunny.png',
    socials: {
      linkedin: 'https://linkedin.com/in/johndoe',
      instagram: 'https://instagram.com/johndoe',
      github: 'https://github.com/johndoe',
    },
  },
  {
    name: 'Riddhi Kulkarni',
    position: 'UI/UX Designer',
    description:
      'A passionate developer focused on creating intuitive user experiences in web technologies.',
    image: '/sunny.png',
    socials: {
      linkedin: 'https://linkedin.com/in/janesmith',
      instagram: 'https://instagram.com/janesmith',
      github: 'https://github.com/janesmith',
    },
  },
  {
    name: 'Kaushik',
    position: 'Project Manager',
    description:
      'An experienced designer focused on creating intuitive intuitiveintuitive user user user interfaces.',
    image: '/sunny.png',
    socials: {
      linkedin: 'https://linkedin.com/in/michaeljohnson',
      instagram: 'https://instagram.com/michaeljohnson',
      github: 'https://github.com/michaeljohnson',
    },
  },
];

export const coordinators: TeamMember[] = [
  {
    name: 'Devendra Ingale',
    position: 'Chairperson',
    image: '/Devendra.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/devendra-ingale/',
      github: 'https://github.com/Valerio-Lotus',
      instagram: 'https://www.instagram.com/devendra_ingale_/',
    },
  },
  {
    name: 'Tanmay Shingavi',
    position: 'Vice Chairperson',
    image: '/tanmay.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/tanmay-shingavi',
      github: 'https://github.com/decodingafterlife',
      instagram: 'https://www.instagram.com/tps_1514',
    },
  },
  {
    name: 'Pranav Deshpande',
    position: 'Secretary', // Changed from title to position for consistency
    image: '/pranav.png',
    socials: {
      linkedin: '#',
      github: '#',
      instagram: '#',
    },
  },
  {
    name: 'Kunj Chandak',
    position: 'Technical Head', // Changed from title to position for consistency
    image: '/kunj.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/',
      github: '#',
      instagram: '#',
    },
  },
  {
    name: 'Jagdish Bainade',
    position: 'Web Security Head', // Changed from title to position for consistency
    image: '/Jagdish.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/',
      github: '#',
      instagram: '#',
    },
  },
  {
    name: 'Aditya Gaikwad',
    position: 'Digital Forensic Head', // Changed from title to position for consistency
    image: '/aditya.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/aditya-gaikwad16/',
      github: 'https://github.com/AdityaGaikwad16',
      instagram: 'https://www.instagram.com/adityagaikwad1620',
    },
  },
  {
    name: 'Kedar Attarde',
    position: 'Marketing Head', // Changed from title to position for consistency
    image: '/kedar.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/kedar-attarde-a9b9122ba/',
      github: 'https://github.com/Kedarattarde9',
      instagram:
        'https://www.instagram.com/kedar_attarde_9?igsh=MXc1aWo4bXU3ZDA5MQ==',
    },
  },
  {
    name: 'Ajinkya Kachare',
    position: 'Admin Head', // Changed from title to position for consistency
    image: '/ajinkya.png',
    socials: {
      linkedin: '#',
      github: '#',
      instagram: '#',
    },
  },
  {
    name: 'Sunny Bagul',
    position: 'Design Head', // Changed from title to position for consistency
    image: '/sunny.png',
    socials: {
      linkedin: '#',
      github: '#',
      instagram: '#',
    },
  },
  // Add more coordinators as needed
];
