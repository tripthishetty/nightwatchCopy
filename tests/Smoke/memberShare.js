

var signIn =  function(driver)
  {
    driver
    .url(driver.globals.userNames.memberURL)
    .windowMaximize("current")
    .waitForElementVisible('body', 2000)
    .useXpath()
    .click("//div[@class='welcome translucent']/div[2]/a[1]")
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
    .saveScreenshot('screenshots/siginConfirm.png')
    .pause(2000)
  }

var connectSocialMedia = function(driver)
{
  driver
  .click("//a[@class='header-user  test-edit-profile']")
  .pause(2000)
  //facebook connect
  .click("(//a[@class='btn btn-facebook-connect btn-md2 btn-block'])[2]")
  .pause(4000)
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
  .pause(2000)
  //twitter connect
  .click("(//a[@class='btn btn-twitter-connect btn-md2 btn-block'])[2]")
  .pause(4000)
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
  .pause(2000)
  //instagram
  .click("//a[@class='btn btn-instagram-connect btn-md2 btn-block']")
  .pause(4000)
  .click("//input[@id='id_username']")
  .clearValue("//input[@id='id_username']")
  .pause(2000)
  .setValue("//input[@id='id_username']", driver.globals.userNames.instagramUserName)
  .click("//input[@id='password']")
  .clearValue("//input[@id='id_password']")
  .pause(2000)
  .setValue("//input[@id='id_password']", driver.globals.userNames.instagramPass)
  .pause(2000)
  .click("//input[@value='Log in']")
  .pause(2000)
  .execute('scrollTo(0,0)')
  .click("//a[contains(text(),'Dashboard')]")
  .pause(4000)
}
var acceptActivity = function(driver)
{
  driver
  .click("//a[contains(text(), 'Sharing Tool Activity name')]")
  .pause(2000)
  .execute('scrollTo(1000,1000)')
  .pause(2000)
  .click("//a[@class='btn btn-color btn-lg']")
  .pause(4000)
}

var fillShipping =  function(driver)
{
  driver
  .click("//select[@id='member_country']/option[1]")
  .pause(2000)
  .click("//input[@id='member_address_1']")
  .pause(2000)
  .setValue("//input[@id='member_address_1']", "6010 Kennedy Blvd E")
  .pause(2000)
  .click("//input[@id='member_address_2']")
  .pause(2000)
  .setValue("//input[@id='member_address_2']","Apt 56")
  .pause(2000)
  .click("//input[@id='member_city']")
  .pause(2000)
  .setValue("//input[@id='member_city']", "West New York" )
  .pause(2000)
  .click("//select[@id='member_state']/option[37]")
  .pause(2000)
  .click("//input[@id='member_zip_code']")
  .pause(2000)
  .clearValue("//input[@id='member_zip_code']")
  .pause(2000)
  .setValue("//input[@id='member_zip_code']", "07093")
  .pause(2000)
  .click("//input[@value='Submit and Start Activity']")
  .pause(4000)
}

var clickActivity = function(driver)
{
  driver
  .click("//a[contains(text(),'Sharing Tool Activity name')]")
  .pause(4000)
}

var sharing = function(driver)
{
  driver
  .click("(//div[@class='rating ng-isolate-scope'])[1]/img[2]")
  .pause(2000)
  .execute('scrollTo(250,250)')
  .pause(2000)
  //facebook
  .click("(//div[@class='sharing-list-buttons'])[1]/a[1]")
  .pause(2000)
  .click("//textarea[@ng-model='facebook_post']")
  .pause(2000)
  .setValue("//textarea[@ng-model='facebook_post']", "Facebook suggested Phrase - The product was good. I would recommend this to my friends and family too.")
  .pause(2000)
  .click("//label[@for='facebook_cb']")
  .pause(2000)
  //facebook page
  .click("(//div[@class='sharing-list-buttons'])[2]/a[1]")
  .pause(2000)
  .click("//textarea[@ng-model='facebook_page_post']")
  .pause(2000)
  .setValue("//textarea[@ng-model='facebook_page_post']", "Facebook page suggested Phrase - The product was good. I would recommend this to my friends and family too.")
  .pause(2000)
  .click("//label[@for='facebook_page_cb']")
  .pause(2000)
  //twitter
  .click("(//div[@class='sharing-list-buttons'])[3]/a[1]")
  .pause(2000)
  .execute('scrollTo(1500,1500)')
  //face2face
  .click("(//div[@class='sharing-list-buttons'])[4]/a[1]")
  .pause(2000)
  .click("//textarea[@ng-model='face2face_post']")
  .pause(2000)
  .setValue("//textarea[@ng-model='face2face_post']", "Face2face - The product was good. I would recommend this to my friends and family too.")
  .pause(2000)
  .click("//label[@for='face2face_cb']")
  .pause(2000)
  .execute('scrollTo(2000,2000)')
  //upload photo to facebook
  .click("(//div[@class='sharing-list-buttons'])[5]/a[1]")
  .pause(2000)
  .setValue("(//input[@type='file'])[1]", "C:/Users/Tripthi/Pictures/Gillette.jpg")
  .pause(4000)
  .click("//textarea[@ng-model='upload_photo_fb_post']")
  .pause(2000)
  .setValue("//textarea[@ng-model='upload_photo_fb_post']", "Upload to Facebook - The product was good. I would recommend this to my friends and family too.")
  .pause(2000)
  .execute('scrollTo(2500,2500)')
  .click("//label[@for='upload_photo_facebook_cb']")
  .pause(2000)
}
module.exports={
  signIn: signIn,
  //connectSocialMedia: connectSocialMedia,
//acceptActivity: acceptActivity,
//fillShipping: fillShipping,
clickActivity: clickActivity,
sharing: sharing
}
