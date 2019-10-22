module.exports = {

    "Login com sucesso": browser => {
        let login = browser.page.login()
        let sidebar = browser.page.sidebar()
        
        browser.resizeWindow(1920, 1080)

        login.navigate()
            .waitForElementVisible('@form', 3000)
            .setValue('@emailInput', 'autobele@msn.com')
            .setValue('@passInput', '132465')
            .click('@loginButton')
        
        sidebar
            .assert.containsText('@userInfo', 'Autobele Silva')
    }

}