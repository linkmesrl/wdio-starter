const vars = require('../helpers/variables')
const login = () => {
  browser.url(vars.url);
  browser.click('a')
  browser.setValue('#user_email', vars.user.username)
  browser.setValue('#user_password', vars.user.password)
  browser.click('#user_submit')
  browser.waitForVisible('.createNewPane')
}

module.exports = login
