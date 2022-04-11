#test to try and scrape data from twitter

#imports
import csv
import config
from getpass import getpass
from time import sleep

#selenium imports (needs selenium, python installed)
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver import Chrome

#define path to where chromedriver lives on pc
#download updated chromedriver with each version and change path
driver = Chrome(executable_path="C:/Users/matth/Downloads/chromedriver_99/chromedriver.exe")
driver.get("https://twitter.com/i/flow/login")

#sleep to allow webpage to load
sleep(3)

#login to twitter using xpath, selenium, python
username = driver.find_element_by_xpath('//input[@class="r-30o5oe r-1niwhzg r-17gur6a r-1yadl64 r-deolkf r-homxoj r-poiln3 r-7cikom r-1ny4l3l r-t60dpp r-1dz5y72 r-fdjqy7 r-13qz1uu"]')
username.send_keys(config.my_email)

username.send_keys(Keys.RETURN)

sleep(3)

password = driver.find_element_by_xpath('//input[@class="r-30o5oe r-1niwhzg r-17gur6a r-1yadl64 r-deolkf r-homxoj r-poiln3 r-7cikom r-1ny4l3l r-t60dpp r-1dz5y72 r-fdjqy7 r-13qz1uu"]')
password.send_keys(config.my_pw)

password.send_keys(Keys.RETURN)

sleep(2)

#search for desired keys
search_keyword = driver.find_element_by_xpath('//input[@aria-label="Search query"]')
search_keyword.send_keys('#GCChat')
search_keyword.send_keys(Keys.RETURN)

##navigate to tabs to sort twitter data
# driver.find_element_by_link_text('Latest').click()
sleep(2)
#get tweets on current page
tweets = driver.find_elements_by_xpath('//article[@data-testid="tweet"]')
print("heree")


#when getting timedate data, ads/sponsers will have null values for this field

# get likes
# returns username and likes as a tuple
def getTweetData(tweet):
    ###extract likes from tweets###
    username = tweet.find_element_by_xpath('.//span').text
    likes = tweet.find_element_by_xpath('.//div[@data-testid="like"]').text
    try:
        postDate = tweet.find_element_by_xpath('.//time').get_attribute('datetime')
    except NoSuchElementException:
        return
    #txt = tweet.find_element_by_xpath('.//div[2]/div[2]/div[1]').text
    comment = tweet.find_element_by_xpath('.//div[2]/div[2]/div[2]/div[1]').text
    responding = tweet.find_element_by_xpath('.//div[2]/div[2]/div[2]/div[2]').text
    txt = comment + responding

    userLikes = (username, likes, txt)
    return userLikes

#get likes from tweets:
tweet_likes = []

for tweet in tweets:
    likesData = tweet.find_element_by_xpath('.//div[@data-testid="like"]').text #= getTweetData(tweet)
    if likesData is not None:
        tweet_likes.append(likesData)

sleep(4)

#TODO
#scroll script
#driver.execute_script('window.scrollTo(0, document.body.scrollHeight);')

#saving tweet data:
with open('savedTweetData.csv', 'w', newline='', encoding='utf-8') as f:
    header = ['name', 'likes', 'text']
    writer = csv.writer(f)
    writer.writerow(header)
    writer.writerows(tweet_likes)