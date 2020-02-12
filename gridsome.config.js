// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  icon: {
    favicon: './src/favicon.png'
  },
  siteName: 'Netlify CMS + Gridsome',
  plugins: [
    {
        use: '@gridsome/source-filesystem',
        options: {
            typeName: 'Post',
            path: 'content/posts/*.md',
            route: 'posts/:slug'
        }
    },
    {
        use: '@gridsome/source-filesystem',
        options: {
          typeName: 'Course',
          path: 'src/data/courses/*.md',
          route: 'courses/:slug'
        }
    },
    {
        use: `gridsome-plugin-netlify-cms`,
        options: {
          publicPath: `/admin`
        }
    }
  ],
  titleTemplate: '%s'
}
