var signIn =  function(driver)
  {
    driver
    .url(driver.globals.userNames.adminURL)
    .windowMaximize("current")
    .waitForElementVisible('body', 2000)
    .useXpath()
    .click("//input[@id='admin_email']")
    .pause(1000)
    .setValue("//input[@id='admin_email']", driver.globals.userNames.adminEmail)
    .pause(1000)
    .click("//input[@id='admin_password']")
    .pause(1000)
    .setValue("//input[@id='admin_password']", driver.globals.userNames.adminPassword)
    .pause(1000)
    .click("//input[@class='btn btn-login test-login-button']")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/siginConfirmAdmin.png')
    .pause(2000)
    //click Administration
    .click("(//a[@class='test-nav-config'])[2]")
    .pause(2000)
    .assert.containsText("//h1[@class='pull-left']", "Administration")
    .pause(1000)
  }
  var accounts =  function(driver)
  {
    driver
    .useXpath()
    //click accounts link
    .click("//div[@class='tabs-navbar']/a[2]")
    .pause(2000)            
    //click edit
    .click("//button[@class='btn btn-default pull-right']")
    //Upload account logo
    .setValue("//input[@id='account-logo']", driver.globals.userNames.path + "adminAccountLogo.png")
    .pause(1000)
    .click("//textarea[@ng-model='edited_account.name']")
    .clearValue("//textarea[@ng-model='edited_account.name']")
    .setValue("//textarea[@ng-model='edited_account.name']","Tripthi sprint " + driver.globals.userNames.sprint)
    .pause(500)
    .click("//textarea[@ng-model='edited_account.description']")
    .clearValue("//textarea[@ng-model='edited_account.description']")
    .setValue("//textarea[@ng-model='edited_account.description']","This account is used for smoke and regression testing of sprint " + driver.globals.userNames.sprint)
    .pause(500) 
    //save
    .click("//a[@ng-click='save()']")
    .pause(1000)
  }
  var theme = function(driver)
  {
    driver
    .useXpath()
    //click Theme link
    .click("//div[@class='tabs-navbar']/a[3]")
    .pause(2000)
    //delete the existing theme
    .click("(//button[@class='btn-trash-photo'])[1]")  
    .pause(500) 
    //Upload custom theme
    .setValue("//input[@class='background-field']", driver.globals.userNames.path + "memberTheme.jpg")
    .pause(1000)
    //disable tiled background
    .click("//input[@id='switch_cb_theme.settings.style_background_tiled']")
    .pause(500)
    //set header value
    .click("//input[@ng-model='theme.settings.style_header_color']")
    .clearValue("//input[@ng-model='theme.settings.style_header_color']")
    .setValue("//input[@ng-model='theme.settings.style_header_color']","#0099e1")
    .pause(500)
    //set main value
    .click("//input[@ng-model='theme.settings.style_main_color']")
    .clearValue("//input[@ng-model='theme.settings.style_main_color']")
    .setValue("//input[@ng-model='theme.settings.style_main_color']","#0099e1")
    .pause(500)
    //set background value
    .click("//input[@ng-model='theme.settings.style_background_color']")
    .clearValue("//input[@ng-model='theme.settings.style_background_color']")
    .setValue("//input[@ng-model='theme.settings.style_background_color']","#ebe8e5")
    .pause(500)
    //set background value
    .click("//input[@ng-model='theme.settings.style_background_color']")
    .clearValue("//input[@ng-model='theme.settings.style_background_color']")
    .setValue("//input[@ng-model='theme.settings.style_background_color']","#ebe8e5")
    .pause(500)
    //Upload account logo
    .setValue("//input[@class='logo-field']", driver.globals.userNames.path + "memberAccountLogo.png")
    .pause(2000)
    //upload login logo
    .setValue("//input[@class='login_logo-field']", driver.globals.userNames.path + "memberLoginLogo.png")
    .pause(2000)
    //upload footer logo
    .setValue("//input[@class='footer_logo-field']", driver.globals.userNames.path + "memberFooter.gif")
    .pause(2000)
    //upload account favicon
    .setValue("//input[@class='favicon-field']", driver.globals.userNames.path + "favicon.png")
    .pause(8000)
    //save
    .click("//button[@ng-click='save()']")
    .pause(4000)
  }
  var users = function(driver)
  {
    driver
    .useXpath()
    //click users link
    .click("//div[@class='tabs-navbar']/a[5]")
    .pause(2000)
    //invite admin user 1
    .click("//a[@href='#invite_user']")
    .pause(1000)
    .click("//div[@class='modal-content']/div[2]/div[1]/div[1]/input")
    .setValue("//div[@class='modal-content']/div[2]/div[1]/div[1]/input","admin 1")
    .pause(500)
    .click("//div[@class='modal-content']/div[2]/div[1]/div[2]/input")
    .setValue("//div[@class='modal-content']/div[2]/div[1]/div[2]/input",driver.globals.userNames.sprint + "admin1@yopmail.com")
    .pause(500)
    .click("//a[@ng-click='sentInvite()']")
    .pause(2000)
    //invite admin user 2
    .click("//a[@href='#invite_user']")
    .pause(1000)
    .click("//div[@class='modal-content']/div[2]/div[1]/div[1]/input")
    .setValue("//div[@class='modal-content']/div[2]/div[1]/div[1]/input","admin 2")
    .pause(500)
    .click("//div[@class='modal-content']/div[2]/div[1]/div[2]/input")
    .setValue("//div[@class='modal-content']/div[2]/div[1]/div[2]/input",driver.globals.userNames.sprint + "admin2@yopmail.com")
    .pause(500)
    .click("//button[@class='list-select-toggle filter-option']")
    .click("//ul[@class='list-select-menu']/li[2]")
    .pause(500)
    .click("//a[@ng-click='sentInvite()']")
    .pause(1000)
    .end();
  }
  var confirmAdminusers = function(driver)
  {
    driver
    .useXpath()
    .url("http://yopmail.com")
    .pause(3000)
    //confirm admin user 1 email
    .click("//input[@id='login']")
    .pause(1000)
    .setValue("//input[@id='login']", driver.globals.userNames.sprint + "admin1@yopmail.com")
    .pause(5000)
    .click("//input[@class='sbut']")
    .pause(4000)
    .frame('ifmail')
    //.click("//iframe[@id='ifmail']")
    .pause(2000)
    .click("//div[@id='mailmillieu']/div[2]/p[3]/a")
    .pause(4000)
    //switch frames
    .window_handles(function(result) {
     var handle = result.value[1];
    this.switchWindow(handle);})
    .pause(2000)
    //set admin user 1 password
    .click("//input[@id='admin_password']")
    .setValue("//input[@id='admin_password']", driver.globals.userNames.adminPassword)
    .pause(1000)
    .click("//input[@id='admin_password_confirmation']")
    .setValue("//input[@id='admin_password_confirmation']", driver.globals.userNames.adminPassword)
    .pause(1000)
    .click("//input[@value='Submit']")
    //redirect to yopmail again
    .url("http://yopmail.com")
    .pause(3000)
    //confirm admin user 2 email
    .click("//input[@id='login']")
    .pause(1000)
    .clearValue("//input[@id='login']")
    .pause(1000)
    .setValue("//input[@id='login']", driver.globals.userNames.sprint + "admin2@yopmail.com")
    .pause(5000)
    .click("//input[@class='sbut']")
    .pause(4000)
    .frame('ifmail')
    //.click("//iframe[@id='ifmail']")
    .pause(2000)
    .click("//div[@id='mailmillieu']/div[2]/p[3]/a")
    .pause(4000)
    //switch frames
    .window_handles(function(result) {
    var handle = result.value[2];
    this.switchWindow(handle);})
    .pause(2000)
    //set admin user 2 password
    .click("//input[@id='admin_password']")
    .setValue("//input[@id='admin_password']", driver.globals.userNames.adminPassword)
    .pause(1000)
    .click("//input[@id='admin_password_confirmation']")
    .setValue("//input[@id='admin_password_confirmation']", driver.globals.userNames.adminPassword)
    .pause(500)
    .click("//input[@value='Submit']")
    .pause(1000)
    //click Administration
    .click("(//a[@class='test-nav-config'])[2]")
    .pause(2000)
    //click users link
    .click("//div[@class='tabs-navbar']/a[5]")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyUsersPageAfterConfirmation.png')
    .pause(2000)
  }
  var contactInfo = function(driver)
  {
    driver
    .useXpath()
    //click contact Information
    .click("//div[@class='tabs-navbar']/a[6]")
    .pause(1000)
    //add contact information
    .click("//textarea[@id='account_contact_address']")
    .clearValue("//textarea[@id='account_contact_address']")
    .setValue("//textarea[@id='account_contact_address']", '483 West, 37th Street, NY 10018')
    .pause(500)
    .click("//input[@type='submit']")
    .pause(500)
  }
  var assets = function(driver)
  {
    driver
    .useXpath()
    //click contact Information
    .click("//div[@class='tabs-navbar']/a[7]")
    .pause(1000)
    //add terms and conditions
    .click("(//input[@id='policy_name'])[1]")
    .clearValue("(//input[@id='policy_name'])[1]")
    .setValue("(//input[@id='policy_name'])[1]", "Terms and condition title")
    .pause(1000)
    .click("//textarea[@id='policy_text'])[1]")
    .clearValue("(//textarea[@id='policy_text'])[1]")
    .setValue("(//textarea[@id='policy_text'])[1]", "Terms and conditions description. Welcome to the MyMagazineTM Sharing Network community.By using the Site, by registering with the Community, and/or by becoming a member of the Community, you agree to be bound by these TOS. The Community reserves the right, in its sole discretion, to change, modify, add to, or delete from these TOS at any time by posting a revised version of these TOS on this page. Each version of these TOS will indicate at the top of this page the date they were last revised. Your continued use of the Site, or your subsequent registration or entry into membership, after any revised version of these TOS is posted constitutes your acceptance of the revised version.")
    .pause(1000)
    .click("(//input[@class='btn btn-default'])[1]")
    .pause(1000)
    //add privacy
    .click("(//input[@id='policy_name'])[2]")
    .clearValue("(//input[@id='policy_name'])[2]")
    .setValue("(//input[@id='policy_name'])[2]", "Privacy title ")
    .pause(1000)
    .click("//textarea[@id='policy_text'])[2]")
    .clearValue("(//textarea[@id='policy_text'])[2]")
    .setValue("(//textarea[@id='policy_text'])[2]", "We do not allow you to share any profile information except your USERNAME and image on our web site. You choose what information you put in your public profile, and it is not required to use the web site.")
    .pause(1000)
    .click("(//input[@class='btn btn-default'])[2]")
    .pause(1000)
    //add Disclosure
    .click("(//input[@id='policy_name'])[3]")
    .clearValue("(//input[@id='policy_name'])[3]")
    .setValue("(//input[@id='policy_name'])[3]", "Disclosure title")
    .pause(1000)
    .click("//textarea[@id='policy_text'])[3]")
    .clearValue("(//textarea[@id='policy_text'])[3]")
    .setValue("(//textarea[@id='policy_text'])[3]", "When you spread the word about a product you've received from us, you must clearly communicate that you were compensated with a free product in exchange for your honest review. An example of how you can do this is to include the following phrase in your review:")
    .pause(1000)
    .click("(//input[@class='btn btn-default'])[3]")
    .pause(1000)
    //add about us
    .click("(//input[@id='policy_name'])[4]")
    .clearValue("(//input[@id='policy_name'])[4]")
    .setValue("(//input[@id='policy_name'])[4]", "About Us title")
    .pause(1000)
    .click("//textarea[@id='policy_text'])[4]")
    .clearValue("(//textarea[@id='policy_text'])[4]")
    .setValue("(//textarea[@id='policy_text'])[4]", "MyMagazineTM Sharing Network is a place to have your voice heard, and share your experiences with your friends. You can even earn points and badges for participating. And even better? Being a member is always free!")
    .pause(1000)
    .click("(//input[@class='btn btn-default'])[4]")
    .pause(3000)
  }
  var verifyAdminLevelRestrictions = function(driver)
  {
    driver
    .useXpath()
    .click("//button[@class='topbar-menu-toggle test-nav-user']")
    .pause(1000)
    .click("//a[@class='test-nav-logout']")
    .pause(2000)
    //Login as a Super admin and goto accounts page
    .click("//input[@id='admin_email']")
    .pause(1000)
    .setValue("//input[@id='admin_email']", driver.globals.userNames.superAdminEmail)
    .pause(1000)
    .click("//input[@id='admin_password']")
    .pause(1000)
    .setValue("//input[@id='admin_password']", driver.globals.userNames.superAdminPass)
    .pause(1000)
    .click("//input[@class='btn btn-login test-login-button']")
    .pause(2000)
    .url(driver.globals.userNames.adminURL + "/accounts/" + driver.globals.userNames.account_no)
    .pause(2000)
    //Toggle off admin level 1 and 2 restrictions
    .click("//button[@ng-click='edit()']")
    .pause(4000)
    .click("(//span[@class='switch-handle'])[1]")
    .pause(1000)
    .click("(//span[@class='switch-handle'])[2]")
    .pause(500)
    .click("(//button[@ng-click='save()'])[1]")
    .pause(2000)
    .click("//button[@class='topbar-menu-toggle test-nav-user']")
    .pause(500)
    .click("//a[@class='test-nav-logout']")
    .pause(2000)
    //Verify restriction for admin level 1
    .click("//input[@id='admin_email']")
    .pause(1000)
    .setValue("//input[@id='admin_email']", driver.globals.userNames.sprint + "admin1@yopmail.com")
    .pause(1000)
    .click("//input[@id='admin_password']")
    .pause(1000)
    .setValue("//input[@id='admin_password']", driver.globals.userNames.adminPassword)
    .pause(1000)
    .click("//input[@class='btn btn-login test-login-button']")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyAdminLevel1Restriction.png')
    .pause(2000)
    .click("//button[@class='topbar-menu-toggle test-nav-user']")
    .pause(500)
    .click("//a[@class='test-nav-logout']")
    .pause(2000)
    //Verify restriction for admin level 2
    .click("//input[@id='admin_email']")
    .pause(1000)
    .setValue("//input[@id='admin_email']", driver.globals.userNames.sprint + "admin2@yopmail.com")
    .pause(1000)
    .click("//input[@id='admin_password']")
    .pause(1000)
    .setValue("//input[@id='admin_password']", driver.globals.userNames.adminPassword)
    .pause(1000)
    .click("//input[@class='btn btn-login test-login-button']")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyAdminLevel2Restriction.png')
    .pause(2000)
  }
  var memberSideVerify = function(driver)
  {
    driver
    .url(driver.globals.userNames.memberURL)
    .useXpath()
    //Verify Login logo
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyLoginLogo.png')
    .pause(2000)
    .click("(//i[@class='material-icons notification-cancel'])[1]")
    .pause(500)
    .click("(//i[@class='material-icons notification-cancel'])[2]")
    .pause(500)
    //Verify Terms and Conditions
    .click("(//a[@href='#/footer/terms_conditions'])[1]")
    .pause(1000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyTermsCondition.png')
    .click("(//i[@class='fa fa-times dialog-close'])[3]")
    .pause(500)
    //Verify Privacy
    .click("(//a[@href='#/footer/privacy'])[1]")
    .pause(1000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyPrivacy.png')
    .click("(//i[@class='fa fa-times dialog-close'])[3]")
    .pause(500)
    //Verify Disclosure
    .click("#/footer/disclosure'])[1]")
    .pause(1000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyDisclosure.png')
    .click("(//i[@class='fa fa-times dialog-close'])[3]")
    .pause(500)
    //Verify About Us
    .click("(//a[@href='#/footer/about'])[1]")
    .pause(1000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyAboutUs.png')
    .click("(//i[@class='fa fa-times dialog-close'])[3]")
    .pause(500)
     //Verify Contact Us
    .click("(//a[@href='#/contact_us'])[1]")
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyContactUs.png')
    .pause(2000)
    //Verify if Contact Us functionality works correctly
    .click("(//input[@name='contact_message[name]'])[6]")
    .setValue("(//input[@name='contact_message[name]'])[6]","ContactUs name")
    .pause(500)
    .click("(//input[@name='contact_message[email]'])[6]")
    .setValue("(//input[@name='contact_message[email]'])[6]",driver.globals.userNames.memberEmail)
    .pause(500)
    .click("(//textarea[@name='contact_message[content]'])[6]")
    .setValue("(//textarea[@name='contact_message[content]'])[6]","Contact Us message goes here")
    .pause(500)
    .click("(//input[@type='submit'])[6]")
    .pause(1000)
    .click("(//i[@class='fa fa-times dialog-close'])[3]")
    .pause(500)
    .click("(//a[contains(text(), 'Login')])[2]")
    .pause(1000)
    .click("(//div[contains(text(), 'Email')])[6]")
    .pause(1000)
    .click("//div[@class='desktop-container ng-scope']/div/form/div[1]/input")
    .pause(1000)
    .setValue('//div[@class="desktop-container ng-scope"]/div/form/div[1]/input', driver.globals.userNames.memberEmail)
    .pause(1000)
    .click("//div[@class='desktop-container ng-scope']/div/form/div[2]/input")
    .pause(1000)
    .setValue("//div[@class='desktop-container ng-scope']/div/form/div[2]/input", driver.globals.userNames.memberPassword)
    .pause(1000)
    .click("//div[@class='desktop-container ng-scope']/div/form/button")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyAccountLogo.png')
    .pause(1000)
    .execute('scrollTo(2000,2000)')
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyAccountFooter.png')
    .pause(1000)
    .click("//a[@href='#footer/contact_us']")
    .pause(500)
    .click("//textarea[@placeholder='type your message here']")
    .setValue("//textarea[@placeholder='type your message here']","Contact us message goes here")
    .pause(500)
    .click("//button[@class='btn btn-primary']")
    .pause(1000)
    //Redirect to yopmail and verify if the admin gets the contact us email
    .url("http://yopmail.com")
    .pause(3000)
    .click("//input[@id='login']")
    .pause(1000)
    .setValue("//input[@id='login']", driver.globals.userNames.adminEmail)
    .pause(5000)
    .click("//input[@class='sbut']")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyAdminReceivesContactUsEmail.png')
    .pause(2000)
  }

module.exports={
  signIn: signIn,
accounts: accounts,
theme: theme,
users: users,
confirmAdminusers: confirmAdminusers,
contactInfo: contactInfo,
assets: assets,
verifyAdminLevelRestrictions: verifyAdminLevelRestrictions,
memberSideVerify: memberSideVerify
}