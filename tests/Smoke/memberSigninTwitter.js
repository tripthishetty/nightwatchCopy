module.exports = {
  'Signing in via Twitter' : function(driver)
  {
    driver
    .url(driver.globals.userNames.memberURL)
    .windowMaximize("current")
    .waitForElementVisible('body', 2000)
    .useXpath()
    .click("(//a[contains(text(), 'Create Account')])[2]")
    .pause(1000)
    .click("//div[@class='desktop-container ng-scope']/div/div[1]/a[3]/div")
    .pause(1000)
    .click("//input[@id='username_or_email']")
    .clearValue("//input[@id='username_or_email']")
    .pause(2000)
    .setValue("//input[@id='username_or_email']", driver.globals.userNames.twitterEmail)
    .click("//input[@id='password']")
    .clearValue("//input[@id='password']")
    .pause(2000)
    .setValue("//input[@id='password']", driver.globals.userNames.twitterPass)
    .pause(2000)
    .click("//input[@value='Sign In']")
    .pause(4000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/registrationSigninSuccessfulViaEmail.png')
    .pause(2000)
  }


}
