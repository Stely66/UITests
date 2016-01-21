describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.driver.get('http://127.0.0.1:8080/share/page/');
    browser.driver.findElement(by.name('username')).sendKeys('admin');
	browser.driver.findElement(by.name('password')).sendKeys('admin');
	browser.driver.findElement(by.id('page_x002e_components_x002e_slingshot-login_x0023_default-submit-button')).click();

       browser.driver.getCurrentUrl().then(function(url) {
          expect(url).toEqual("http://127.0.0.1:8080/share/page/user/admin/dashboard");
       });
  });
});