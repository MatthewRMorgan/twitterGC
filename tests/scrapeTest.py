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
driver = Chrome(executable_path="C:/Users/matth/Downloads/chromedriver_92/chromedriver.exe")
driver.get("https://www.twitter.com/login")

#sleep to allow webpage to load
sleep(2)

#login to twitter using xpath, selenium, python
username = driver.find_element_by_xpath('//input[@name="session[username_or_email]"]')
username.send_keys(config.my_email)

password = driver.find_element_by_xpath('//input[@name="session[password]"]')
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
tweets = driver.find_elements_by_xpath('//div[@data-testid="tweet"]')

#tweet1 = tweets[0]

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
    txt = tweet.find_element_by_xpath('.//div[2]/div[2]/div[1]').text

    userLikes = (username, likes, txt)
    return userLikes

#get likes from tweets:
tweet_likes = []

for tweet in tweets:
    likesData = getTweetData(tweet)
    if likesData is not None:
        tweet_likes.append(likesData)

sleep(2)

print(tweet_likes[0])