module.exports = {

    "Tentativa de login sem usuario": browser => {
        let login = browser.page.login()

        login.navigate()
            .waitForElementVisible('@form', 3000)
            .click('@loginButton')
            .assert.containsText('@alertInfo', 'Opps. Cadê o email?')
    },

    "Tentativa de login sem senha": browser => {
        let login = browser.page.login()

        login.navigate()
            .waitForElementVisible('@form', 3000)
            .setValue('@emailInput', 'autobele@msn.com')
            .click('@loginButton')
            .assert.containsText('@alertInfo', 'Opps. Cadê a senha?')
    },

    "Tentativa de login com credenciais incorretas": browser => {
        let login = browser.page.login()

        login.navigate()
            .waitForElementVisible('@form', 3000)
            .setValue('@emailInput', 'autobele@msn.com')
            .setValue('@passInput', '123')
            .click('@loginButton')
            .assert.containsText('@alertDanger', 'Usuário e/ou senha inválidos')
    },

}