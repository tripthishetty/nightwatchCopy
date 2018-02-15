
var downloadImages = function(driver)
{
    driver
    .url("https://burst.shopify.com/")
    .pause(3000)
    .waitForElementVisible('body', 1000)
    .useXpath()
    //download brand connect image
    .pause(2000)
    .setValue("//input[@class='marketing-input search-form__input  search-form__input--jumbo']", "beach")
    .pause(1000)
    .keys(driver.Keys.ENTER)
    .pause(3000)
    .click("//img[@alt='blue beach waves']")
    .pause(2000)
    .click("//label[@for='photo_download_quality_standard']")
    .pause(2000)
    .click("//button[@data-ga-action='Download']")
    .pause(4000)
    //download survey badge
    .url("https://burst.shopify.com/")
    .pause(2000)
    .setValue("//input[@class='marketing-input search-form__input  search-form__input--jumbo']", "beach")
    .pause(1000)
    .keys(driver.Keys.ENTER)
    .pause(3000)
    .click("//img[@alt='beach pals']")
    .pause(2000)
    .click("//label[@for='photo_download_quality_standard']")
    .pause(2000)
    .click("//button[@data-ga-action='Download']")
    .pause(4000)
}

var modulecreateBrandConnect = require('./createBrandConnect.js')
var modulememberSigninEmail = require('./memberSigninEmail.js')

