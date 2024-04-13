const _ = require('lodash');

// slugify for url friendly way of it..
const blogTitle = "Deep Insight on Lodash";
console.log('Blog title - ', blogTitle);
const slugifiedTitle = _.kebabCase(blogTitle);
console.log('slugified blog title - ', slugifiedTitle);