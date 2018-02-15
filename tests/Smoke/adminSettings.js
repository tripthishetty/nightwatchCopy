

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
    //click settings link
    .click("//div[@class='tabs-navbar']/a[4]")
    .pause(2000)
    //click edit
    .click("//button[@class='btn btn-default pull-right']")
    .pause(1000)
  }

var addDataSet1 = function(driver)
{
    driver
    .useXpath()
  
    //set points for product review sharing tool
    .click("(//div[@class='group-edit-list']/div)[1]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[1]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[1]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for blog post sharing tool
    .click("(//div[@class='group-edit-list']/div)[2]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[2]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[2]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for brand connect sharing tool
    .click("(//div[@class='group-edit-list']/div)[3]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[3]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[3]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for Email group invite sharing tool
    .click("(//div[@class='group-edit-list']/div)[4]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[4]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[4]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for face2face sharing tool
    .click("(//div[@class='group-edit-list']/div)[5]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[5]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[5]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for facebook sharing tool
    .click("(//div[@class='group-edit-list']/div)[6]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[6]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[6]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for facebook page sharing tool
    .click("(//div[@class='group-edit-list']/div)[7]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[7]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[7]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for instagram sharing tool
    .click("(//div[@class='group-edit-list']/div)[8]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[8]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[8]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for pinterest sharing tool
    .click("(//div[@class='group-edit-list']/div)[9]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[9]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[9]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for retail review tool
    .click("(//div[@class='group-edit-list']/div)[10]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[10]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[10]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for link sharing tool
    .click("(//div[@class='group-edit-list']/div)[11]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[11]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[11]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for twitter sharing tool
    .click("(//div[@class='group-edit-list']/div)[12]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[12]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[12]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for photo upload sharing tool
    .click("(//div[@class='group-edit-list']/div)[13]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[13]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[13]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for photo upload to facebook sharing tool
    .click("(//div[@class='group-edit-list']/div)[14]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[14]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[14]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for photo upload to facebook page sharing tool
    .click("(//div[@class='group-edit-list']/div)[15]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[15]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[15]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for photo upload to twitter sharing tool
    .click("(//div[@class='group-edit-list']/div)[16]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[16]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[16]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for youtube sharing tool
    .click("(//div[@class='group-edit-list']/div)[17]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[17]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[17]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //toggled on cookie notification
    .click("//input[@ng-model='config.cookie_notification.values.cookie_modal_text_enabled.value']")
    .pause(500)
    //toggled on other cookie notification
    .click("//input[@ng-model='config.other_notification.values.other_modal_text_enabled.value']")
    .pause(500)
   

}
var addDataSet2 = function(driver)
{
    driver
    .useXpath()
    //set points for product review sharing tool
    .click("(//div[@class='group-edit-list']/div)[24]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[24]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[24]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for blog post sharing tool
    .click("(//div[@class='group-edit-list']/div)[25]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[25]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[25]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for brand connect sharing tool
    .click("(//div[@class='group-edit-list']/div)[26]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[26]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[26]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for Email group invite sharing tool
    .click("(//div[@class='group-edit-list']/div)[27]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[27]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[27]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for face2face sharing tool
    .click("(//div[@class='group-edit-list']/div)[28]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[28]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[28]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for facebook sharing tool
    .click("(//div[@class='group-edit-list']/div)[29]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[29]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[29]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for facebook page sharing tool
    .click("(//div[@class='group-edit-list']/div)[30]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[30]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[30]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for instagram sharing tool
    .click("(//div[@class='group-edit-list']/div)[31]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[31]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[31]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for pinterest sharing tool
    .click("(//div[@class='group-edit-list']/div)[32]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[32]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[32]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for retail review tool
    .click("(//div[@class='group-edit-list']/div)[33]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[33]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[33]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for link sharing tool
    .click("(//div[@class='group-edit-list']/div)[34]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[34]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[34]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for twitter sharing tool
    .click("(//div[@class='group-edit-list']/div)[35]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[35]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[35]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for photo upload sharing tool
    .click("(//div[@class='group-edit-list']/div)[36]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[36]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[36]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for photo upload to facebook sharing tool
    .click("(//div[@class='group-edit-list']/div)[37]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[37]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[37]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for photo upload to facebook page sharing tool
    .click("(//div[@class='group-edit-list']/div)[38]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[38]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[38]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for photo upload to twitter sharing tool
    .click("(//div[@class='group-edit-list']/div)[39]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[39]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[39]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //set points for youtube sharing tool
    .click("(//div[@class='group-edit-list']/div)[40]/div[2]/div/div[2]/input")
    .clearValue("(//div[@class='group-edit-list']/div)[40]/div[2]/div/div[2]/input")
    .setValue("(//div[@class='group-edit-list']/div)[40]/div[2]/div/div[2]/input", "10")
    .pause(500)
    //Enable custom Brand connect name
    .click("//input[@ng-model='config.feature.values.custom_brand_connect_name_enabled.value']")
    .clearValue("//input[@ng-model='config.feature.values.custom_brand_connect_name.value']")
    .setValue("//input[@ng-model='config.feature.values.custom_brand_connect_name.value']", "Brandconnect Custom name")
    .pause(500)
    //Enable welcome email
    .click("//input[@ng-model='config.feature.values.welcome_email_enabled.value']")
    .clearValue("//input[@ng-model='config.feature.values.welcome_email.value']")
    .setValue("//input[@ng-model='config.feature.values.welcome_email.value']", "welcome")
    .pause(1000)
    //Enable forgot password email
    .click("//input[@ng-model='config.feature.values.forgot_password_enabled.value']")
    .clearValue("//input[@ng-model='config.feature.values.forgot_password.value']")
    .setValue("//input[@ng-model='config.feature.values.forgot_password.value']", "forgot-password")
    .pause(1000)
    //Enable mission acceptance email
    .click("//input[@ng-model='config.feature.values.mission_acceptance_email_enabled.value']")
    .clearValue("//input[@ng-model='config.feature.values.mission_acceptance_email.value']")
    .setValue("//input[@ng-model='config.feature.values.mission_acceptance_email.value']", "mission-acceptance")
    .pause(1000)
    //Enable mission completion email
    .click("//input[@ng-model='config.feature.values.mission_completion_email_enabled.value']")
    .clearValue("//input[@ng-model='config.feature.values.mission_completion_email.value']")
    .setValue("//input[@ng-model='config.feature.values.mission_completion_email.value']", "mission-complete-dev")
    .pause(1000)
    //Enable post accepted email
    .click("//input[@ng-model='config.feature.values.post_accepted_email_enabled.value']")
    .clearValue("//input[@ng-model='config.feature.values.post_accepted_email.value']")
    .setValue("//input[@ng-model='config.feature.values.post_accepted_email.value']", "activity-accepted")
    .pause(1000)
    //Enable post declined email
    .click("//input[@ng-model='config.feature.values.post_declined_email_enabled.value']")
    .clearValue("//input[@ng-model='config.feature.values.post_declined_email.value']")
    .setValue("//input[@ng-model='config.feature.values.post_declined_email.value']", "activity-declined")
    .pause(1000)
    //Toggle on Blog
    .click("//div[@class='col-md-4'][2]/div[3]/div/div[1]/div[2]/div/div[2]/span/input")
    .pause(500)
    .clearValue("//div[@class='col-md-4'][2]/div[3]/div/div[2]/div[2]/div/div[2]/input")
    .setValue("//div[@class='col-md-4'][2]/div[3]/div/div[2]/div[2]/div/div[2]/input", "http://blog.smiley360.com/")
    .pause(500)
    .clearValue("//div[@class='col-md-4'][2]/div[3]/div/div[3]/div[2]/div/div[2]/input")
    .setValue("//div[@class='col-md-4'][2]/div[3]/div/div[3]/div[2]/div/div[2]/input", "Blog")
    .pause(1000)
    //Toggle on FAQ
    .click("//div[@class='col-md-4'][2]/div[4]/div/div[1]/div[2]/div/div[2]/span/input")
    .pause(500)
    .clearValue("//div[@class='col-md-4'][2]/div[4]/div/div[2]/div[2]/div/div[2]/input")
    .setValue("//div[@class='col-md-4'][2]/div[4]/div/div[2]/div[2]/div/div[2]/input", "http://smiley360.helpscoutdocs.com/")
    .pause(500)
    .clearValue("//div[@class='col-md-4'][2]/div[4]/div/div[3]/div[2]/div/div[2]/input")
    .setValue("//div[@class='col-md-4'][2]/div[4]/div/div[3]/div[2]/div/div[2]/input", "FAQ")
    .pause(1000)
    //enable user discussions
    .click("//div[@class='col-md-4'][2]/div[5]/div/div[2]/div[2]/div/div[2]/span/input")
    .pause(500)
   
}
var addDataSet3 =function(driver)
{
    driver
    .useXpath()
    //Add profile points
    .click("//div[@class='col-md-4'][3]/div[1]/div/div/div[2]/div/div[2]/input")
    .clearValue("//div[@class='col-md-4'][3]/div[1]/div/div/div[2]/div/div[2]/input")
    .setValue("//div[@class='col-md-4'][3]/div[1]/div/div/div[2]/div/div[2]/input", "200")
    .pause(500)
    //Points Forum participation Commenting
    .click("(//div[@class='col-md-4'][3]/div[2]/div/div/div[2]/div/div[2]/input)[1]")
    .clearValue("(//div[@class='col-md-4'][3]/div[2]/div/div/div[2]/div/div[2]/input)[1]")
    .setValue("(//div[@class='col-md-4'][3]/div[2]/div/div/div[2]/div/div[2]/input)[1]", "100")
    .pause(500)
    //Points Forum participation Starting a discussion
    .click("(//div[@class='col-md-4'][3]/div[2]/div/div/div[2]/div/div[2]/input)[2]")
    .clearValue("(//div[@class='col-md-4'][3]/div[2]/div/div/div[2]/div/div[2]/input)[2]")
    .setValue("(//div[@class='col-md-4'][3]/div[2]/div/div/div[2]/div/div[2]/input)[2]", "100")
    .pause(500)
    //age requirement
    .click("(//div[@class='col-md-4'][3]/div[3]/div/div/div[2]/div/div[2]/input)[1]")
    .clearValue("(//div[@class='col-md-4'][3]/div[3]/div/div/div[2]/div/div[2]/input)[1]")
    .setValue("(//div[@class='col-md-4'][3]/div[3]/div/div/div[2]/div/div[2]/input)[1]", "15")
    .pause(500)
    //age requirement Text
    .click("(//div[@class='col-md-4'][3]/div[3]/div/div/div[2]/div/div[2]/input)[2]")
    .clearValue("(//div[@class='col-md-4'][3]/div[3]/div/div/div[2]/div/div[2]/input)[2]")
    .setValue("(//div[@class='col-md-4'][3]/div[3]/div/div/div[2]/div/div[2]/input)[2]", "I am older than 15 years of age")
    .pause(500)
    //Custom registration page
    .click("//div[@class='col-md-4'][3]/div[5]/div/div[2]/div/div/div[1]/input")
    .setValue("//div[@class='col-md-4'][3]/div[5]/div/div[2]/div/div/div[1]/input", "custom field 1")
    .pause(500)
    .click("//div[@class='col-md-4'][3]/div[5]/div/div[2]/div/div/div[2]/span/input")
    .click("//div[@class='col-md-4'][3]/div[5]/div/div[2]/div/div/div[3]/button")
    .pause(500)
    //Email preference
    .click("//div[@class='col-md-4'][3]/div[6]/div/div/div[2]/div/div/div[2]/span/input")
    //.click("//div[@class='col-md-4'][3]/div[6]/div[1]/div/div[2]/div/div/div[2]/span/input")
    .pause(500)
    //Member Flags
    .click("//div[@class='col-md-4'][3]/div[7]/div/div[2]/div/div/input")
    .setValue("//div[@class='col-md-4'][3]/div[7]/div/div[2]/div/div/input", "Good Flag")
    .click("//div[@class='col-md-4'][3]/div[7]/div/div[2]/div/div/button")
    .pause(500)
    .execute('scrollTo(2000,2000)')
    //Transaction comments
    .click("//input[@ng-model='config.transaction_comment_new_item.name']")
    .setValue("//input[@ng-model='config.transaction_comment_new_item.name']", "Custom reason")
    .pause(1000)
    .click("//textarea[@ng-model='config.transaction_comment_new_item.description']")
    .setValue("//textarea[@ng-model='config.transaction_comment_new_item.description']", "Custom reason description")
    .click("(//button[@class='btn btn-draggable-add'])[3]")
    .pause(2000)
}


var saveSettings =  function(driver)
  {
    driver
    .useXpath()
    //scroll to the top
    .execute('scrollTo(100,100)')
    .click("//div[@class='tabs-buttons']/a[2]")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/savedAdminSettings.png')
    .pause(1000)
  }
module.exports={
  signIn: signIn,
  addDataSet1: addDataSet1,
  addDataSet2: addDataSet2,
  addDataSet3: addDataSet3,
  saveSettings: saveSettings
//sharing: sharing
}
