var loginActions = {
    with: function (email, password) {
        return this
            .navigate()
            .waitForElementVisible('@form', 3000)
            .setValue('@emailInput', email)
            .setValue('@passInput', password)
            .click('@loginButton')
    }
}

module.exports = {
    url: 'http://localhost:5000/login',
    commands: [loginActions],
    elements: {
        form: '.card-login',
        emailInput: '#emailId',
        passInput: '#passId',
        loginButton: '.login-button',
        alertInfo: '.alert-info',
        alertDanger: '.alert-danger'
    }
}