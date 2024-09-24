export default defineAppConfig({
    logo: '/images/cody.png',

    url: 'https://codort.com/',

    theme: 'mistral',

    // The name of the blog itself
    name: 'Codort',
    avatar: '/images/avatar.jpg',
    // The description of the blog if any
    description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',

    socials: {
        linkedin: 'https://www.linkedin.com/company/codort/',
        github: 'https://github.com/codort',
    },

    table_of_contents: false,

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

    menu: () => [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/archives' },
      { name: 'Contact', path: '/contact' }
    ],
})
