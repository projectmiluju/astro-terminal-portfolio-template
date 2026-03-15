export const siteConfig = {
  name: 'your-name',
  title: 'Terminal Portfolio Template',
  description:
    'An Astro portfolio and blog template with a terminal-inspired interface, sample projects, and MDX content collections.',
  url: 'https://your-username.github.io',
  author: {
    name: 'Your Name',
    email: 'hello@example.com',
    github: 'https://github.com/your-username',
    linkedin: 'https://www.linkedin.com/in/your-handle',
  },
  ogImage: '/favicon.svg',
  links: {
    github: 'https://github.com/your-username',
  },
  strengths: [
    {
      title: 'Own The Stack',
      description:
        'Use the homepage to explain how you design, build, and ship products across frontend, backend, and infrastructure.',
      icon: 'layers',
      evidence: 'Replace this with the systems or products that best represent your work.',
    },
    {
      title: 'Show Real Work',
      description:
        'Document project context, tradeoffs, and measurable outcomes instead of listing technologies without proof.',
      icon: 'cpu',
      evidence: 'Sample project entries are included so you can swap in real details quickly.',
    },
    {
      title: 'Publish As You Build',
      description:
        'Use the blog collection for engineering notes, book notes, and short build logs without changing the routing structure.',
      icon: 'zap',
      evidence: 'The template ships with content collections, RSS generation, and GitHub Pages deployment.',
    },
  ],
  blogCategories: [
    { slug: 'cs', name: 'Engineering Notes', description: 'Technical writing and implementation notes.' },
    { slug: 'book', name: 'Book Notes', description: 'Highlights and reflections from books you read.' },
    { slug: 'til', name: 'Build Journal', description: 'Small updates from ongoing work.' },
  ],
  blogSeries: [
    {
      slug: 'Engineering Notes',
      name: 'Engineering Notes',
      category: 'cs',
      folder: 'cs/engineering-notes',
      icon: '[dev]',
    },
    {
      slug: 'Reading Log',
      name: 'Reading Log',
      category: 'book',
      folder: 'books/reading-log',
      icon: '[book]',
    },
    {
      slug: 'Build Journal',
      name: 'Build Journal',
      category: 'til',
      folder: 'til/build-journal',
      icon: '[log]',
    },
  ],
};

export type SiteConfig = typeof siteConfig;
