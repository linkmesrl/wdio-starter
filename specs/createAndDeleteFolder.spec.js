const login = require('../partials/login')
const deleteFolder = require('../partials/deleteFolder')

describe('prova', () => {
  it('works', () => {
    login()
    browser.click('.createNewPane')
    browser.waitForVisible('.togglePane--pane')
    browser.click('.togglePane--pane a:first-child')
    browser.waitForVisible('[placeholder="Folder title"]')
    browser.setValue('[placeholder="Folder title"]', 'Folder creata con selenium')
    browser.setValue('[placeholder="Folder description"]', 'Descrizione creata con selenium')
    browser.setValue('.react-datepicker-custom', '05/08/2016')
    browser.click('body')
    browser.click('[name="urgent"]')
    deleteFolder()
  })
})
