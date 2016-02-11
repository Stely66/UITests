var lib = function(){
	this.Login = function(username, password) {
		browser.driver.get('http://127.0.0.1:9090/share/page/');
		browser.driver.findElement(by.name('username')).sendKeys('admin');
		browser.driver.findElement(by.name('password')).sendKeys('admin');
		element(by.buttonText('Login')).click();
		return browser.driver.getCurrentUrl();
	};
	
	this.GoToAddUserPage = function() {
		browser.driver.findElement(by.id('HEADER_ADMIN_CONSOLE_text')).findElement(by.css('.alfresco-navigation-_HtmlAnchorMixin')).click();	
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(by.id('page_x002e_tools_x002e_admin-console_x0023_default'));
		}, 10000);	
		//return browser.driver.isElementPresent(by.id('page_x002e_tools_x002e_admin-console_x0023_default'));
		browser.driver.findElement(by.id('page_x002e_tools_x002e_admin-console_x0023_default-body')).findElement(by.css('[title="User Management"]')).click();	
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(by.id('page_x002e_ctool_x002e_admin-console_x0023_default-newuser-button-button'));
		}, 10000);	
		
		return browser.driver.isElementPresent(by.id('page_x002e_ctool_x002e_admin-console_x0023_default-newuser-button-button'));
	};
	
	this.PopulateUserDetails = function(firstname, email, username, password) {
		browser.driver.findElement(by.id('page_x002e_ctool_x002e_admin-console_x0023_default-newuser-button-button')).click();
		browser.driver.findElement(by.id('page_x002e_ctool_x002e_admin-console_x0023_default-create-firstname')).sendKeys(firstname);
		browser.driver.findElement(by.id('page_x002e_ctool_x002e_admin-console_x0023_default-create-email')).sendKeys(email);
		browser.driver.findElement(by.id('page_x002e_ctool_x002e_admin-console_x0023_default-create-username')).sendKeys(username);
		browser.driver.findElement(by.id('page_x002e_ctool_x002e_admin-console_x0023_default-create-password')).sendKeys(password);
		browser.driver.findElement(by.id('page_x002e_ctool_x002e_admin-console_x0023_default-create-verifypassword')).sendKeys(password);
	};
	
	this.CreateUser = function() {	
		browser.driver.findElement(by.id('page_x002e_ctool_x002e_admin-console_x0023_default-createuser-ok-button-button')).click();
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(by.id('HEADER_HOME_text'));
		}, 10000);	
		browser.driver.sleep(500);
		browser.driver.findElement(by.id('HEADER_HOME_text')).findElement(by.css('.alfresco-navigation-_HtmlAnchorMixin')).click();	
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(by.id('page_x002e_full-width-dashlet_x002e_user_x007e_admin_x007e_dashboard_x0023_default-createSite-button'));
		}, 10000);
		return browser.driver.isElementPresent(by.id('page_x002e_full-width-dashlet_x002e_user_x007e_admin_x007e_dashboard_x0023_default-createSite-button'));
	};
	
	this.GoToAddSitePage = function() {
		browser.driver.findElement(by.id('page_x002e_full-width-dashlet_x002e_user_x007e_admin_x007e_dashboard_x0023_default-createSite-button')).click();	
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(by.id('alfresco-createSite-instance-dialog'));
		}, 10000);
		return browser.driver.isElementPresent(by.id('alfresco-createSite-instance-dialog'));
	};
	
	this.PopulateSiteDetails = function(siteName, siteDescription) {
		browser.driver.findElement(by.id('alfresco-createSite-instance-title')).sendKeys(siteName);
		browser.driver.findElement(by.id('alfresco-createSite-instance-description')).sendKeys(siteDescription);
	};
	
	this.CreateSite = function() {
		browser.driver.findElement(by.id('alfresco-createSite-instance-ok-button-button')).click();
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(by.id('HEADER_SITE_DASHBOARD_text'));
		}, 10000);
		return browser.driver.isElementPresent(by.id('HEADER_SITE_DASHBOARD_text'));
	};
	
	this.GoToCreateDocumentPage = function() {
		browser.driver.findElement(by.id('HEADER_SITE_DOCUMENTLIBRARY_text')).findElement(by.css('.alfresco-navigation-_HtmlAnchorMixin')).click();
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(by.id('template_x002e_documentlist_v2_x002e_documentlibrary_x0023_default-createContent-button-button'));
		}, 10000);
		browser.driver.findElement(by.id('template_x002e_documentlist_v2_x002e_documentlibrary_x0023_default-createContent-button-button')).click();
		browser.driver.findElement(by.id('yui-gen1')).findElement(by.css('.yuimenuitemlabel')).click();
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(by.id('template_x002e_create-content_x002e_create-content_x0023_default-form-submit-button'));
		}, 10000);
		return browser.driver.isElementPresent(by.id('template_x002e_create-content_x002e_create-content_x0023_default-form-submit-button'))
	};
	
	this.PopulateDocumentDetails = function(name, content, title, description) {
		browser.driver.findElement(by.id('template_x002e_create-content_x002e_create-content_x0023_default_prop_cm_name')).sendKeys(name);
		browser.driver.findElement(by.id('template_x002e_create-content_x002e_create-content_x0023_default_prop_cm_content')).sendKeys(content);
		browser.driver.findElement(by.id('template_x002e_create-content_x002e_create-content_x0023_default_prop_cm_title')).sendKeys(title);
		browser.driver.findElement(by.id('template_x002e_create-content_x002e_create-content_x0023_default_prop_cm_description')).sendKeys(description);
	};
	
	this.CreateDocument = function() {
		browser.driver.findElement(by.id('template_x002e_create-content_x002e_create-content_x0023_default-form-submit-button')).click();
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(by.id('template_x002e_web-preview_x002e_document-details_x0023_default-previewer-div'));
		}, 10000);
		return browser.driver.isElementPresent(by.id('template_x002e_web-preview_x002e_document-details_x0023_default-previewer-div'));
	};
	
	this.GoToInvitePeoplePage = function() {
		browser.driver.findElement(by.id('HEADER_SITE_MEMBERS_text')).findElement(by.css('.alfresco-navigation-_HtmlAnchorMixin')).click();
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(by.id('template_x002e_site-members_x002e_site-members_x0023_default-invite-people-link'));
		}, 10000);
		browser.driver.findElement(by.id('template_x002e_site-members_x002e_site-members_x0023_default-invite-people-link')).click();
		browser.driver.wait(function() {
			return browser.driver.isElementPresent(by.id('template_x002e_people-finder_x002e_invite_x0023_default-search-text'));
		}, 10000);
		return browser.driver.isElementPresent(by.id('template_x002e_people-finder_x002e_invite_x0023_default-search-text'));
	};
	
	this.InviteUser = function(name, role) {
		browser.driver.findElement(by.id('template_x002e_people-finder_x002e_invite_x0023_default-search-text')).sendKeys(name);
		browser.driver.findElement(by.id('template_x002e_people-finder_x002e_invite_x0023_default-search-button-button')).click();
		browser.driver.wait(function() {
			return element(by.id('template_x002e_people-finder_x002e_invite_x0023_default-results')).element(by.buttonText('Add >>')).isPresent();
		}, 10000);
		element(by.id('template_x002e_people-finder_x002e_invite_x0023_default-results')).element(by.buttonText('Add >>')).isPresent().then(function(present){
			//expect(present).toBe(true);
		});
		element(by.id('template_x002e_people-finder_x002e_invite_x0023_default-results')).element(by.buttonText('Add >>')).click();
		browser.driver.findElement(by.id('actionsDiv1')).findElement(by.css('[type="button"]')).click();
		element(by.linkText(role)).click();
		browser.driver.findElement(by.id('template_x002e_invitationlist_x002e_invite_x0023_default-invite-button-button')).click();
		

		return browser.driver.isElementPresent(by.css('[disabled="disabled"]#template_x002e_invitationlist_x002e_invite_x0023_default-invite-button-button'));
	}
};

module.exports = new lib();

