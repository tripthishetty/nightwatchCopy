var signIn =  function(driver)
  {
    driver
    .url(driver.globals.userNames.memberURL)
    .windowMaximize("current")
    .waitForElementVisible('body', 2000)
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
    .setValue("//input[@data-attachment='TopicPicture']", driver.globals.userNames.path + "topicImage.jpeg")
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
    .end();
}
module.exports={
  signIn: signIn,
createBrandConnectTopic: createBrandConnectTopic,
createBrandConnectDiscussion: createBrandConnectDiscussion
}