var editDiscussion = function(driver)
{
    driver
    .useXpath()
    //click Brand connect link
    .click("//a[@href='/brand_connect/topics']")
    .pause(3000)
    //click discussion title
    .click("(//a[@title='Discussion Title'])[1]")
    .pause(3000)
   //click discussion settings
    .click("//label[@class='bconnect-topics-item-config']")
    .pause(1000) 
    //click edit discussion link
    .click("//label[@class='bconnect-topics-item-config']/span/a[1]")
    .pause(3000)
    .execute('scrollTo(0,0)')
    .click("//input[@class='bconnect-new-discussion-field']")
    .setValue("//input[@class='bconnect-new-discussion-field']", "Entire Discussion should be visible.Entire Discussion should be visible.Entire Discussion should be visible. ")
    .pause(2000)
    //save the edits
    .click("(//input[@type='submit'])[1]")
    .pause(3000)
    //click Brand connect link
    .click("//a[@href='/brand_connect/topics']")
    .pause(3000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/bcDiscussionEdited.png')

}


var editTopic = function(driver)
{
    driver
    .useXpath()
    //click Brand connect link
    .click("//a[@href='/brand_connect/topics']")
    .pause(3000)
    //click discussion title
    .click("(//a[@title='Topic Title'])[1]/span")
    .pause(3000)
    //click topic settings
    .click("//label[@class='bconnect-topics-item-config']")
    .pause(1000)
    //click edit topic link
    .click("//label[@class='bconnect-topics-item-config']/span/a[1]")
    .pause(3000)
    .execute('scrollTo(500,500)')
    //edit
    .click("//input[@class='bconnect-new-discussion-field']")
    .setValue("//input[@class='bconnect-new-discussion-field']", "Entire Topic is visible.Entire Topic is visible.Entire Topic is visible.")
    .pause(1000)
    //save the edits
    .click("(//input[@type='submit'])[1]")
    .pause(3000)
    //click Brand connect link
    .click("//a[@href='/brand_connect/topics']")
    .pause(3000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/bcTopicEdited.png')
}

var adminCommentReply = function(driver)
{
    driver
    .useXpath()
    //click Brand connect link
    .click("//a[@href='/brand_connect/topics']")
    .pause(3000)
    //click discussion title
    .click("(//a[@title='Discussion Title'])[1]")
    .pause(3000)
    //add comment 1
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","admin comment 1")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //click reply icon
    .click("(//i[@class='fa fa-commenting-o'])[1]")
    .pause(2000)
    //add a reply
    .click("(//textarea[@class='bconnect-new-post-field ng-pristine ng-valid'])[2]")
    .setValue("(//textarea[@class='bconnect-new-post-field ng-pristine ng-valid'])[2]","admin reply 1")
    .pause(1000)
    //submit the reply
    .click("(//div[@class='bconnect-new-post ng-isolate-scope ng-pristine ng-valid'])[3]/a")
    .pause(2000)
    //like a comment
    .click("(//i[@class='fa fa-heart-o'])[1]")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/bcAdminCommentReply.png')
    //logout
    .click("//a[@class='header-logout']")
    .pause(2000)
}

var memberSignIn = function(driver)
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
}
var memberBC_Notification = function(driver)
{
    driver
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/bcNotificationDot.png')
    .pause(2000)
    .click("//img[@class='notification']")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/bcNotification.png')
    .pause(1000)
}
var memberCommentReply = function(driver)
{
    driver
    .useXpath()
    //click Brand connect link
    .click("//a[@href='/brand_connect/topics']")
    .pause(5000)
    //verify if member can start a discussion
    .saveScreenshot('screenshots/bcMemberStartDiscussion.png')
    .pause(1000)
    //click first Discussion
    .click("(//a[@title='Discussion Title'])[1]")
    .pause(3000)
    //add comment 1
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member comment 1")
    .pause(500)
    //upload picture
    .setValue("//div[@class='bconnect-new-post-attach']/input", driver.globals.userNames.path + "blue-beach-waves_925x.jpg")
    .pause(2000)
    //scroll
    .execute('scrollTo(2000,2000)')
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //click reply icon
    .click("(//i[@class='fa fa-commenting-o'])[1]")
    .pause(2000)
    //add a reply
    .click("(//textarea[@class='bconnect-new-post-field ng-pristine ng-valid'])[2]")
    .setValue("(//textarea[@class='bconnect-new-post-field ng-pristine ng-valid'])[2]","member reply 1")
    .pause(1000)
    //submit the reply
    .click("(//div[@class='bconnect-new-post ng-isolate-scope ng-pristine ng-valid'])[3]/a")
    .pause(2000)
    //like a comment
    .click("(//i[@class='fa fa-heart-o'])[1]")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/bcMemberCommentReply.png')
}
var memberCommentSorting = function(driver)
{
    driver
    .useXpath()
    //click Brand connect link
    .click("//a[@href='/brand_connect/topics']")
    .pause(5000)
    //click first Discussion
    .click("(//a[@title='Discussion Title'])[1]")
    .pause(3000)
    //add comment 1
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 1")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 2
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 2")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 3
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 3")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 4
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 4")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 5
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 5")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 6
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 6")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 7
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 7")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 8
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 8")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 9
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 9")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 10
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 10")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 11
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 11")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 12
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 12")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 13
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 13")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 14
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 14")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 15
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 15")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 16
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 16")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 17
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 17")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 18
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 18")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 19
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 19")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 20
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 20")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 21
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 21")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 22
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 22")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 23
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 23")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 24
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 24")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 25
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 25")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 26
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 26")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 27
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 27")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 28
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 28")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 29
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 29")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 30
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 30")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 31
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 31")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 32
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 32")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 33
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 33")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //add comment 34
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 34")
    .pause(500)
     //add comment 35
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 35")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
     //add comment 36
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 36")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
     //add comment 37
    .click("(//textarea[@ng-model='comment.text'])[1]")
    .pause(500)
    .setValue("(//textarea[@ng-model='comment.text'])[1]","member sort 37")
    .pause(500)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    //submit
    .click("(//a[@class='btn btn-color btn-md bconnect-new-post-submit btn-forum btn-forum-invert'])[1]")
    .pause(2000)
    .execute('scrollTo(8000,8000)')
    .pause(1000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/bcMemberCommentSorting.png')

}
var enableMemberDiscussion = function(driver)
{
    driver
    .useXpath()
    .url(driver.globals.userNames.adminURL)
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
    //click Administration
    .click("(//a[@class='test-nav-config'])[2]")
    .pause(2000)
    //click edit
    .click("//button[@class='btn btn-default pull-right']")
    .pause(1000)
    .execute('scrollTo(2300,2300)')
    //enable user discussions
    .click("//div[@class='col-md-4'][2]/div[5]/div/div[1]/div[2]/div/div[2]/span/input")
    .pause(2000)
    //enable admin moderation
    .click("//div[@class='col-md-4'][2]/div[5]/div/div[2]/div[2]/div/div[2]/span/input")
    .pause(2000)
    //scroll to the top
    .execute('scrollTo(100,100)')
    //save
    .click("//div[@class='tabs-buttons']/a[2]")
    .pause(2000)
    .execute('scrollTo(2300,2300)')
    .pause(1000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/enableMemberDiscussion.png')
    .pause(1000)
    //logout
    .click("//button[@class='topbar-menu-toggle test-nav-user']")
    .pause(100)
    .click("//a[@class='test-nav-logout']")
    .pause(2000)
}
var confirmMemberStartDiscussion = function(driver)
{
    driver
    //click Brand connect link
    .click("//a[@href='/brand_connect/topics']")
    .pause(5000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/bcConfirmMemberStartDiscussion.png')
    .pause(1000)
}
var createMemberDiscussion = function(driver)
{
    driver
    .useXpath()
    .click("(//a[@class='btn btn-color btn-md relative pull-right btn-forum btn-forum-narrow'])[1]")
    .pause(4000)
    //add title
    .click("//input[@id='discussion_title']")
    .pause(1000)
    .setValue("//input[@id='discussion_title']","discussion created by a member")
    .pause(1000)
    //add description
    .click("//textarea[@id='discussion_first_comment_attributes_text']")
    .pause(1000)
    .setValue("//textarea[@id='discussion_first_comment_attributes_text']","description for discussion created by a member.description for discussion created by a member.")
    .pause(1000)
    //Upload image to the discussion
    .setValue("//input[@data-attachment='CommentPicture']", driver.globals.userNames.path + "blue-beach-waves_925x.jpg")
    .pause(2000)
    //submit
    .click("//input[@value='Create Discussion']")
    .pause(2000)
}
var createFemaleMember = function(driver)
{
    driver
    .useXpath()
    .url(driver.globals.userNames.memberURL)
    .click("(//a[contains(text(), 'Create Account')])[2]")
    .pause(1000)
    .click("//div[@class='desktop-container ng-scope']/div/div[1]/a[1]/div")
    .pause(1000)
    .click("//div[@class='desktop-container ng-scope']/div/form/div[1]/input")
    .pause(1000)
    .setValue('//div[@class="desktop-container ng-scope"]/div/form/div[1]/input', driver.globals.userNames.memberEmailFemale)
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
    .setValue("//input[@id='login']", driver.globals.userNames.memberEmailFemale)
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
    .click("(//form[@id='edit_member'])[6]/div[7]/select/option[3]")
    .pause(2000)
    .click("(//button[@class='btn login themed-button'])[6]")
    .pause(4000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/registrationSignupSuccessfulViaEmail.png')
    .pause(2000)
}
var memberDiscussionVisibilityUntilApproved = function(driver)
{
    driver
    //click Brand connect link
    .click("//a[@href='/brand_connect/topics']")
    .pause(5000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/bcMemberDiscussionVisibilityUntilApproved.png')
    .pause(1000)
}
var approveMemberDiscussion = function(driver)
{
    driver
    //click Brand connect link
    .click("//a[@href='/brand_connect/topics']")
    .pause(5000)
    .click("//a[@href='/brand_connect/topics/unapproved']")
    .pause(3000)
    .click("(//a[contains(text(),'Topic Title')])[1]")
    .pause(3000)
    .click("(//a[contains(text(),'discussion created by a member')])[1]")
    .pause(3000)
    //click discussion settings
    .click("//label[@class='bconnect-topics-item-config']")
    .pause(1000) 
    //click approve discussion link
    .click("//label[@class='bconnect-topics-item-config']/span/a[2]")
    .pause(1000)
    .acceptAlert()
    .pause(3000)
    //logout
    .click("//a[@class='header-logout']")
    .pause(3000)
    
}
var verifyMemberDiscussionOnApproval = function(driver)
{
    driver
    //click Brand connect link
    .click("//a[@href='/brand_connect/topics']")
    .pause(5000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/bcMemberDiscussionVisibilityOnApproval.png')
    .pause(1000)
}
var hideComment = function(driver)
{
    driver
    //click Brand connect link
    .click("//a[@href='/brand_connect/topics']")
    .pause(5000)
    .click("(//ul[@class='bconnect-topics-list'])[1]/li/h4/a")
    .pause(4000)
    .execute('scrollTo(1000,1000)')
    .click("(//a[@ng-hide='comment.hidden'])[1]")
    .pause(1000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/bcHideComment.png')
    .pause(1000)
    .click("//a[@class='header-logout']")
    .pause(3000)
}
var verifyHideComment = function(driver)
{
    driver
    //click Brand connect link
    .click("//a[@href='/brand_connect/topics']")
    .pause(5000)
    .click("(//ul[@class='bconnect-topics-list'])[1]/li/h4/a")
    .pause(4000)
    .execute('scrollTo(600,600)')
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/bcVerifyHideComment.png')
    .pause(2000)
}
module.exports={
    //downloadImages: downloadImages,
  //SignIn: modulecreateBrandConnect.signIn,    //signin to member application as an admin
//createBrandConnectTopic: modulecreateBrandConnect.createBrandConnectTopic,
//createBrandConnectDiscussion: modulecreateBrandConnect.createBrandConnectDiscussion,
//editDiscussion: editDiscussion,
//editTopic: editTopic,
//adminCommentReply: adminCommentReply,
//memberSignIn: memberSignIn,                   //signin to member application as a member
//memberBC_Notification: memberBC_Notification,
//memberCommentReply: memberCommentReply,
//memberCommentSorting: memberCommentSorting,
//enableMemberDiscussion: enableMemberDiscussion,
//signinEmail: modulememberSigninEmail.signinEmail,   //signin to member application as a member who has not created the discussion
//confirmMemberStartDiscussion: confirmMemberStartDiscussion,
//createMemberDiscussion: createMemberDiscussion,
//createFemaleMember: createFemaleMember,
//memberDiscussionVisibilityUntilApproved: memberDiscussionVisibilityUntilApproved,
//signInAdmin: modulecreateBrandConnect.signIn,     //signin to member application as an admin again to approve discussion
//approveMemberDiscussion: approveMemberDiscussion,
//signinEmailAgain: modulememberSigninEmail.signinEmail, //signin to member application as a member who has not started the discussion again
//verifyMemberDiscussionOnApproval: verifyMemberDiscussionOnApproval,
signInAdmin2: modulecreateBrandConnect.signIn,         //signin to member application as an admin again to hide comment
hideComment: hideComment,
signinMember3: modulememberSigninEmail.signinEmail,
verifyHideComment: verifyHideComment

}