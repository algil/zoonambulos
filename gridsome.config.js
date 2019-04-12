// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Zoonámbulos',
  siteDescription: 'Sitio web oficial',
  siteUrl: 'zoonambulos.com',
  titleTemplate: '%s',
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-71853297-1'
      }
    }
  ]
};
