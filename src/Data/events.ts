export interface Event {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  type: 'upcoming' | 'past';
}

export const events: Event[] = [
  {
    id: 1,
    title: 'Ethical Hacking Workshop',
    date: 'March 15, 2024',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?fit=crop&w=300&h=300',
    description:
      'Learn the fundamentals of ethical hacking and penetration testing.',
    type: 'upcoming',
  },
  {
    id: 2,
    title: 'CTF Competition',
    date: 'March 20, 2024',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?fit=crop&w=300&h=300',
    description: 'Test your skills in our Capture The Flag competition.',
    type: 'upcoming',
  },
  {
    id: 3,
    title: 'Cybersecurity Summit 2023',
    date: 'December 1, 2023',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?fit=crop&w=300&h=300',
    description:
      'Industry experts shared insights on the latest security trends.',
    type: 'past',
  },
  {
    id: 4,
    title: 'Web Security Workshop',
    date: 'January 15, 2024',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?fit=crop&w=300&h=300',
    description:
      'Deep dive into web application security and common vulnerabilities.',
    type: 'past',
  },
  {
    id: 5,
    title: 'Ethical Hacking Workshop',
    date: 'March 15, 2024',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?fit=crop&w=300&h=300',
    description:
      'Learn the fundamentals of ethical hacking and penetration testing.',
    type: 'upcoming',
  },
  {
    id: 6,
    title: 'CTF Competition',
    date: 'March 20, 2024',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?fit=crop&w=300&h=300',
    description: 'Test your skills in our Capture The Flag competition.',
    type: 'upcoming',
  },
  {
    id: 7,
    title: 'Cybersecurity Summit 2023',
    date: 'December 1, 2023',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?fit=crop&w=300&h=300',
    description:
      'Industry experts shared insights on the latest security trends.',
    type: 'past',
  },
  {
    id: 8,
    title: 'Web Security Workshop',
    date: 'January 15, 2024',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?fit=crop&w=300&h=300',
    description:
      'Deep dive into web application security and common vulnerabilities.',
    type: 'past',
  },
];
