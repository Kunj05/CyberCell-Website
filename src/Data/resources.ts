export interface Resource {
  id: number;
  title: string;
  description: string;
  link: string;
  keywords: string[];
  category: 'learning' | 'tools' | 'ctf' | 'security';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const resources: Resource[] = [
  {
    id: 1,
    title: 'Web Security Fundamentals',
    description:
      'Learn the basics of web security, including XSS, CSRF, and SQL injection prevention.',
    link: '#',
    keywords: ['web security', 'xss', 'csrf', 'sql injection', 'beginner'],
    category: 'learning',
    difficulty: 'beginner',
  },
  {
    id: 2,
    title: 'Network Security Tools',
    description:
      'Essential tools for network security analysis and monitoring.',
    link: '#',
    keywords: ['network', 'wireshark', 'nmap', 'security tools'],
    category: 'tools',
    difficulty: 'intermediate',
  },
  {
    id: 3,
    title: 'CTF Challenges Archive',
    description: 'Practice with our collection of past CTF challenges.',
    link: '#',
    keywords: ['ctf', 'challenges', 'practice', 'competition'],
    category: 'ctf',
    difficulty: 'advanced',
  },
  {
    id: 4,
    title: 'Cryptography Basics',
    description: 'Introduction to cryptography and encryption techniques.',
    link: '#',
    keywords: ['cryptography', 'encryption', 'security', 'beginner'],
    category: 'learning',
    difficulty: 'beginner',
  },
];
