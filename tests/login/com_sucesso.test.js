module.exports = {

    "Login com sucesso": browser => {
        let login = browser.page.login()
        let sidebar = browser.page.sidebar()
        
        login.with('autobele@msn.com', '132465')
        
        sidebar
        .waitForElementVisible('@userInfo', 3000)
        .assert.containsText('@userInfo', 'Autobele Silva')
    }

}