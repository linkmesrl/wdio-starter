const baseUrl = 'http://localhost:3001'
const daniele = {
  username: 'daniele.bertella@link-me.it',
  password: 'daniele'
}

const vars = {
  user: process.env.E2E_USER ? process.env.E2E_USER : giovanni,
  url: process.env.E2E_URL ? process.env.E2E_USER : baseUrl,
}


module.exports = vars
