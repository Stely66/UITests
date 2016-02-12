browser.ignoreSynchronization = true;

var lib = require('./lib.js');

describe('Login', function() {
   it('Login as Admin', function() {
       var url = lib.Login("admin", "admin");
       expect(url).toEqual("http://127.0.0.1:9090/share/page/user/admin/dashboard");
   }, 100000); 
});