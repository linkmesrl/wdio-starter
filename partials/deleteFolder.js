const deleteFolder = () => {
  browser.waitForVisible('[data-event-type="delete"]')
  browser.click('[data-event-type="delete"]')
  browser.waitForVisible('.modal--inner')
  browser.click('.modal--inner .btn-approve-color-full')
}

module.exports = deleteFolder
