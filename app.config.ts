export default defineAppConfig({
  logo: '/images/cody.png',

  url: 'https://codort.com/',

  socials: [
    { name: 'email', icon: 'fa:envelope', url: 'mailto:hello@codort.com' },
    { name: 'newsletter', icon: 'fa-solid:newspaper', url: 'https://go.codort.com/newsletter' },
    { name: 'linkedin', icon:'fa6-brands:linkedin', url: 'https://www.linkedin.com/company/codort/' },
    { name: 'github', icon:'fa6-brands:github', url: 'https://github.com/codort' },
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
    { name: 'Partner', path: '/partner' },
    { name: 'Articles', path: '/articles' },
    { name: 'Contact', path: '/contact' },
  ],
});
