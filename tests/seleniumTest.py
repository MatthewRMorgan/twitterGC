from selenium import webdriver

## for chrome ##
chromedriver = "C:/Users/matth/Downloads/chromedriver_92/chromedriver.exe"
driver = webdriver.Chrome(chromedriver)
driver.get("http:google.com")

## for firefox ##
#driver = webdriver.Firefox()
#driver.get("http:google.com")