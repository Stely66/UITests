browser.ignoreSynchronization = true;

var lib = require('./lib.js');
var userName = "user1"
var userPass = "userpass"
var siteName = "site1";

describe('First use case', function() {
	it('Login as Administrator', function() {	
		var url = lib.Login("admin", "admin");
		expect(url).toEqual("http://127.0.0.1:9090/share/page/user/admin/dashboard");
	}, 100000);	
		
	it('Create a new user', function() {
		expect(lib.GoToAddUserPage()).toBe(true);
		lib.PopulateUserDetails(userName, "user8@company.com", userName, userPass);
		expect(lib.CreateUser()).toBe(true);
	}, 100000);	
		
	it('Create a new site', function() {
		expect(lib.GoToAddSitePage()).toBe(true);
		lib.PopulateSiteDetails(siteName, "This is the site description.");
		expect(lib.CreateSite()).toBe(true);	
	}, 100000);

	it('Create a document', function() {
		expect(lib.GoToCreateDocumentPage()).toBe(true);
		lib.PopulateDocumentDetails("documentName1", "some content", "documentTitle1", "some description");
		expect(lib.CreateDocument()).toBe(true);
	}, 100000);	
	
	it('Add site member', function() {
		expect(lib.GoToInvitePeoplePage()).toBe(true);
		expect(lib.InviteUser(userName, "Manager")).toBe(true);
	}, 100000);
});






