module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Saransh Grover - Personal Website & Blog', // Navigation and Site Title
  titleAlt: 'Saransh Grover', // Title for JSONLD
  description: 'Personal Website for Saransh Grover - a Computer Science student at Stony Brook University',
  headline: 'Saransh Grover', // Headline for schema.org JSONLD
  url: 'https://saranshgrover.netlify.app', // Domain of your site. No trailing slash!
  logo: '/logos/logo-1024.jpg', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Saransh', // shortname for manifest. MUST be shorter than 12 characters
  author: 'saranshgrover', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@saranshgrover', // Twitter Username
  facebook: 'neveralonesunny', // Facebook Site Name
  googleAnalyticsID: 'UA-171522512-1',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
