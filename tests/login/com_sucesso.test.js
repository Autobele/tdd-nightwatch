module.exports = {

    "Login com sucesso": browser => {
        let login = browser.page.login()
        let sidebar = browser.page.sidebar()
        
        browser.resizeWindow(1920, 1080)

        login
            .with('autobele@msn.com', '132465')
        
        sidebar
            .assert.containsText('@userInfo', 'Autobele Silva')
    }

}