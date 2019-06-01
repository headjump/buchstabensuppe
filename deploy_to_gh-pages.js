var ghpages = require('gh-pages')

console.log(
  `
  ------------------
  Publishing...`
)
ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: 'git@github.com:headjump/buchstabensuppe.git'
}, function (err) {
  if (err) {
    console.log('ERROR: ' + err)
  } else {
    console.log('DONE :)')
  }
  console.log('------------------')
})
