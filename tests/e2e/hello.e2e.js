const HelloPage = require('../pages/hello.page')

describe('My hello world application', () => {
    it('toggle', async () => {
        await HelloPage.open()
        await HelloPage.toggleTitleWithInput('hello')
        await expect(HelloPage.helloTitle).toBeExisting()
        await HelloPage.toggleBtn.click()
        await expect(HelloPage.helloTitle).not.toBeExisting()
    })

    it('wrong toggle', async () => {
        await HelloPage.open()
        await HelloPage.toggleTitleWithInput('helasdlo')
        await expect(HelloPage.helloTitle).not.toBeExisting()
    })
})


