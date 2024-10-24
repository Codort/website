export default defineAppConfig({
  logo: '/images/cody.png',

  url: 'https://codort.com/',

  socials: [
    { name: 'email', icon: 'fa:envelope', url: 'mailto:hello@codort.com' },
    { name: 'discord', icon:'fa6-brands:discord', url: 'https://discord.com/invite/nnBHHbMr23' },
    { name: 'linkedin', icon:'fa6-brands:linkedin', url: 'https://www.linkedin.com/company/codort/' },
    { name: 'github', icon:'fa6-brands:github', url: 'https://github.com/codort' },
    { name: 'bluesky', icon:'fa6-brands:bluesky', url: 'https://bsky.app/profile/codort.bsky.social' },
  ],

  authors: [
    {
      username: 'rsonabend1',
      default: true,
      name: 'Raphael Sonabend',
      avatar: '/images/raphael.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/raphael-sonabend/',
        github: 'https://github.com/RaphaelS1',
      },
    },
  ],

  menu: [
    { name: 'Marketplace', path: 'https://marketplace.codort.com' },
    { name: 'Partner', path: '/partner' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Articles', path: '/articles' },
    { name: 'Contact', path: '/contact' },
  ],
});
