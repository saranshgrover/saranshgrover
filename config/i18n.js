const website = require('./website')

module.exports = {
  'en-us': {
    default: true,
    path: 'en',
    locale: 'en-us',
    siteLanguage: 'en',
    ogLang: 'en_US',
    defaultTitle: website.title,
    defaultTitleAlt: website.titleAlt,
    defaultDescription: website.description,
    headline: website.headline,
    category: 'Category',
    categories: 'Categories',
    was: 'was',
    were: 'were',
    tagged: 'tagged with',
    recent: 'Recent',
    projects: 'projects',
    allCategories: 'All categories',
    entries: 'entries',
  },
}
