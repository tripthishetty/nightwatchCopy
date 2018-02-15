

  var signinEmail = function(driver)
  {
    driver
    .url(driver.globals.userNames.memberURL)
    .windowMaximize("current")
    //.waitForElementVisible('body', 2000)
    .useXpath()
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
    .pause(4000)
    //.assert.containsText("//div[@class='content-offer js-content-offer']/h1", 'Offers for You')
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/siginConfirm.png')
    .pause(2000)
  }

module.exports = {
    signinEmail: signinEmail
}
