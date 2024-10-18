export default defineAppConfig({
  logo: '/images/cody.png',

  url: 'https://codort.com/',

  socials: {
    linkedin: 'https://www.linkedin.com/company/codort/',
    github: 'https://github.com/codort',
  },

  // blog theme
  theme: 'codort',

  // the list of authors
  // the default author will be used for all posts if no author is specified
  // and the mistral theme use the default author for the main page
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
    { name: 'Home', path: '/' },
    { name: 'Partner', path: '/partner' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Articles', path: '/articles' },
    { name: 'Contact', path: '/contact' },
  ],
});
