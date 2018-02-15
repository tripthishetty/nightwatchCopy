module.exports = {
  'Signing in via Facebook' : function(driver)
  {
    driver
    .url(driver.globals.userNames.memberURL)
    .windowMaximize("current")
    .waitForElementVisible('body', 2000)
    .useXpath()
    .click("(//a[contains(text(), 'Create Account')])[2]")
    .pause(1000)
    .click("//div[@class='desktop-container ng-scope']/div/div[1]/a[2]/div")
    .pause(1000)
    .click("//input[@id='email']")
    .clearValue("//input[@id='email']")
    .pause(2000)
    .setValue("//input[@id='email']", driver.globals.userNames.facebookEmail)
    .click("//input[@id='pass']")
    .clearValue("//input[@id='pass']")
    .pause(2000)
    .setValue("//input[@id='pass']", driver.globals.userNames.facebookPass)
    .pause(2000)
    .click("//button[@value='1']")
    .pause(4000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/registrationSigninSuccessfulViaFacebook.png')
    .pause(2000)
  }
}
