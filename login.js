browser.ignoreSynchronization = true;
describe('First use case', function() {
	it('Login as Administrator', function() {
		browser.driver.get('http://127.0.0.1:9090/share/page/');
		browser.driver.findElement(by.name('username')).sendKeys('admin');
		browser.driver.findElement(by.name('password')).sendKeys('admin');
		element(by.buttonText('Login')).click();
		browser.driver.getCurrentUrl().then(function(url) {
		  expect(url).toEqual("http://127.0.0.1:9090/share/page/user/admin/dashboard");
		});
	}, 100000);	
		
	it('Create a new user', function() {
		browser.driver.findElement(by.id('HEADER_ADMIN_CONSOLE_text')).findElement(by.css('.alfresco-navigation-_HtmlAnchorMixin')).click();	
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(by.id('page_x002e_tools_x002e_admin-console_x0023_default'));
		}, 10000);	
		browser.driver.isElementPresent(by.id('page_x002e_tools_x002e_admin-console_x0023_default')).then(function(present){
			expect(present).toBe(true);
		});
		browser.driver.findElement(by.id('page_x002e_tools_x002e_admin-console_x0023_default-body')).findElement(by.css('[title="User Management"]')).click();	
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(by.id('page_x002e_ctool_x002e_admin-console_x0023_default-newuser-button-button'));
		}, 10000);	
		browser.driver.findElement(by.id('page_x002e_ctool_x002e_admin-console_x0023_default-newuser-button-button')).click();
		browser.driver.findElement(by.id('page_x002e_ctool_x002e_admin-console_x0023_default-create-firstname')).sendKeys('User2');
		browser.driver.findElement(by.id('page_x002e_ctool_x002e_admin-console_x0023_default-create-email')).sendKeys('User2@company.com');
		browser.driver.findElement(by.id('page_x002e_ctool_x002e_admin-console_x0023_default-create-username')).sendKeys('User2');
		browser.driver.findElement(by.id('page_x002e_ctool_x002e_admin-console_x0023_default-create-password')).sendKeys('User2');
		browser.driver.findElement(by.id('page_x002e_ctool_x002e_admin-console_x0023_default-create-verifypassword')).sendKeys('User2');
		browser.driver.findElement(by.id('page_x002e_ctool_x002e_admin-console_x0023_default-createuser-ok-button-button')).click();
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(by.id('HEADER_HOME_text'));
		}, 10000);	
		browser.driver.sleep(500);
		browser.driver.findElement(by.id('HEADER_HOME_text')).findElement(by.css('.alfresco-navigation-_HtmlAnchorMixin')).click();	
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(by.id('page_x002e_full-width-dashlet_x002e_user_x007e_admin_x007e_dashboard_x0023_default-createSite-button'));
		}, 10000);
	}, 100000);	
		
	it('Create a new site', function() {
		browser.driver.findElement(by.id('page_x002e_full-width-dashlet_x002e_user_x007e_admin_x007e_dashboard_x0023_default-createSite-button')).click();	
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(by.id('alfresco-createSite-instance-dialog'));
		}, 10000);
		browser.driver.isElementPresent(by.id('alfresco-createSite-instance-dialog')).then(function(present){
			expect(present).toBe(true);
		});
		browser.driver.findElement(by.id('alfresco-createSite-instance-title')).sendKeys('Site52');
		//browser.driver.findElement(by.id('alfresco-createSite-instance-shortName')).clear();
		//browser.driver.findElement(by.id('alfresco-createSite-instance-shortName')).sendKeys('Site11');
		browser.driver.findElement(by.id('alfresco-createSite-instance-description')).sendKeys('This is the first site.');
		browser.driver.findElement(by.id('alfresco-createSite-instance-ok-button-button')).click();
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(by.id('HEADER_SITE_DASHBOARD_text'));
		}, 10000);
		browser.driver.isElementPresent(by.id('HEADER_SITE_DASHBOARD_text')).then(function(present){
			expect(present).toBe(true);
		});	
	}, 100000);	
		
	it('Upload a file', function() {
		browser.driver.findElement(by.id('HEADER_SITE_DOCUMENTLIBRARY_text')).findElement(by.css('.alfresco-navigation-_HtmlAnchorMixin')).click();
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(by.id('template_x002e_documentlist_v2_x002e_documentlibrary_x0023_default-createContent-button-button'));
		}, 10000);
		browser.driver.findElement(by.id('template_x002e_documentlist_v2_x002e_documentlibrary_x0023_default-createContent-button-button')).click();
		browser.driver.findElement(by.id('yui-gen1')).findElement(by.css('.yuimenuitemlabel')).click();
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(by.id('template_x002e_create-content_x002e_create-content_x0023_default-form-submit-button'));
		}, 10000);
		browser.driver.findElement(by.id('template_x002e_create-content_x002e_create-content_x0023_default_prop_cm_name')).sendKeys('Document1');
		browser.driver.findElement(by.id('template_x002e_create-content_x002e_create-content_x0023_default-form-submit-button')).click();
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(by.id('template_x002e_web-preview_x002e_document-details_x0023_default-previewer-div'));
		}, 10000);
		browser.driver.isElementPresent(by.id('template_x002e_web-preview_x002e_document-details_x0023_default-previewer-div')).then(function(present){
			expect(present).toBe(true);
		});	
	}, 100000);	
	
	it('Add site member', function() {
		browser.driver.findElement(by.id('HEADER_SITE_MEMBERS_text')).findElement(by.css('.alfresco-navigation-_HtmlAnchorMixin')).click();
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(by.id('template_x002e_site-members_x002e_site-members_x0023_default-invite-people-link'));
		}, 10000);
		browser.driver.findElement(by.id('template_x002e_site-members_x002e_site-members_x0023_default-invite-people-link')).click();
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(by.id('template_x002e_people-finder_x002e_invite_x0023_default-search-text'));
		}, 10000);
		browser.driver.findElement(by.id('template_x002e_people-finder_x002e_invite_x0023_default-search-text')).sendKeys('User2');
		browser.driver.findElement(by.id('template_x002e_people-finder_x002e_invite_x0023_default-search-button-button')).click();
		browser.driver.wait(function() {
			return element(by.id('template_x002e_people-finder_x002e_invite_x0023_default-results')).element(by.buttonText('Add >>')).isPresent();
		}, 10000);
		element(by.id('template_x002e_people-finder_x002e_invite_x0023_default-results')).element(by.buttonText('Add >>')).isPresent().then(function(present){
			expect(present).toBe(true);
		});	
		element(by.id('template_x002e_people-finder_x002e_invite_x0023_default-results')).element(by.buttonText('Add >>')).click();
		browser.driver.findElement(by.id('actionsDiv1')).findElement(by.css('[type="button"]')).click();
		element(by.linkText('Manager')).click();
		browser.driver.findElement(by.id('template_x002e_invitationlist_x002e_invite_x0023_default-invite-button-button')).click();
	}, 100000);
	
	it('Login as site member', function() {
		browser.driver.findElement(by.id('HEADER_USER_MENU_POPUP_text')).click();
		browser.driver.findElement(by.id('HEADER_USER_MENU_LOGOUT')).click();
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(by.id('page_x002e_components_x002e_slingshot-login_x0023_default-submit-button'));
		}, 10000);
		browser.driver.findElement(by.name('username')).sendKeys('User2');
		browser.driver.findElement(by.name('password')).sendKeys('User2');
		browser.driver.findElement(by.id('page_x002e_components_x002e_slingshot-login_x0023_default-submit-button')).click();
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(by.id('HEADER_USER_MENU_POPUP_text'));
		}, 10000);
		browser.driver.findElement(by.id('HEADER_TASKS_text')).click();
		browser.driver.findElement(by.id('HEADER_MY_TASKS_text')).findElement(by.css('.alfresco-navigation-_HtmlAnchorMixin')).click();
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(by.id('template_x002e_list_x002e_my-tasks_x0023_default-body'));
		}, 10000);	
		browser.driver.findElement(by.css('[title="Edit Task"]')).click();	
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(by.id('page_x002e_data-form_x002e_task-edit_x0023_default_prop_inwf_inviteOutcome-accept-button'));
		}, 10000);
		browser.driver.findElement(by.id('page_x002e_data-form_x002e_task-edit_x0023_default_prop_inwf_inviteOutcome-accept-button')).click();
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(by.id('template_x002e_list_x002e_my-tasks_x0023_default-tasks'));
		}, 10000);	
		browser.driver.findElement(by.id('HEADER_SITES_MENU')).click();
		browser.driver.wait(function() {
			return element(by.linkText('My Sites')).isPresent();
		}, 10000);
		element(by.linkText('My Sites')).click();
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(by.id('template_x002e_user-sites_x002e_user-sites_x0023_default-sites'));
		}, 10000);
		browser.driver.findElement(by.id('template_x002e_user-sites_x002e_user-sites_x0023_default-sites')).findElement(by.css('.theme-color-1')).click();
		browser.driver.isElementPresent(by.id('HEADER_SITE_DASHBOARD_text')).then(function(present){
			expect(present).toBe(true);
		});
		browser.driver.findElement(by.id('HEADER_SITE_DOCUMENTLIBRARY_text')).findElement(by.css('.alfresco-navigation-_HtmlAnchorMixin')).click();
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(by.id('template_x002e_documentlist_v2_x002e_documentlibrary_x0023_default-createContent-button-button'));
		}, 10000);
		browser.driver.isElementPresent(by.linkText ('Document1')).then(function(present){
			expect(present).toBe(true);
		});	
	}, 100000);

	//browser.driver.sleep(5000);
  
});






