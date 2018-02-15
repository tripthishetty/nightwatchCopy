

var adminlogin =  function(driver)
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
    //click Mission Hub
    .click("//a[@class='test-nav-hubs']")
    .pause(2000)
    .assert.containsText("//a[@class='test-nav-hubs']", "Mission Hub")
    //click Activity
    .click("(//a[@class='rowclick test-hub-link ng-binding'])[2]")
    .pause(2000)

  }
var activityMonitoring = function(driver)
{
  driver
  .click("//a[@class=' test-hub-nav-monitoring']")
  .pause(2000)
  //click flags postive
  .click("(//input[@ng-model='share.admin_feedback'])[1]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[4]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[7]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[10]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[13]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[16]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[19]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[22]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[25]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[28]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[31]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[34]")
  .pause(2000)
  //click Overview Tab
  .click("//a[@class=' test-hub-nav-overview']")
  .pause(2000)
}


    
var downloadAnalytics = function(driver)
{
  driver

    .click("//a[@class='mission-item-analytics-link']")
    .pause(2000)
    // DAR admin Page
    .click("//input[@ng-model='ctrl.report.start_date']")
    .pause(2000)
    .click("//input[@ng-model='ctrl.report.end_date']")
    .pause(2000)
    .click("//input[@class='js-autocomplete ui-autocomplete-input']")
    .pause(2000)
    .waitForElementVisible("//li[@class='ui-menu-item']/a",2000)
    .moveToElement("//li[@class='ui-menu-item']/a",1,1)
    .pause(2000)
  }

  module.exports={
  adminlogin:adminlogin,
  activityMonitoring:activityMonitoring,
  downloadAnalytics:downloadAnalytics
}
