

var signIn =  function(driver)
  {
    driver
    .url(driver.globals.userNames.adminURL)
    .windowMaximize("current")
    .waitForElementVisible('body', 2000)
    .useXpath()
    .click("//input[@id='admin_email']")
    .pause(2000)
    .setValue("//input[@id='admin_email']", driver.globals.userNames.adminEmail)
    .pause(2000)
    .click("//input[@id='admin_password']")
    .pause(2000)
    .setValue("//input[@id='admin_password']", driver.globals.userNames.adminPassword)
    .pause(2000)
    .click("//input[@class='btn btn-login test-login-button']")
    .pause(4000)
    .saveScreenshot('screenshots/siginConfirmAdmin.png')
    .pause(2000)
  }

var clickAdminLinks = function(driver)
{
    driver
    .useXpath()
    //click Mission Hubs
    .click("//ul[@class='navbar-nav']/li[2]")
    .pause(2000)
    .saveScreenshot('screenshots/missionHubsPage.png')
    //click Members
    .click("//ul[@class='navbar-nav']/li[3]")
    .pause(2000)
    .saveScreenshot('screenshots/membersPage.png')
    //click Groups and Lists
    .click("//ul[@class='navbar-nav']/li[4]")
    .pause(2000)
    .saveScreenshot('screenshots/groupsListsPage.png')
    //click Reports
    .click("//ul[@class='navbar-nav']/li[5]")
    .pause(2000)
    .saveScreenshot('screenshots/reportsPage.png')
    //click Administration
    .click("//ul[@class='navbar-nav']/li[6]")
    .pause(2000)
    .saveScreenshot('screenshots/administrationPage.png')
    //click Administration Wizards
    .click("//div[@class='tabs-navbar']/a[1]/span")
    .pause(2000)
    .saveScreenshot('screenshots/wizardsPage.png')
    //click Administration Accounts
    .click("//div[@class='tabs-navbar']/a[2]")
    .pause(2000)
    .saveScreenshot('screenshots/accountsPage.png')
    //click Administration Theme
    .click("//div[@class='tabs-navbar']/a[3]")
    .pause(2000)
    .saveScreenshot('screenshots/themePage.png')
     //click Administration Settings
    .click("//div[@class='tabs-navbar']/a[4]")
    .pause(2000)
    .saveScreenshot('screenshots/settingsPage.png')
     //click Administration Users
    .click("//div[@class='tabs-navbar']/a[5]")
    .pause(2000)
    .saveScreenshot('screenshots/usersPage.png')
    //click Administration Contact Information
    .click("//div[@class='tabs-navbar']/a[6]")
    .pause(2000)
    .saveScreenshot('screenshots/contactInfoPage.png')
    //click Administration Assets
    .click("//div[@class='tabs-navbar']/a[7]")
    .pause(2000)
    .saveScreenshot('screenshots/assetsPage.png')
    //click Administration Login Page
    .click("//div[@class='tabs-navbar']/a[8]")
    .pause(2000)
    .saveScreenshot('screenshots/loginPage.png')
    //click Administration Dashboard
    .click("//div[@class='tabs-navbar']/a[9]")
    .pause(2000)
    .saveScreenshot('screenshots/dashboardPage.png')

}
module.exports={
  signIn: signIn,
  clickAdminLinks: clickAdminLinks
//sharing: sharing
}
