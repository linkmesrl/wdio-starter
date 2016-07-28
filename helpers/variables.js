const baseUrl = 'http://localhost:3001'
const giovanni = {
  username: 'giovanni.lela@link-me.it',
  password: 'giovanni123'
}

const vars = {
  user: process.env.E2E_USER ? process.env.E2E_USER : giovanni,
  url: process.env.E2E_URL ? process.env.E2E_USER : baseUrl,
}


module.exports = vars
