#test to try and scrape data from twitter

#imports
import csv
from getpass import getpass
from time import sleep

#selenium imports (needs selenium, python installed)
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver import Chrome

#define path to where chromedriver lives on pc
driver = Chrome(executable_path="C:/Users/matth/Downloads/chromedriver_92/chromedriver.exe")
driver.get("https://www.twitter.com/login")

#login to twitter using xpath, selenium, python
username = driver.find_element_by_xpath('//input[@name="session[username_or_email]"]')
username.send_keys(my_email)

my_pw = getpass()
password = driver.find_element_by_xpath('//input[@name="session[password]"]')
password.send_keys(my_pw)

password.send_keys(Keys.RETURN)