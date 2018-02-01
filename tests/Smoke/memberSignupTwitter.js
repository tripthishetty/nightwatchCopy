
module.exports = {
  'Signing up via Twitter' : function(driver)
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
    .click("(//form[@id='edit_member'])[6]/div[1]/input")
    .pause(1000)
    .setValue("(//form[@id='new_member'])[6]/div[1]/input", driver.globals.userNames.twitterEmail)
    .pause(2000)
    .click("(//form[@id='new_member'])[6]/div[3]/input")
    .pause(1000)
    .setValue("(//form[@id='new_member'])[6]/div[3]/input", driver.globals.userNames.memberLastName)
    .pause(2000)
    .click("(//form[@id='new_member'])[6]/div[4]/select/option[2]")
    .pause(2000)
    .click("(//form[@id='new_member'])[6]/div[5]/input")
    .pause(1000)
    .setValue("(//form[@id='new_member'])[6]/div[5]/input", driver.globals.userNames.zipCode)
    .pause(2000)
   //select month
    .click("(//form[@id='new_member'])[6]/div[6]/div/div/select")
    .pause(2000)
    .click("(//form[@id='new_member'])[6]/div[6]/div/div/select/option[2]")
    .pause(2000)
    //select day
    .click("(//form[@id='new_member'])[6]/div[6]/div/div[2]/input")
    .pause(1000)
    .setValue("(//form[@id='new_member'])[6]/div[6]/div/div[2]/input","15")
    .pause(1000)
    //select year
    .click("(//form[@id='new_member'])[6]/div[6]/div/div[3]/input")
    .pause(500)
    .setValue("(//form[@id='new_member'])[6]/div[6]/div/div[3]/input","1991")
    .pause(1000)
    .click("(//form[@id='new_member'])[6]/div[7]/select")
    .pause(1000)
    .click("(//form[@id='new_member'])[6]/div[7]/select/option[2]")
    .pause(2000)
    .click("(//button[@class='btn login themed-button'])[6]")
    .pause(4000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/registrationSignupSuccessfulViaTwitter.png')
    .pause(2000)
    .end();
  }



}
