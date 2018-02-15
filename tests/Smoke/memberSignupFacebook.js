module.exports = {
  'Signing up via Facebook' : function(driver)
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
    .keys(driver.Keys.ENTER)
    .pause(2000)
    .keys(driver.Keys.ENTER)
    .pause(2000)
    .keys(driver.Keys.ENTER)
    .pause(4000)
    .click("(//form[@id='edit_member'])[6]/div[2]/input")
    .pause(1000)
    .setValue("(//form[@id='edit_member'])[6]/div[5]/input", driver.globals.userNames.zipCode)
    .pause(1000)
    .click("(//button[@class='btn login themed-button'])[6]")
    .pause(4000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/registrationSignupSuccessfulViaFacebook.png')
    .pause(2000)
  }



}
