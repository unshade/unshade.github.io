// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'unshade', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Unshade',
          description:
            'This one is not a code project, but a music project. I am a music producer and I have released a few tracks on Spotify (majority of them are not public).',
          imageUrl:
            'https://i1.sndcdn.com/avatars-XHJyCyzweU8N63J8-cMFhAw-t500x500.jpg',
          link: 'https://open.spotify.com/intl-fr/artist/4WBH8jDn9K50G1cQMzIqkO',
        },
        {
          title: 'UnRaid',
          description:
            'My personal server is running on UnRaid. I have a few docker containers running on it, such as NextCloud, Bitwarden, and more. I also use it to run VMs for development purposes (and for my personnal cloud gaming).',
          imageUrl:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcraftassets.unraid.net%2Fuploads%2F_1200x630_crop_center-center_82_none%2Fseo-unraid.png%3Fmtime%3D20180827134547&f=1&nofb=1&ipt=63760a8b03b443c030ad986c04dadc4e7160edd19722f1fa5128c7b1aa4498e4&ipo=images',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Noé Steiner',
    description: 'See the projects I have worked on and the technologies I have used.',
    imageURL: '',
  },
  social: {
    linkedin: 'noesteiner',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: 'unshadee', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'unshade',
    dev: '',
    stackoverflow: '17821590/unshade', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://nstnr.com',
    phone: '',
    email: 'noe.steiner@telecomnancy.eu',
  },
  resume: {
    fileUrl:
      'https://nextcloud.nstnr.com/s/oR239W98TNqaC7y', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Java',
    'Python',
    'Go',
    'Laravel',
    'Flask',
    'Gin',
    'JavaScript',
    'React.js',
    'Node.js',
    'Next.js',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Git',
    'Docker',
    'KVM',
    'Pest',
    'Tailwind',
    'UnRaid (Self-Hosting)',
  ],
  experiences: [
    {
      company: 'Copernic',
      position: 'Full Stack Developer (Intern)',
      from: '2022',
      to: '2022',
      companyLink: 'https://www.agence-copernic.fr/',
    },
  ],
  certifications: [
    {
      name: 'TOEIC',
      body: 'B2 : 900/990',
      year: '2023',
      link: '',
    },
    {
      name: 'Project Management',
      body: 'General project management, issued by Centrale Lille',
      year: '2022',
      link: 'https://moocgdp.gestiondeprojet.pm/certificates/3883569e8beb41b8a98fbf1334966601',
    },
    {
      name: 'Digital Marketing Basics',
      body: 'Issued by Google',
      year: '2022',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'TELECOM Nancy',
      degree: 'Master in Computer Science',
      from: '2022',
      to: '2025',
    },
    {
      institution: 'IUT Nancy-Charlemagne',
      degree: 'Computer Science DUT',
      from: '2020',
      to: '2022',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
