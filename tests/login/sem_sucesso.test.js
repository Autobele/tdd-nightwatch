module.exports = {

    "Login sem usuario": browser => {
        let login = browser.page.login()

        login
            .with('', '')
            .assert.containsText('@alertInfo', 'Opps. Cadê o email?')
    },

    "Login sem senha": browser => {
        let login = browser.page.login()

        login
            .with('autobele@msn.com', '')
            .assert.containsText('@alertInfo', 'Opps. Cadê a senha?')
    },

    "Login com credenciais incorretas": browser => {
        let login = browser.page.login()

        login
            .with('autobele@msn.com', '123')
            .assert.containsText('@alertDanger', 'Usuário e/ou senha inválidos')
    },  

}