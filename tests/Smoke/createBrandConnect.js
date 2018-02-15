var downloadImages = function(driver)
{
    driver
    .url("https://burst.shopify.com/")
    .pause(3000)
    .waitForElementVisible('body', 1000)
    .useXpath()
    //download activity badge
    .pause(2000)
    .setValue("//input[@class='marketing-input search-form__input  search-form__input--jumbo']", "beach")
    .pause(1000)
    .keys(driver.Keys.ENTER)
    .pause(3000)
    .click("(//div[@class='grid '])[1]/div[2]/div[1]")
    .pause(2000)
    .click("//label[@for='photo_download_quality_standard']")
    .pause(2000)
    .click("//button[@data-ga-action='Download']")
    .pause(4000)
}
var signIn =  function(driver)
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
    .setValue('//div[@class="desktop-container ng-scope"]/div/form/div[1]/input', driver.globals.userNames.adminEmail)
    .pause(1000)
    .click("//div[@class='desktop-container ng-scope']/div/form/div[2]/input")
    .pause(1000)
    .setValue("//div[@class='desktop-container ng-scope']/div/form/div[2]/input", driver.globals.userNames.adminPassword)
    .pause(1000)
    .click("//div[@class='desktop-container ng-scope']/div/form/button")
    .pause(4000)
  }
  
var firstSignin = function(driver)
{
    driver
    .useXpath()
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
}
var createBrandConnectTopic = function(driver)
{
    driver
    .useXpath()
    //click Brand connect link
    .click("//a[@href='/brand_connect/topics']")
    .pause(5000)
    //add new Topic
    .click("//a[@href='/brand_connect/topics/new']")
    .pause(3000)
    //Upload brand connect topic image
    .setValue("//input[@data-attachment='TopicPicture']", driver.globals.userNames.path + "blue-beach-waves_925x.jpg")
    .pause(2000)
    //add topic title
    .click("//input[@id='topic_title']")
    .setValue("//input[@id='topic_title']","Topic Title")
    .pause(500)
    //submit
    .click("//input[@value='Create Topic']")
    .pause(2000)
}
var createBrandConnectDiscussion = function(driver)
{
    driver
    .useXpath()
    //add new Discussion
    .click("//a[@class='btn btn-color btn-md pull-right bconnect-topic-bar-button btn-forum']")
    .pause(3000)
    //add discussion title
    .click("//input[@id='discussion_title']")
    .setValue("//input[@id='discussion_title']","Discussion Title")
    .pause(500)
    //add discussion message
    .click("//textarea[@id='discussion_first_comment_attributes_text']")
    .pause(500)
    .setValue("//textarea[@id='discussion_first_comment_attributes_text']", "Discussion message Discussion message Discussion message Discussion message Discussion message Discussion message")
    //submit
    .click("//input[@value='Create Discussion']")
    .pause(2000)
    //verify
    //click Brand connect link
    .click("//a[@href='/brand_connect/topics']")
    .pause(3000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyBrandConnectCreation.png')
    .pause(1000)
}
module.exports={
    downloadImages: downloadImages,
  signIn: signIn,
  firstSignin: firstSignin,
createBrandConnectTopic: createBrandConnectTopic,
createBrandConnectDiscussion: createBrandConnectDiscussion
}