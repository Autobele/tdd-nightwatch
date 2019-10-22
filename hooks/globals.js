module.exports = {
   beforeEach: (browser, done) => {
       browser.resizeWindow(1920, 1080)
       done()
   },

   afterEach: (browser, done) => {
       browser.end()
       done()
   }
}