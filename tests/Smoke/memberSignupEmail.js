module.exports = {
  'Signing up via Email' : function(driver)
  {
    driver
    .url(driver.globals.userNames.memberURL)
    .windowMaximize("current")
    .waitForElementVisible('body', 2000)
    .useXpath()
    .click("(//a[contains(text(), 'Create Account')])[2]")
    .pause(1000)
    .click("//div[@class='desktop-container ng-scope']/div/div[1]/a[1]/div")
    .pause(1000)
    .click("//div[@class='desktop-container ng-scope']/div/form/div[1]/input")
    .pause(1000)
    .setValue('//div[@class="desktop-container ng-scope"]/div/form/div[1]/input', driver.globals.userNames.memberEmail)
    .pause(1000)
    .click("//div[@class='desktop-container ng-scope']/div/form/div[2]/div/input[1]")
    .pause(1000)
    .setValue("//div[@class='desktop-container ng-scope']/div/form/div[2]/div/input[1]", driver.globals.userNames.memberPassword)
    .pause(1000)
    .click("//div[@class='desktop-container ng-scope']/div/form/div[3]/div/div/div/input")
    .pause(2000)
    .click("//div[@class='desktop-container ng-scope']/div/button")
    .pause(4000)
    .url("http://yopmail.com")
    .pause(3000)
    .click("//input[@id='login']")
    .pause(1000)
    .setValue("//input[@id='login']", driver.globals.userNames.memberEmail)
    .pause(5000)
    .click("//input[@class='sbut']")
    .pause(4000)
    .frame('ifmail')
    .pause(2000)
    .click("//td[@class='mcnButtonContent']/a")
    .pause(4000)
    //.url("https://tripsprint88staging.staging.socialmedialink.com/members/edit#/")
    .window_handles(function(result) {
    var handle = result.value[1];
    this.switchWindow(handle);})
    .pause(2000)
    .click("(//form[@id='edit_member'])[6]/div[2]/input")
    .pause(1000)
    //add first name
    .setValue("(//form[@id='edit_member'])[6]/div[2]/input", driver.globals.userNames.memberFirstName)
    .pause(2000)
    .click("(//form[@id='edit_member'])[6]/div[3]/input")
    .pause(1000)
    //add last name
    .setValue("(//form[@id='edit_member'])[6]/div[3]/input", driver.globals.userNames.memberLastName)
    .pause(2000)
    .click("(//form[@id='edit_member'])[6]/div[5]/input")
    .pause(1000)
    //add zipcode
    .setValue("(//form[@id='edit_member'])[6]/div[5]/input", driver.globals.userNames.zipCode)
    .pause(1000)
    //select month
    .click("(//form[@id='edit_member'])[6]/div[6]/div/div/select")
    .pause(1000)
    .click("(//form[@id='edit_member'])[6]/div[6]/div/div/select/option[2]")
    .pause(2000)
    //select day
    .click("(//form[@id='edit_member'])[6]/div[6]/div/div[2]/input")
    .pause(1000)
    .setValue("(//form[@id='edit_member'])[6]/div[6]/div/div[2]/input","15")
    .pause(1000)
    //select year
    .click("(//form[@id='edit_member'])[6]/div[6]/div/div[3]/input")
    .pause(500)
    .setValue("(//form[@id='edit_member'])[6]/div[6]/div/div[3]/input","1991")
    .pause(1000)
    //select gender
    .click("(//form[@id='edit_member'])[6]/div[7]/select")
    .pause(1000)
    .click("(//form[@id='edit_member'])[6]/div[7]/select/option[2]")
    .pause(2000)
    .click("(//button[@class='btn login themed-button'])[6]")
    .pause(4000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/registrationSignupSuccessfulViaEmail.png')
    .pause(2000)
  }



}
