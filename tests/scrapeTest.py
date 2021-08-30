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

#get tweets on current page
tweets = driver.find_elements_by_xpath('//div[@data-testid="tweet"]')

